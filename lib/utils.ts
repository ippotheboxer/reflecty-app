import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getGreeting = (timeZone: string = 'America/New_York') => {
  const date = new Date();

  // Convert current time to the given timezone
  const timeString = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    hour12: false,
    timeZone,
  });

  const hour = parseInt(timeString);

  if (hour >= 5 && hour < 12) return 'Good morning';
  if (hour >= 12 && hour < 17) return 'Good afternoon';
  if (hour >= 17 && hour < 21) return 'Good evening';
  return 'Good night';
};