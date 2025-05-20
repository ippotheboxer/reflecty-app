'use client';

import React, { useState } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createJournalEntry } from '@/lib/actions/journal.actions';
import JournalCategory from '@/components/UI/JournalCategory';
import SubmitButton from "@/components/UI/SubmitButton"

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

interface CategoryType {
  name: string;
  iconName: string;
  bgColor: string;
}

const SaveJournalButton = () => {
  const { pending } = useFormStatus();

  return (
    <SubmitButton
      disabled={pending}
    >
      {pending ? 'Saving...' : 'Save Journal'}
    </SubmitButton>
  );
};

const WriteEntryForm = ({ userId, types }: { userId: string; types: any[] }) => {
  const [state, formAction] = useActionState<FormState, FormData>(
    createJournalEntry,
    initialState
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <form action={formAction} className="space-y-8">
      <input type="hidden" name="userId" value={userId} />

      <div className='flex flex-row items-center'>
        <label htmlFor="title" className="font-medium mr-2">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          className="!outline-none bg-white rounded px-2 py-1 w-[500px]"
        />
        {state.errors?.title && <p className="text-red-500">{state.errors.title[0]}</p>}
      </div>

      <JournalCategory
        name="typeName"
        label="Journal Category"
        types={types}
        onChange={setSelectedCategory}
      />

      {state.errors?.typeName && <p className="text-red-500">{state.errors.typeName[0]}</p>}



      <div>
        <label htmlFor="content" className="block font-medium mb-2">Content</label>
        <textarea
          name="content"
          id="content"
          rows={5}
          className="!outline-none bg-white rounded p-4 w-[600px] leading-6.5"
        />
        {state.errors?.content && <p className="text-red-500 text-sm">{state.errors.content[0]}</p>}
      </div>

      <SaveJournalButton />

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
