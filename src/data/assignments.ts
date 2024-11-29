import { Assignment } from '../types';

export const assignments: Assignment[] = [
  {
    id: '1',
    title: 'Introduction to Digital Marketing',
    type: 'PPT',
    driveLink: 'https://drive.google.com/file/d/example1/preview',
    description: 'Comprehensive overview of digital marketing fundamentals',
    createdAt: '2024-03-15',
    resources: [
      {
        id: '1-1',
        fileName: 'Marketing_Basics.pdf',
        fileType: 'pdf',
        fileSize: 2500000,
        fileUrl: '/files/marketing_basics.pdf',
        uploadDate: '2024-03-15',
        description: 'Supplementary reading material',
      },
      {
        id: '1-2',
        fileName: 'Campaign_Examples.pptx',
        fileType: 'pptx',
        fileSize: 5800000,
        fileUrl: '/files/campaign_examples.pptx',
        uploadDate: '2024-03-15',
      },
    ],
  },
  {
    id: '2',
    title: 'Social Media Strategy',
    type: 'PDF',
    driveLink: 'https://drive.google.com/file/d/example2/preview',
    description: 'Detailed guide on creating effective social media strategies',
    createdAt: '2024-03-14',
    resources: [
      {
        id: '2-1',
        fileName: 'Strategy_Template.docx',
        fileType: 'docx',
        fileSize: 1200000,
        fileUrl: '/files/strategy_template.docx',
        uploadDate: '2024-03-14',
        description: 'Template for creating your own strategy',
      },
    ],
  },
  {
    id: '3',
    title: 'Content Creation Workshop',
    type: 'Video',
    driveLink: 'https://drive.google.com/file/d/example3/preview',
    description: 'Workshop recording on creating engaging digital content',
    createdAt: '2024-03-13',
    resources: [],
  },
];