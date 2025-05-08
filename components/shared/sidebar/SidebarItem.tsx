import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
  buttonType?: boolean;
  collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, link, buttonType, collapsed }) => {
  return (
    <li className='relative group'>
      <Link
        href={link}
        className={cn(
          'flex items-center transition-colors duration-200 hover:text-[#C3ADFF]',
          buttonType && 'bg-purple-100 rounded-lg px-8 py-2',
          collapsed ? 'justify-center p-2' : 'px-2 py-2'
        )}
      >
        <span className='text-lg'>{icon}</span>
        {!collapsed && <span className='ml-2'>{text}</span>}
      </Link>

      {/* Tooltip text for collapsed state */}
      {collapsed && (
        <div className='absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white text-gray-800 shadow-md rounded px-3 py-1 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200 z-10'>
          {text}
        </div>
      )}
    </li>
  );
};

export default SidebarItem;

