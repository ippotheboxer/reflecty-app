import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { getJournalEntriesByUserId } from '@/lib/actions/journal.actions';
import { auth } from "@/auth";
import JournalEntry from '@/components/JournalEntry';
import { redirect } from 'next/navigation';

// Helper function to group journals by month
const groupJournalsByMonth = (journalEntries: any[]) => {
  const groupedJournals: Record<string, any[]> = {};

  journalEntries.forEach((journal) => {
    const date = new Date(journal.createdAt);
    const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });

    if (!groupedJournals[monthYear]) {
      groupedJournals[monthYear] = [];
    }
    groupedJournals[monthYear].push(journal);
  });

  return groupedJournals;
};

const JournalLogPage = async () => {
  const session = await auth();

  if (!session?.user) return redirect('/sign-in');

  const journalEntries = await getJournalEntriesByUserId(session.user.id as string);

  const groupedJournals = groupJournalsByMonth(journalEntries);

  const Journals: React.FC = () => {
    if (journalEntries.length === 0) {
      return <div>No entries yet.</div>;
    } else {
      return (
        <div>
          {/* Map over grouped journals and display month and entries */}
          {Object.keys(groupedJournals).map((monthYear) => {
            const journals = groupedJournals[monthYear];
            return (
              <div key={monthYear}>
                <h3 className="text-lg font-semibold mt-6 mb-2">{monthYear}</h3>
                <ul>
                  {journals.map((journal) => (
                    <JournalEntry key={journal.id} content={journal.content} date={journal.createdAt} title={journal.title} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-4 mt-1">Journals</h2>
      <div className="flex flex-row items-center">
        <p className="mr-1">Journal category</p>
        <ChevronRightIcon className="w-4" />
      </div>
      <Journals />
    </div>
  );
};

export default JournalLogPage;
