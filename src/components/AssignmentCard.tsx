import React from 'react';
import { Link } from 'react-router-dom';
import { FileIcon, ImageIcon, VideoIcon } from './icons';
import { Assignment } from '../types';

const typeIcons = {
  PDF: FileIcon,
  PPT: FileIcon,
  Image: ImageIcon,
  Video: VideoIcon,
};

interface Props {
  assignment: Assignment;
}

export function AssignmentCard({ assignment }: Props) {
  const Icon = typeIcons[assignment.type];

  return (
    <Link
      to={`/assignment/${assignment.id}`}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {assignment.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
            {assignment.description}
          </p>
        </div>
        <Icon className="w-6 h-6 text-gray-400 dark:text-gray-500 ml-4" />
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
          {assignment.type}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          {new Date(assignment.createdAt).toLocaleDateString()}
        </span>
      </div>
    </Link>
  );
}