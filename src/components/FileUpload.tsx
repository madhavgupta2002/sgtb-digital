import React, { useCallback } from 'react';
import { Upload, X } from 'lucide-react';
import { FileType } from '../types';
import { formatFileSize } from '../utils/fileUtils';

interface Props {
  onFilesSelected: (files: File[]) => void;
  onFileRemove: (index: number) => void;
  selectedFiles: File[];
  acceptedTypes: FileType[];
}

export function FileUpload({ onFilesSelected, onFileRemove, selectedFiles, acceptedTypes }: Props) {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    onFilesSelected(files);
  }, [onFilesSelected]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const acceptedFileTypes = acceptedTypes.map(type => `.${type}`).join(',');

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
      >
        <input
          type="file"
          multiple
          accept={acceptedFileTypes}
          onChange={(e) => onFilesSelected(Array.from(e.target.files || []))}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          <Upload className="w-12 h-12 text-gray-400 mb-2" />
          <span className="text-gray-600 dark:text-gray-300">
            Drag and drop files here or click to browse
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Accepted formats: {acceptedTypes.join(', ')}
          </span>
        </label>
      </div>

      {selectedFiles.length > 0 && (
        <div className="space-y-2">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="text-sm">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {file.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onFileRemove(index)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}