import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface DashboardItemProps {
  link: string;
  children: React.ReactNode;
  buttonType?: boolean;
}

const DashboardItem: React.FC<DashboardItemProps> = ({ link, children, buttonType }) => {
  return (
    <Link href={link} className={cn('flex flex-row items-center text-sm md:text-base hover:text-[#C3ADFF] transition ease-in-out duration-200', buttonType && 'bg-purple-100 rounded-full px-4 py-2')}>
      {children}
    </Link>
  );
}

export default DashboardItem;