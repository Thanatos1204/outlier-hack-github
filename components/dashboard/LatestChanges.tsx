import React from 'react';

const LatestChanges = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold">Latest changes</h3>
      
      <div className="space-y-6 ml-1">
        <div className="changelog-item">
          <div className="text-xs text-muted-foreground mb-1">Yesterday</div>
          <a href="#" className="text-sm font-medium hover:text-primary block mb-1">
            Track progress on code scanning alerts with the new development section
          </a>
        </div>
        
        <div className="changelog-item">
          <div className="text-xs text-muted-foreground mb-1">2 days ago</div>
          <a href="#" className="text-sm font-medium hover:text-primary block mb-1">
            GitHub now provides a warning about hidden Unicode text
          </a>
        </div>
        
        <div className="changelog-item">
          <div className="text-xs text-muted-foreground mb-1">2 days ago</div>
          <a href="#" className="text-sm font-medium hover:text-primary block mb-1">
            Improved accessibility features in GitHub CLI
          </a>
        </div>
        
        <div className="changelog-item">
          <div className="text-xs text-muted-foreground mb-1">2 days ago</div>
          <a href="#" className="text-sm font-medium hover:text-primary block mb-1">
            Draft pull requests are now available in all repositories
          </a>
        </div>
      </div>
      
      <a href="#" className="text-sm text-primary hover:underline flex items-center">
        View changelog 
        <svg className="ml-1 h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
          <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" clipRule="evenodd"></path>
        </svg>
      </a>
    </div>
  );
};

export default LatestChanges;