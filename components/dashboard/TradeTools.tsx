import React from 'react';

const TradeTools = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" fill="currentColor" className="text-muted-foreground">
            <path fillRule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
          </svg>
          <span className="text-sm text-muted-foreground">Use tools of the trade</span>
        </div>
        <button className="p-1 rounded-md hover:bg-secondary">
          <svg width="16" height="16" fill="currentColor" className="text-muted-foreground">
            <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-md p-4">
          <h3 className="text-base font-semibold mb-2">Simplify your development workflow with a GUI</h3>
          
          <div className="flex items-start mt-4">
            <div className="mr-3">
              <svg className="h-9 w-9 text-purple-500" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </div>
            <div>
              <a href="#" className="text-blue-400 hover:underline font-medium">Install GitHub Desktop</a>
              <p className="text-sm text-muted-foreground mt-1">
                to visualize, commit, and push changes without ever touching the command line.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-md p-4">
          <h3 className="text-base font-semibold mb-2">Write code in your web browser</h3>
          
          <div className="flex items-start mt-4">
            <div className="mr-3">
              <svg className="h-9 w-9 text-blue-500" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12.17 3.83c-.27-.27-.47-.55-.63-.88-.16-.31-.27-.66-.34-1.02-.58.33-1.16.7-1.73 1.13-.58.44-1.14.94-1.69 1.48-.7.7-1.33 1.81-1.78 2.45H3L0 10h3l2-2c-.34.77-1.02 2.98-1 3l1 1c.34.3 1.87-.08 2.53-.7.67-.64 1.24-1.29 1.7-1.94.12-.17.24-.33.36-.5l2.59 2.59c.39.39 1.03.39 1.42 0 .39-.39.39-1.03 0-1.42L9.36 6.79c.93-1.21 1.63-2.56 2.25-4.05W15 2.41 13.41 1l-1.17 1.17c.34.3.59.59.76.88.17.29.29.63.34 1.02-.37.08-.74.25-1.17.5zm-1.07 1.8L9.41 7.31c-.22.37-.47.74-.76 1.09l1.76 1.76c.2-.39.39-.78.58-1.17.19-.38.38-.78.58-1.17l.99-1.99z"></path>
              </svg>
            </div>
            <div>
              <a href="#" className="text-blue-400 hover:underline font-medium">Use the github.dev web-based editor</a>
              <p className="text-sm text-muted-foreground mt-1">
                from your repository or pull request to create and commit changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeTools;