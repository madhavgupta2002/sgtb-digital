import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { assignments } from '../data/assignments';
import { ResourceList } from '../components/ResourceList';

export function AssignmentPage() {
  const { id } = useParams<{ id: string }>();
  const assignment = assignments.find(a => a.id === id);

  if (!assignment) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Assignment not found
        </h2>
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {assignment.title}
        </h1>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mr-4">
            {assignment.type}
          </span>
          <Calendar className="w-4 h-4 mr-1" />
          <span>{new Date(assignment.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="mb-6">
          <iframe
            src={assignment.driveLink}
            className="w-full h-[600px] border-0 rounded-lg"
            allow="autoplay"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 dark:text-gray-300">
            {assignment.description}
          </p>
        </div>

        <ResourceList resources={assignment.resources} />
      </div>
    </div>
  );
}