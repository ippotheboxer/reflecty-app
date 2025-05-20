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
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="userId" value={userId} />

      <JournalCategory
        name="typeName"
        label="Journal Type"
        types={types}
        onChange={setSelectedCategory}
      />

      {state.errors?.typeName && <p className="text-red-500">{state.errors.typeName[0]}</p>}

      <div>
        <label htmlFor="title" className="block font-medium">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          className="mt-1 block w-full bg-white border rounded p-2"
        />
        {state.errors?.title && <p className="text-red-500">{state.errors.title[0]}</p>}
      </div>

      <div>
        <label htmlFor="content" className="block font-medium">Content</label>
        <textarea
          name="content"
          id="content"
          rows={5}
          className="mt-1 block w-full bg-white border rounded p-2"
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
