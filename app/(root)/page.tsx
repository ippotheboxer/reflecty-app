import QuoteCard from '@/components/QuoteCard';
import { getGreeting } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const page = () => {
  const greeting = getGreeting('Europe/London');

  const recommendedJournal =
    greeting === 'Good morning' || 'Good afternoon'
      ? 'Write your daily gratitude'
      : 'Write your daily reflection';

  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl mb-4 mt-1'>Dashboard</h2>
      <h2 className='text-xl mb-2'>{greeting}, Sophie.</h2>
      <Link href='' className='font-light mb-8'>{recommendedJournal}.</Link>
      <QuoteCard quoteText='Work hard' quoteAuthor='Sophie' />
    </div>
  );
}

export default page;