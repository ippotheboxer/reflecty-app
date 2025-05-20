import Link from 'next/link';
import React from 'react';

interface JournalEntryProps {
  id: string;
  date: Date;
  title: string;
  content: string;
}

const JournalEntry: React.FC<JournalEntryProps> = ({ id, date, title, content }) => {
  return (
    <Link href={`/dashboard/journal/${id}`}>
      <div className="mb-8 flex flex-row p-4 bg-[#fdfdfd] rounded-lg w-[800px] shadow-general-shading">
        <div className="">
          <div className="w-13 h-13 flex flex-col justify-center text-sm items-center bg-[#fcfaff] rounded-xl shadow-[0px_4px_5px_#50426733]">
            <div className="font-date text-[#9f9f9f] text-light">
              {date.toLocaleString('en-US', { weekday: 'short' }).toUpperCase()}
            </div>
            <div className="font-bold text-base">
              {date.getDate()}
            </div>
          </div>
        </div>
        <div className="ml-6 ">
          <div className="font-semibold text-lg pb-1">
            {title}
          </div>
          <p className="font-light text-base">
            {content.length > 500
              ? `${content.slice(0, 500)}...`
              : content}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default JournalEntry;