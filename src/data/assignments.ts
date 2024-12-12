import { Assignment } from '../types';

export const assignments: Assignment[] = [
  {
    id: '1',
    title: 'Life Insurance',
    type: 'PPT',
    driveLink: 'https://drive.google.com/file/d/14CsBw0WRhuOsEcIXWuZvOPvCu38kXeZN/preview',
    description:
      'Presentation on how digitalization has changed the world of life insurance',
    createdAt: '2024-11-30',
    resources: [],
  },
  {
    id: '2',
    title: 'Poster Making',
    type: 'PDF',
    driveLink: 'https://drive.google.com/file/d/1EyFsirJCNrRhO0Mc9B9ZeNei2-vNRpDH/preview',
    description:
      'The image is a promotional advertisement by "The Pijja Co." for their Ragi Pizza Base.',
    createdAt: '2024-11-30',
    resources: [],
  },
  {
    id: '3',
    title: 'How to Book Bus Tickets Online',
    type: 'YT',
    driveLink: 'https://www.youtube.com/shorts/1JBcy0AVZyA',
    description: 'Tutorial showing the step-by-step process of booking bus tickets online using DMRC Momentum 2.0 Application',
    createdAt: '2024-11-30',
    resources: [],
  },
  {
    id: '4',
    title: 'New Assignment',
    type: 'PDF',
    driveLink: 'https://drive.google.com/file/d/1STBiHaXW5thS8uK1MkU_NpzwzBf7-Cm9/preview',
    description: 'New assignment with additional resources',
    createdAt: '2024-12-13',
    resources: [
      'https://drive.google.com/file/d/1y6xKwVnfBWAGuxJSIc9pm5xWl3Kguyn-/preview',
    ],
  },
];
