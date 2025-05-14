'use client';

import React from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createJournalEntry } from '@/lib/actions/journal.actions';

const initialState = {
  success: false,
  message: '',
  errors: {},
};

type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[#D7C9FF] py-2 px-4 rounded-full"
    >
      {pending ? 'Saving...' : 'Save Journal'}
    </button>
  );
};

const WriteEntryForm = ({ userId, types }: { userId: string; types: string[] }) => {
  const [state, formAction] = useActionState<FormState, FormData>(
    createJournalEntry,
    initialState
  );

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="userId" value={userId} />

      <div>
        <label htmlFor="typeName" className="block text-sm font-medium">Journal Type</label>
        <select name="typeName" id="typeName" className="mt-1 block w-full bg-white border rounded p-2">
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {state.errors?.typeName && <p className="text-red-500 text-sm">{state.errors.typeName[0]}</p>}
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          className="mt-1 block w-full bg-white border rounded p-2"
        />
        {state.errors?.title && <p className="text-red-500 text-sm">{state.errors.title[0]}</p>}
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium">Content</label>
        <textarea
          name="content"
          id="content"
          rows={5}
          className="mt-1 block w-full bg-white border rounded p-2"
        />
        {state.errors?.content && <p className="text-red-500 text-sm">{state.errors.content[0]}</p>}
      </div>

      <SubmitButton />

      {state.message && !state.success && (
        <p className="text-red-500 mt-2">{state.message}</p>
      )}
      {state.success && (
        <p className="text-green-600 mt-2">{state.message}</p>
      )}
    </form>
  );
};

export default WriteEntryForm;
