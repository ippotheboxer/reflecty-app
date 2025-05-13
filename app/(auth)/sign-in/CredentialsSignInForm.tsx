'use client';
import Link from 'next/link';
import React from 'react';

const CredentialsSignInForm = () => {
  return (
    <form>
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
            type='text'
            required
            autoComplete='password'
            className='bg-white'
            defaultValue=''
          />
        </div>
        <div>
          <button>Sign In</button>
        </div>
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account? {' '}
          <Link href='/sign-up'>Sign Up</Link>
        </div>
      </div>
    </form>
  );
}

export default CredentialsSignInForm;