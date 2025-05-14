import React from 'react';
import { ChevronRightIcon, ChevronDownIcon } from 'lucide-react';
import { getJournalEntriesByUserId } from '@/lib/actions/journal.actions';
import { auth } from "@/auth";

const JournalLogPage = async () => {
  const session = await auth()

  if (!session?.user) return <p>You must be signed in.</p>;

  const journalEntries = await getJournalEntriesByUserId(session.user.id as string);

  const Journals: React.FC = () => {
    if (journalEntries.length === 0) {
      return (<div>No entries yet.</div>)
    } else {
      return (<div>{journalEntries.map(journal => <li>{journal.title}</li>)}</div>)
    }
  }

  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl mb-4 mt-1'>Journals</h2>
      <div className='flex flex-row items-center'>
        <p className='mr-1'>Journal category</p>
        <ChevronRightIcon className='w-4' />
      </div>
      <Journals />
    </div>
  );
}

export default JournalLogPage;