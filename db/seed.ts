import { PrismaClient } from '@prisma/client'
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  await prisma.user.deleteMany();
  await prisma.account.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.habit.deleteMany();
  await prisma.habitCompletion.deleteMany();
  await prisma.journal.deleteMany();
  await prisma.journalType.deleteMany();
  await prisma.moodEntry.deleteMany();
  await prisma.prompt.deleteMany();
  await prisma.quote.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();

  await prisma.user.createMany({ data: sampleData.users });

  // Seed journal types and prompts
  for (const type of sampleData.journalTypes) {
    const journalType = await prisma.journalType.create({
      data: {
        name: type.name,
        description: type.description,
        isCustom: type.isCustom,
      },
    });

    // Seed prompts separately after creating journalType
    const prompts = type.prompts.map(prompt => ({
      content: prompt.content,
      typeId: journalType.id,  // Use the id of the created journalType
    }));

    await prisma.prompt.createMany({
      data: prompts,
    });
  }

  console.log('Database seeded successfully!');
}

main();
