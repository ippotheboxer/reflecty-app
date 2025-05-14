import React from 'react';
import { auth } from '@/auth';
import WriteEntryForm from './WriteEntryForm';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

const WriteEntryPage = async () => {
  const session = await auth();

  if (!session?.user) return redirect('/sign-in');

  const types = await prisma.journalType.findMany({
    where: {
      OR: [
        { userId: session?.user.id },
        { userId: null }
      ]
    },
    select: { name: true }
  });

  const typeNames = types.map(t => t.name);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">New Journal Entry</h1>
      <WriteEntryForm userId={session!.user.id as string} types={typeNames} />
    </div>
  );
}

export default WriteEntryPage;