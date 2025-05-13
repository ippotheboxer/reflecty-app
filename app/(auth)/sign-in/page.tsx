import { Metadata } from 'next';

import React from 'react';
import { auth } from "@/auth";
import { redirect } from 'next/navigation';
import CredentialsSignInForm from './CredentialsSignInForm';

export const metadata: Metadata = {
  title: 'Sign in'
}

const SignInPage = async () => {
  const session = await auth();

  if (session) {
    return redirect('/dashboard')
  }

  return (
    <div className='w-full max-w-md mx-auto'>
      <h1 className='text-lg'>Sign in</h1>
      <CredentialsSignInForm />
    </div>
  );
}

export default SignInPage;