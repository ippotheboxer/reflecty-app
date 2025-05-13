'use client';

import React, { useState } from 'react';
import SideBarItem from './SidebarItem';
import {
  LayoutDashboardIcon, SmilePlusIcon, NotebookIcon,
  CalendarIcon, PenIcon, SlidersHorizontalIcon,
  ChevronRightIcon, ChevronLeftIcon, LogOutIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { signOutUser } from '@/lib/actions/user.actions';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <aside className={`h-screen shadow-md bg-white flex flex-col justify-between transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      <nav className='flex flex-col p-8 flex-grow'>
        <div className={cn('self-end mb-4', collapsed && 'self-center')}>
          <button onClick={toggleSidebar} className='p-1'>
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </button>
        </div>

        <ul className='flex flex-col space-y-10 flex-1'>
          <SideBarItem icon={<LayoutDashboardIcon />} text='Dashboard' link='/dashboard' collapsed={collapsed} />
          <SideBarItem icon={<SmilePlusIcon />} text='Mood Tracker' link='/dashboard/mood' collapsed={collapsed} />
          <SideBarItem icon={<NotebookIcon />} text='Journal Log' link='/dashboard/journal-log' collapsed={collapsed} />
          <SideBarItem icon={<CalendarIcon />} text='Habits' link='/dashboard/habits' collapsed={collapsed} />
          <SideBarItem icon={<PenIcon />} text='Write Entry' link='/dashboard/write-entry' buttonType collapsed={collapsed} />
          <SideBarItem icon={<SlidersHorizontalIcon />} text='Settings' link='/dashboard/settings' collapsed={collapsed} />
        </ul>
      </nav>

      {/* Logout button at bottom */}
      <form action={signOutUser} className='p-8 pt-0'>
        <ul>
          <SideBarItem
            icon={<LogOutIcon />}
            text='Logout'
            collapsed={collapsed}
            isButton
          />
        </ul>
      </form>
    </aside>
  );
};

export default SideBar;
