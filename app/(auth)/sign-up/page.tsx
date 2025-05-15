import { Metadata } from 'next';

import React from 'react';
import { auth } from "@/auth";
import { redirect } from 'next/navigation';
import CredentialsSignUpForm from './SignUpForm';

export const metadata: Metadata = {
  title: 'Sign Up'
}

const SignUpPage = async () => {
  const session = await auth();

  if (session) {
    return redirect('/dashboard')
  }

  return (
    <div className='w-full max-w-md mx-auto'>
      <h1 className='text-lg'>Create Account</h1>
      <CredentialsSignUpForm />
    </div>
  );
}

export default SignUpPage;