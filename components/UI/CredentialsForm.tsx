import React from 'react';

interface CredentialsFormProps {
  action: (payload: FormData) => void;
  children: React.ReactNode;
}

const CredentialsForm: React.FC<CredentialsFormProps> = ({ action, children }) => {
  return (
    <form action={action}>
      <div className='space-y-2 flex flex-col items-center justify-center lg:w-[800px] md:w-[600px] sm:w-[400px] w-[300px] bg-[#FEFEFE] p-8 md:py-16 rounded-[30px] shadow-general-shading'>
        {children}
      </div>
    </form>
  );
}

export default CredentialsForm;