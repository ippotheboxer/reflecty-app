'use client';
import Link from 'next/link';
import React from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signInWithCredentials } from '@/lib/actions/user.actions';

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials,
    {
      success: false, message: ''
    });

  const SignInButton: React.FC = () => {
    const { pending } = useFormStatus();

    return (
      <button disabled={pending} className='w-full bg-purple-200'>
        {pending ? 'Signing in...' : 'Sign in'}
      </button>
    )
  }
  return (
    <form action={action}>
      <div className='space-y-6'>
        <div>
          <label htmlFor='email' className='mr-2'>Email</label>
          <input
            name='email'
            id='email'
            type='email'
            required
            autoComplete='email'
            className='bg-white'
            defaultValue=''
          />
        </div>
        <div>
          <label htmlFor='password' className='mr-2'>Password</label>
          <input
            name='password'
            id='password'
            type='password'
            required
            autoComplete='password'
            className='bg-white'
            defaultValue=''
          />
        </div>
        <div>
          <SignInButton />
        </div>

        {data && !data.success && (
          <div className='text-center text-red-400'>
            {data.message}
          </div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account? {' '}
          <Link href='/sign-up'>Sign Up</Link>
        </div>
      </div>
    </form>
  );
}

export default CredentialsSignInForm;