'use client';

import Link from 'next/link';
import React from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signInWithCredentials } from '@/lib/actions/user.actions';
import CredentialsForm from '@/components/UI/CredentialsForm';
import SubmitButton from '@/components/UI/SubmitButton';
import UserInput from '@/components/UI/UserInput';

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials,
    {
      success: false, message: ''
    });

  const SignInButton: React.FC = () => {
    const { pending } = useFormStatus();

    return (
      <SubmitButton disabled={pending}>
        {pending ? 'Signing in...' : 'Sign in'}
      </SubmitButton>
    )
  }
  return (
    <CredentialsForm action={action}>
      <div className='md:space-y-12 space-y-8'>
        <UserInput
          name='email'
          label='Email'
          type='email'
          required
          autoComplete='email'
          defaultValue=''
        />
        <UserInput
          name='password'
          label='Password'
          type='password'
          required
          autoComplete='password'
          defaultValue=''
        />
      </div>

      <div className='self-center mt-8 mb-8'>
        <SignInButton />
      </div>

      {data && !data.success && (
        <div className='text-center text-red-400'>
          {data.message}
        </div>
      )}

      <div className="text-sm text-center text-muted-foreground">
        Don&apos;t have an account? {' '}
        <Link href='/sign-up' className='hover:text-purple-300 transition ease-in-out duration-200'>Sign Up</Link>
      </div>

    </CredentialsForm>
  );
}

export default CredentialsSignInForm;