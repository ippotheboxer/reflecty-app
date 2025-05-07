import Link from 'next/link';
import React from 'react';
import DashboardItem from './DashboardItem';
// Icons
import { LayoutDashboardIcon, SmilePlusIcon, NotebookIcon, CalendarIcon, PenIcon, SlidersHorizontalIcon } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className='w-3/12 p-12 shadow-md'>
      <nav className='flex flex-col justify-center items-start space-y-10'>
        <DashboardItem key='dashboard' link='/'>
          <LayoutDashboardIcon className='mr-2' /> Dashboard
        </DashboardItem>

        <DashboardItem key='mood-tracker' link='/mood'>
          <SmilePlusIcon className='mr-2' /> Mood Tracker
        </DashboardItem>

        <DashboardItem key='journal-log' link='/journal-log'>
          <NotebookIcon className='mr-2' /> Journal Log
        </DashboardItem>

        <DashboardItem key='habits' link='/habits'>
          <CalendarIcon className='mr-2' /> Habits
        </DashboardItem>

        <DashboardItem key='journal' link='/write-entry' buttonType>
          <PenIcon className='mr-2' /> Write Entry
        </DashboardItem>

        <DashboardItem key='settings' link='/settings'>
          <SlidersHorizontalIcon className='mr-2' /> Settings
        </DashboardItem>
      </nav>
    </div>
  );
}

export default Dashboard;