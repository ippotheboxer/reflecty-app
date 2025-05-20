'use client';

import React, { useState } from 'react';
import CategoryIcon from './CategoryIcon';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import { getLucideIconByName } from '@/utils/getLucidIcon';

interface CategoryType {
  name: string;
  iconName: string;
  bgColor: string;
}

interface SelectionInputProps {
  types: CategoryType[];
  name: string;
  label: string;
  onChange?: (selectedName: string) => void;

}

const JournalCategory: React.FC<SelectionInputProps> = ({ types, name, label, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<CategoryType | null>(null);

  const handleSelect = (type: CategoryType) => {
    setSelected(type);
    setIsOpen(false);
    if (onChange) onChange(type.name);
  };

  return (
    <div className="relative w-full">
      <input type="hidden" name={name} value={selected ? selected.name : ''} />

      <div onClick={() => setIsOpen(!isOpen)} className="flex items-center cursor-pointer">
        <span className="font-medium text-gray-700 mr-4">{label}</span>
        {isOpen ? (
          <ChevronDownIcon className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronRightIcon className="w-4 h-4 text-gray-500" />
        )}
      </div>

      {selected && (
        <div className="mt-3">
          <CategoryIcon
            categoryName={selected.name}
            icon={React.createElement(getLucideIconByName(selected.iconName))}
            bgColor={selected.bgColor}
          />
        </div>
      )}

      {isOpen && (
        <div className="absolute w-70 mt-2 p-2 bg-white border border-gray-200 rounded-xl shadow-md z-10 flex flex-col space-y-2">
          {types.map((type) => {
            const Icon = getLucideIconByName(type.iconName);
            return (
              <button
                key={type.name}
                onClick={() => handleSelect(type)}
                className="w-full text-left hover:bg-purple-100 p-2 hover:cursor-pointer flex items-center gap-3"
              >
                <CategoryIcon
                  categoryName={type.name}
                  icon={<Icon className="w-5 h-5 text-gray-700" />}
                  bgColor={type.bgColor}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};


export default JournalCategory;
