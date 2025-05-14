import { auth } from '@/auth';
import QuoteCard from '@/components/QuoteCard';
import { getGreeting, getRecommendedJournal } from '@/lib/utils';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const HomePage = async () => {
  const session = await auth();

  if (!session?.user) return redirect('/sign-in');

  const greeting = getGreeting('Europe/London');
  const recommendedJournal = getRecommendedJournal('Europe/London')

  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl mb-4 mt-1'>Dashboard</h2>
      <h2 className='text-xl mb-2'>{greeting}, {session?.user.name}.</h2>
      <Link href={`/dashboard/${recommendedJournal.link}`} className='mb-4'>{recommendedJournal.recommendation}</Link>
      <QuoteCard quoteText='Work hard' quoteAuthor='Sophie' />
    </div>
  );
}

export default HomePage;