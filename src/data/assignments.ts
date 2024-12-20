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
    description:
      'Tutorial showing the step-by-step process of booking bus tickets online using DMRC Momentum 2.0 Application',
    createdAt: '2024-11-30',
    resources: [],
  },
  {
    id: '4',
    title: 'Project Report',
    type: 'PDF',
    driveLink: 'https://drive.google.com/file/d/1STBiHaXW5thS8uK1MkU_NpzwzBf7-Cm9/preview',
    description:
      'Report on a survey conducted on digital literacy intertwined with e-commerce',
    createdAt: '2024-12-13',
    resources: [
      {
        id: '1',
        fileName: 'Digital Literacy Questionnaire',
        fileType: 'PDF',
        fileSize: 0,
        fileUrl:
          'https://drive.google.com/file/d/1y6xKwVnfBWAGuxJSIc9pm5xWl3Kguyn-/view',
        uploadDate: '2024-12-13',
        description: 'Digital Literacy Questionnaire',
      },
    ],
  },
  {
    id: '5',
    title: 'Digital India Mission',
    type: 'PDF',
    driveLink: 'https://drive.google.com/file/d/1R0qkOkF3y0xeVHTZGVZ6JDhsMs_od7a5/preview',
    description:
      'An informative document outlining the objectives and achievements of the Digital India Mission.',
    createdAt: '2024-12-13',
    resources: [],
  },
  {
    id: '6',
    title: 'Cyber Hygiene',
    type: 'PDF',
    driveLink: 'https://drive.google.com/file/d/1EDN7h_IzZQGAxLrlTibTo2QVBbEcoY3s/preview',
    description:
      'Guide on best practices to maintain cyber hygiene for secure online interactions.',
    createdAt: '2024-12-13',
    resources: [],
  },
  {
    id: '7',
    title: 'Cyber Safety',
    type: 'PDF',
    driveLink: 'https://drive.google.com/file/d/13ckndlGAI9owU6uXDbhjx4b4AKEPxbp1/preview',
    description:
      'Educational material on protecting personal information and staying safe online.',
    createdAt: '2024-12-13',
    resources: [],
  },
  {
    id: '8',
    title: 'How to Book a Train Ticket On Make my Trip',
    type: 'YT',
    driveLink: 'https://www.youtube.com/shorts/-h2-Y5_GLJY',
    description:
      'How to Book a Train Ticket On Make my Trip',
    createdAt: '2024-12-13',
    resources: [],
  },
];
