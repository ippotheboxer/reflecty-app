'use server';
import { prisma } from "../prisma";

export async function getPromptsByCategory(selectedCategory: string, userId: string) {
  const journalType = await prisma.journalType.findFirst({
    where: {
      name: selectedCategory,
      OR: [
        { userId },
        { userId: null }
      ]
    }
  });

  if (!journalType) {
    return [];
  }

  const prompts = await prisma.journal.findMany({
    where: {
      userId,
      typeId: journalType.id
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return prompts;
}

export async function getRandomPromptByCategory(categoryName: string, userId: string) {
  const journalType = await prisma.journalType.findFirst({
    where: {
      name: categoryName,
      OR: [{ userId }, { userId: null }],
    },
    include: {
      prompts: true,
    },
  });

  if (!journalType || journalType.prompts.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * journalType.prompts.length);
  return journalType.prompts[randomIndex].content;
}