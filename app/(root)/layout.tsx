import Dashboard from '@/components/shared/dashboard/Dashboard';
import React from 'react';

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='flex flex-row w-full h-full text-[#272727]'>
      <Dashboard />
      {children}
    </div>
  );
}

export default RootLayout;