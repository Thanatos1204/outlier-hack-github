import React from 'react';

const CreateRepository = () => {
  return (
    <div className="bg-card border border-border rounded-md p-4 h-full">
      <h3 className="text-base font-semibold mb-3">Start a new repository for Thanatos1204</h3>
      <p className="text-sm text-muted-foreground mb-4">
        A repository contains all of your project's files, revision history, and collaborator discussion.
      </p>
      
      <div className="mb-4">
        <label htmlFor="repo-name" className="block text-sm font-medium mb-1">
          Repository name <span className="text-red-500">*</span>
        </label>
        <input
          id="repo-name"
          type="text"
          placeholder="name your new repository..."
          className="input w-full bg-card border border-border h-9 rounded-md px-3 text-sm focus:border-blue-500"
        />
      </div>
      
      <div className="space-y-3 mb-5">
        <div className="flex items-center">
          <input
            id="public-repo"
            type="radio"
            name="repo-visibility"
            className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600"
          />
          <label htmlFor="public-repo" className="ml-2 block">
            <div className="font-medium text-sm">Public</div>
            <p className="text-xs text-muted-foreground">
              Anyone on the internet can see this repository
            </p>
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            id="private-repo"
            type="radio"
            name="repo-visibility"
            className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600"
            defaultChecked
          />
          <label htmlFor="private-repo" className="ml-2 block">
            <div className="font-medium text-sm">Private</div>
            <p className="text-xs text-muted-foreground">
              You choose who can see and commit to this repository
            </p>
          </label>
        </div>
      </div>
      
      <button className="w-full bg-[#238636] hover:bg-[#2ea043] text-white font-semibold py-1.5 px-4 rounded-md text-sm">
        Create a new repository
      </button>
    </div>
  );
};

export default CreateRepository;