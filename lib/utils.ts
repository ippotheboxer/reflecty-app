import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getGreeting = (timeZone: string) => {
  const date = new Date();

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

export const getRecommendedJournal = (timeZone: string) => {
  const date = new Date();

  const timeString = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    hour12: false,
    timeZone,
  });

  const hour = parseInt(timeString);

  let recommendation = '';
  let link = '';

  if (hour >= 5 && hour < 17) {
    recommendation = 'Write your daily gratitude'
    link = '/write-entry'
  } if (hour >= 17 && hour < 21) {
    recommendation = 'Write your daily reflection'
    link = '/write-entry'
  } else {
    recommendation = 'Write your daily reflection'
    link = '/write-entry'
  }

  return { recommendation, link };
};