'use client';

import Link from 'next/link';
import React from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signUpUser } from '@/lib/actions/user.actions';

const CredentialsSignUpForm = () => {
  const [data, action] = useActionState(signUpUser,
    {
      success: false, message: ''
    });

  const SignUpButton: React.FC = () => {
    const { pending } = useFormStatus();

    return (
      <button disabled={pending} className='w-full bg-purple-200'>
        {pending ? 'Creating account...' : 'Sign Up'}
      </button>
    )
  }
  return (
    <form action={action}>
      <div className='space-y-6'>
        <div>
          <label htmlFor='name' className='mr-2'>Name</label>
          <input
            name='name'
            id='name'
            type='text'
            required
            autoComplete='name'
            className='bg-white'
            defaultValue=''
          />
        </div>
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
          <label htmlFor='confirmPassword' className='mr-2'>Confirm Password</label>
          <input
            name='confirmPassword'
            id='confirmPassword'
            type='password'
            required
            autoComplete='confirmPassword'
            className='bg-white'
            defaultValue=''
          />
        </div>
        <div>
          <SignUpButton />
        </div>

        {data && !data.success && (
          <div className='text-center text-red-400'>
            {data.message}
          </div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Already have an account? {' '}
          <Link href='/sign-in'>Sign In</Link>
        </div>
      </div>
    </form>
  );
}

export default CredentialsSignUpForm;