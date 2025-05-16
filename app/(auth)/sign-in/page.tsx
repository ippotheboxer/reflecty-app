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
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl mb-8'>Sign In</h1>
      <CredentialsSignInForm />
    </div>
  );
}

export default SignInPage;