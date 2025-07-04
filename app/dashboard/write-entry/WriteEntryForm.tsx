'use client';

import React, { useState, useTransition } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createJournalEntry } from '@/lib/actions/journal.actions';
import { getRandomPromptByCategory } from '@/lib/actions/prompt.actions'; // <-- Import action
import JournalCategory from '@/components/UI/JournalCategory';
import SubmitButton from "@/components/UI/SubmitButton";
import TiptapEditor from '@/components/RichTextEditor';

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

const SaveJournalButton = () => {
  const { pending } = useFormStatus();

  return (
    <SubmitButton disabled={pending}>
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
  const [content, setContent] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleGeneratePrompt = () => {
    if (!selectedCategory) return;

    startTransition(async () => {
      const prompt = await getRandomPromptByCategory(selectedCategory, userId);
      if (prompt) {
        setContent(prompt);
      } else {
        setContent('No prompts found for this category.');
      }
    });
  };


  return (
    <form action={formAction} className="space-y-8">
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="content" value={content} />

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

      {selectedCategory !== '' &&
        <button
          type="button"
          className="bg-purple-300 text-white px-4 py-2 rounded shadow hover:bg-purple-400"
          onClick={handleGeneratePrompt}
          disabled={isPending || !selectedCategory}
        >
          {isPending ? 'Generating...' : 'Generate a Prompt'}
        </button>
      }

      <div>
        <label className="block font-medium mb-2">Content</label>
        <TiptapEditor content={content} setContent={setContent} />
        {state.errors?.content && (
          <p className="text-red-500 text-sm">
            {state.errors.content[0]}
          </p>
        )}
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
