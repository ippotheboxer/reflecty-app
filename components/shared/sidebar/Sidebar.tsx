'use client';

import React, { useState } from 'react';
import SideBarItem from './SidebarItem';
import {
  LayoutDashboardIcon, SmilePlusIcon, NotebookIcon,
  CalendarIcon, PenIcon, SlidersHorizontalIcon,
  ChevronRightIcon, ChevronLeftIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <aside
      className={`h-screen shadow-md bg-white transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'
        }`}
    >
      <nav className='h-full flex flex-col p-8'>
        <div className={cn('self-end mb-4', collapsed && 'self-center')}>
          <button onClick={toggleSidebar} className='p-1'>
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </button>
        </div>

        <ul className='flex flex-col space-y-10 flex-1'>
          <SideBarItem
            icon={<LayoutDashboardIcon />}
            text='Dashboard'
            link='/'
            collapsed={collapsed}
          />
          <SideBarItem
            icon={<SmilePlusIcon />}
            text='Mood Tracker'
            link='/mood'
            collapsed={collapsed}
          />
          <SideBarItem
            icon={<NotebookIcon />}
            text='Journal Log'
            link='/journal-log'
            collapsed={collapsed}
          />
          <SideBarItem
            icon={<CalendarIcon />}
            text='Habits'
            link='/habits'
            collapsed={collapsed}
          />
          <SideBarItem
            icon={<PenIcon />}
            text='Write Entry'
            link='/write-entry'
            buttonType
            collapsed={collapsed}
          />
          <SideBarItem
            icon={<SlidersHorizontalIcon />}
            text='Settings'
            link='/settings'
            collapsed={collapsed}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
