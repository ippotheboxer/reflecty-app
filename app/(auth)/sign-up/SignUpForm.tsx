'use client';

import Link from 'next/link';
import React from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signUpUser } from '@/lib/actions/user.actions';
import SubmitButton from '@/components/UI/SubmitButton';
import UserInput from '@/components/UI/UserInput';
import CredentialsForm from '@/components/UI/CredentialsForm';

const CredentialsSignUpForm = () => {
  const [data, action] = useActionState(signUpUser,
    {
      success: false, message: ''
    });

  const SignUpButton: React.FC = () => {
    const { pending } = useFormStatus();

    return (
      <SubmitButton disabled={pending} >
        {pending ? 'Creating account...' : 'Sign Up'}
      </SubmitButton>
    )
  }
  return (
    <CredentialsForm action={action}>
      <div className='md:space-y-12 space-y-8'>
        <UserInput
          label='Name'
          name='name'
          type='text'
          required
          autoComplete='name'
          defaultValue=''
        />
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
          type='password'
          required
          autoComplete='password'
          defaultValue=''
          label='Password'
        />
        <UserInput
          name='confirmPassword'
          label='Confirm Password'
          type='password'
          required
          autoComplete='confirmPassword'
          defaultValue=''
        />
      </div>

      <div className='self-center mt-8 mb-8'>
        <SignUpButton />
      </div>

      {data && !data.success && (
        <div className='text-center text-red-400'>
          {data.message}
        </div>
      )}

      <div className="text-sm text-center text-muted-foreground">
        Already have an account? {' '}
        <Link href='/sign-in' className='hover:text-purple-300 transition ease-in-out duration-200'>Sign In</Link>
      </div>
    </CredentialsForm>
  );
}

export default CredentialsSignUpForm;