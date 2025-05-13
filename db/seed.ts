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

  console.log('Database seeded successfully!');
}

main();
