import { Metadata } from 'next';

import React from 'react';
import { useActionState } from 'react'
import { signIn } from '@/auth';
import CredentialsSignInForm from './CredentialsSignInForm';

export const metadata: Metadata = {
  title: 'Sign in'
}

const SignInPage = () => {
  return (
    <div className='w-full max-w-md mx-auto'>
      <h1 className='text-lg'>Sign in</h1>
      <CredentialsSignInForm />
    </div>
  );
}

export default SignInPage;