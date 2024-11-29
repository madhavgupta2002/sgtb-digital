import React from 'react';
import { teamMembers } from '../data/team';

export function CreditsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <img
            src="/src/components/icons/logo.png"
            alt="SGTB Khalsa College"
            className="mx-auto h-24 w-24 mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Digital Empowerment VAC
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            S.G.T.B. Khalsa College, University of Delhi
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Team Members
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map(member => (
              <div key={member.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center space-x-4">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{member.rollNo}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            About the Project
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            The Digital Assignment Repository is a web application developed as part of the Digital Empowerment VAC course.
            It serves as a centralized platform for managing and accessing digital assignments, making it easier for
            students and faculty to share and access educational content.
          </p>
        </div>
      </div>
    </div>
  );
}