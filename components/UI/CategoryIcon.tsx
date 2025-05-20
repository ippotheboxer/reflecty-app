import React from 'react';

interface CategoryIconProps {
  categoryName: string;
  icon: React.ReactElement;
  bgColor: string;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ categoryName, icon, bgColor }) => {
  return (
    <div
      className='flex flex-row items-center justify-center rounded-full py-2 px-6'
      style={{ backgroundColor: bgColor }}
    >
      <span className='mr-2'>{icon}</span>
      {categoryName}
    </div>
  );
}

export default CategoryIcon;