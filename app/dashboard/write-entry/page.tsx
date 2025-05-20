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
    select: {
      name: true,
      iconName: true,
      bgColor: true
    }
  });

  return (
    <div className="">
      <h1 className="text-2xl mb-8 border-b-1 border-b-gray-300 pb-1">Write New Entry</h1>
      <WriteEntryForm userId={session!.user.id as string} types={types} />
    </div>
  );
}

export default WriteEntryPage;