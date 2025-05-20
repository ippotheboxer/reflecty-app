import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: 'Sophie',
      email: 'example@example.com',
      password: hashSync('123456', 10)
    },
    {
      name: 'Tester',
      email: 'test@test.com',
      password: hashSync('123456', 10)
    }
  ],
  journalTypes: [
    {
      name: 'Reflective Journaling',
      iconName: 'BookOpenIcon',
      bgColor: '#C9DDFF',
      isCustom: false,
      description:
        'Journaling is a great way to gain a deeper understanding of ourselves and the world around us.',
      prompts: [
        { content: 'What was the best compliment you received in the past year? How did it make you feel?' },
        { content: 'When was the last time you tried something new? What was it, and how did it go?' },
        { content: "What are three specific themes you've noticed in your life recently? How can you learn from them?" },
        { content: 'What is your favorite thing about yourself? Why?' },
        { content: 'What is one important goal you have for the upcoming year?' },
        { content: 'Describe your dream life. What would it look like, and how can you work towards it?' },
      ],
    },
    {
      name: 'Gratitude Journaling',
      isCustom: false,
      iconName: 'HandHeartIcon',
      bgColor: '#C9FFCE',
      description:
        'Gratitude journaling is a practice of regularly writing down things you are thankful for, helping you cultivate appreciation and focus on the positive aspects of your life.',
      prompts: [
        { content: "List three things you're grateful for today." },
        { content: 'Write about a time you were grateful for something a loved one did for you.' },
        { content: 'What made me smile today?' },
        { content: 'What are three qualities I appreciate about myself?' },
        { content: 'How have I grown as a person in the past year/month?' },
        { content: 'What was the best thing that happened today?' },
      ],
    },
    {
      name: 'Daily Journaling',
      iconName: 'NotebookIcon',
      bgColor: '#FFD4C9',
      isCustom: false,
      description:
        'Morning prompts to start your day with reflection, focus, and emotional awareness.',
      prompts: [
        { content: 'How am I feeling emotionally this morning? What do I need emotionally this morning?' },
        { content: 'How am I feeling physically this morning? What do I need physically this morning?' },
        { content: 'How grounded am I feeling this morning?' },
        { content: 'What do I want to accomplish today?' },
        { content: 'How am I planning to build self care into my day today?' },
      ],
    },
    {
      name: 'Weekly Review',
      iconName: 'BookOpenIcon',
      bgColor: '#C9DDFF',
      isCustom: false,
      description:
        'Reflect on your week — your wins, your challenges, and how you showed up for yourself.',
      prompts: [
        { content: 'What did I accomplish this week?' },
        { content: 'What lessons did I learn this week?' },
        { content: 'Which day was my favourite and why?' },
        { content: 'How did I take time for myself?' },
      ],
    },
    {
      name: 'Monthly Review',
      isCustom: false,
      iconName: 'BookOpenIcon',
      bgColor: '#C9DDFF',
      description:
        'Use this to reflect at the end of each month on growth, lessons, and standout moments.',
      prompts: [
        { content: 'Describe this month in 5 words.' },
        { content: 'Write down your favourite memory from this month. What made it special?' },
        { content: 'What or who surprised you the most this month?' },
        { content: 'What are you proud of this month?' },
      ],
    },
    {
      name: 'New Month Planning',
      iconName: 'BookOpenIcon',
      bgColor: '#C9DDFF',
      isCustom: false,
      description:
        'Plan your intention and focus as a new month begins. Set goals and prepare mentally and emotionally.',
      prompts: [
        { content: 'What is your main focus/intention this month?' },
        { content: "What are this month's non-negotiables?" },
        { content: 'What are your goals for this month?' },
        { content: 'What do you need more of this month?' },
      ],
    },
    {
      name: 'Dream Journaling',
      iconName: 'MoonIcon',
      bgColor: '#C9CDFF',
      isCustom: false,
      description:
        'Record your dreams as soon as you wake up to improve recall and gain insights into your subconscious mind.',
      prompts: [
        { content: 'What happened in my dream?' },
        { content: 'Who was in my dream?' },
        { content: 'What was the setting of my dream?' },
        { content: 'What was the main theme of my dream?' },
        { content: 'What emotions did I feel in my dream?' },
      ],
    },
  ],
}

export default sampleData;