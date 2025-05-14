'use server';
import { prisma } from "../prisma";
import { journalFormSchema } from "../validators";

// Get journal entries by user ID
export async function getJournalEntriesByUserId(userId: string) {
  const data = await prisma.journal.findMany({
    where: { userId: userId }
  });

  return data;
}

export async function createJournalEntry(_: any, formData: FormData) {
  const raw = {
    userId: formData.get('userId'),
    typeName: formData.get('typeName'),
    title: formData.get('title'),
    content: formData.get('content'),
  };

  const result = journalFormSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: 'Validation failed',
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { userId, typeName, title, content } = result.data;

  // Look up the JournalType
  const journalType = await prisma.journalType.findFirst({
    where: {
      name: typeName,
      OR: [
        { userId },
        { userId: null },
      ]
    }
  });

  if (!journalType) {
    return {
      success: false,
      message: 'Journal type not found',
    };
  }

  await prisma.journal.create({
    data: {
      userId,
      typeId: journalType.id,
      title,
      content,
    }
  });

  return {
    success: true,
    message: 'Journal entry created successfully',
  };
}