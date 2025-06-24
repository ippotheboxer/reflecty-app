'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import React, { useEffect } from 'react';
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  ListIcon,
  ListOrderedIcon,
} from 'lucide-react';

type Props = {
  content: string;
  setContent: (val: string) => void;
};

const TiptapEditor = ({ content, setContent }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
        },
        orderedList: {
          keepMarks: true,
        },
      }),
      Underline,
      Placeholder.configure({
        placeholder: 'Write your journal here...',
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) return null;

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-2 flex gap-2 rounded-md p-2 bg-white">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'font-bold text-purple-600' : ''}
        >
          <BoldIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'italic text-purple-600' : ''}
        >
          <ItalicIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'underline text-purple-600' : ''}
        >
          <UnderlineIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'text-purple-600' : ''}
        >
          <ListIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'text-purple-600' : ''}
        >
          <ListOrderedIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Editor Content */}
      <div className="bg-white rounded-md p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
