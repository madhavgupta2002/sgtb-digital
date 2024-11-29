import React from 'react';
import { FileText, Image, Video, FilePresentation, Download } from 'lucide-react';
import { FileResource } from '../types';
import { formatFileSize } from '../utils/fileUtils';

const typeIcons = {
  pdf: FileText,
  doc: FileText,
  docx: FileText,
  jpg: Image,
  png: Image,
  ppt: FileText,
  pptx: FileText,
  mp4: Video,
};

interface Props {
  resources: FileResource[];
}

export function ResourceList({ resources }: Props) {
  if (resources.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Additional Resources
      </h3>
      <div className="grid gap-4">
        {resources.map((resource) => {
          const Icon = typeIcons[resource.fileType] || FileText;

          return (
            <div
              key={resource.id}
              className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <Icon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    {resource.fileName}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formatFileSize(resource.fileSize)} • {new Date(resource.uploadDate).toLocaleDateString()}
                  </p>
                  {resource.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {resource.description}
                    </p>
                  )}
                </div>
              </div>
              <a
                href={resource.fileUrl}
                download
                className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                title="Download file"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}