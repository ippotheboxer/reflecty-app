import React from 'react';

interface SubmitButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, disabled }) => {
  return (
    <button disabled={disabled} className='bg-purple-200 rounded-full px-12 md:py-2 py-1 hover:cursor-pointer hover:bg-purple-300 transition ease-in-out duration-200'>
      {children}
    </button>
  );
}

export default SubmitButton;