import React from 'react';

const ExploreRepositories = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold">Explore repositories</h3>
      
      <div className="space-y-4">
        <div className="bg-card border border-border hover:border-muted rounded-md p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white flex-shrink-0">p</div>
              <span className="text-sm font-medium truncate">prstrive / UniMVSNet</span>
            </div>
            <button className="flex items-center justify-center h-6 w-6 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground my-2">
            [CVPR 2022] Rethinking Depth Estimation for Multi-View Stereo: A Unified Representation 
          </p>
          
          <div className="flex items-center text-xs text-muted-foreground mt-3">
            <div className="flex items-center mr-3">
              <svg className="mr-1 h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>
              143
            </div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-yellow-400 mr-1"></span>
              Python
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border hover:border-muted rounded-md p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white flex-shrink-0">m</div>
              <span className="text-sm font-medium truncate">marcizhu / marcizhu</span>
            </div>
            <button className="flex items-center justify-center h-6 w-6 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground my-2">
            An interactive chess game in a README file!
          </p>
          
          <div className="flex items-center text-xs text-muted-foreground mt-3">
            <div className="flex items-center mr-3">
              <svg className="mr-1 h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>
              191
            </div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-blue-500 mr-1"></span>
              Python
            </div>
          </div>
        </div>
      </div>
      
      <button className="text-sm text-primary hover:underline flex items-center">
        Explore more 
        <svg className="ml-1 h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
          <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" clipRule="evenodd"></path>
        </svg>
      </button>
    </div>
  );
};

export default ExploreRepositories;