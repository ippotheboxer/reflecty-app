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
      <h2 className='text-2xl mb-2'>{greeting}, Sophie.</h2>
      <Link href='' className='font-light'>{recommendedJournal}.</Link>
      <section className='mt-8'>
        <h2 className='text-xl border-b-1 border-b-purple-200 pb-2 mb-8'>Dashboard</h2>
        <QuoteCard quoteText='Work hard' quoteAuthor='Sophie' />
      </section>
    </div>
  );
}

export default page;