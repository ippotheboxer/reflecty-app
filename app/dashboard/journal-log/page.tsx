import React from 'react';
import { ChevronRightIcon, ChevronDownIcon } from 'lucide-react';


const JournalLogPage = () => {
  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl mb-4 mt-1'>Journals</h2>
      <div className='flex flex-row items-center'>
        <p className='mr-1'>Journal category</p>
        <ChevronRightIcon className='w-4' />
      </div>
    </div>
  );
}

export default JournalLogPage;