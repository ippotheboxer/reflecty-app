import React from 'react';

interface QuoteCardProps {
  quoteText: string;
  quoteAuthor: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quoteText, quoteAuthor }) => {
  return (
    <div className='p-8 shadow-xs bg-white rounded-sm flex flex-col items-center justify-center'>
      <p className='font-medium text-lg'>❝ {quoteText} ❞</p>
      <p className='self-end mt-2'>- {quoteAuthor}</p>
    </div>
  );
}

export default QuoteCard;