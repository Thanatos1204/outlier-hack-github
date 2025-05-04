import React from 'react';

const GitHubEducation = () => {
  return (
    <div className="bg-card border border-border rounded-md p-5 relative">
      <button className="absolute right-3 top-3 text-muted-foreground hover:text-foreground">
        <svg width="16" height="16" fill="currentColor">
          <path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
        </svg>
      </button>
      
      <h3 className="text-base font-semibold mb-3">Learn. Collaborate. Grow.</h3>
      
      <p className="text-sm text-muted-foreground mb-4">
        GitHub Education gives you the tools and community support to take on tech challenges and turn them into opportunities. Your future in tech starts here!
      </p>
      
      <button className="btn btn-secondary w-full py-1.5 px-4 bg-secondary text-sm rounded-md border border-secondary hover:bg-secondary/80">
        Go to GitHub Education
      </button>
    </div>
  );
};

export default GitHubEducation;