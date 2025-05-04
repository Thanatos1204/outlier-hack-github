import React from 'react';

const TutorialProjects = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" fill="currentColor" className="text-muted-foreground">
            <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 13H8.06l-2.573 2.573A1.458 1.458 0 013 14.543V13H1.75A1.75 1.75 0 010 11.25v-8.5C0 1.784.784 1 1.75 1zM1.5 2.75v8.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.749.749 0 01.53-.22h6.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25z"></path>
          </svg>
          <span className="text-sm text-muted-foreground">Learn with a tutorial project</span>
        </div>
        <button className="p-1 rounded-md hover:bg-secondary">
          <svg width="16" height="16" fill="currentColor" className="text-muted-foreground">
            <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-md p-4">
          <h3 className="text-base font-semibold mb-1">Introduction to GitHub</h3>
          <p className="text-sm text-muted-foreground">Get started using GitHub in less than an hour.</p>
        </div>
        
        <div className="bg-card border border-border rounded-md p-4">
          <h3 className="text-base font-semibold mb-1">GitHub Pages</h3>
          <p className="text-sm text-muted-foreground">Create a site or blog from your GitHub repositories with GitHub Pages.</p>
        </div>
        
        <div className="bg-card border border-border rounded-md p-4">
          <h3 className="text-base font-semibold mb-1">Code with Copilot</h3>
          <p className="text-sm text-muted-foreground">Develop with AI-powered code suggestions using GitHub Copilot, Codespaces, and VS Code.</p>
        </div>
        
        <div className="bg-card border border-border rounded-md p-4">
          <h3 className="text-base font-semibold mb-1">Hello GitHub Actions</h3>
          <p className="text-sm text-muted-foreground">Create a GitHub Action and use it in a workflow.</p>
        </div>
      </div>
      
      <div className="text-center">
        <button className="text-sm text-primary hover:underline">
          See more tutorial projects
        </button>
      </div>
    </div>
  );
};

export default TutorialProjects;