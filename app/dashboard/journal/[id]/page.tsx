import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MoveLeftIcon } from 'lucide-react';

const JournalDetailPage = async ({ params }: { params: { id: string } }) => {
  const journal = await prisma.journal.findUnique({
    where: { id: params.id },
    select: {
      title: true,
      content: true,
      createdAt: true,
      type: true
    },
  });

  if (!journal) return notFound();

  return (
    <div className="max-w-2xl mx-auto">
      <Link href='/dashboard/journal' className='mb-4 flex flex-row max-w-fit rounded-full bg-[#FDFAFF] px-4 py-1'>
        <MoveLeftIcon className='mr-2' /> Back to journals
      </Link>
      <h1 className="text-3xl font-bold mb-2">{journal.title}</h1>
      <p>{journal.type.name}</p>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(journal.createdAt).toLocaleDateString()}
      </p>
      <div className="prose max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: journal.content }}>
      </div>
    </div>
  );
};

export default JournalDetailPage;
