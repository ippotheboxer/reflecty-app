import * as Icons from 'lucide-react';

export const getLucideIconByName = (name: string) => {
  return (Icons as any)[name] || Icons['CircleHelp'];
};
