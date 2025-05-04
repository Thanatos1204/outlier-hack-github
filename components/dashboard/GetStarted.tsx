import React from 'react';

const GetStarted = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" fill="currentColor" className="text-muted-foreground">
            <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
            <path d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.099.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
          </svg>
          <span className="text-sm text-muted-foreground">Get started on GitHub</span>
        </div>
        <button className="p-1 rounded-md hover:bg-secondary">
          <svg width="16" height="16" fill="currentColor" className="text-muted-foreground">
            <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative bg-card border border-border rounded-md p-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-blue-600/30 opacity-70"></div>
          </div>
          
          <div className="relative">
            <div className="flex justify-center mb-3">
              <div className="h-14 w-14 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
                </svg>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-base font-semibold mb-1">What is GitHub?</h3>
              <button className="inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-1.5 font-medium text-sm mt-2">
                <svg className="mr-1.5" width="16" height="16" fill="currentColor">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
                </svg>
                Watch
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-md p-4">
          <div className="flex items-center gap-3 mb-3">
            <svg className="h-6 w-6 text-blue-500" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <h3 className="text-base font-semibold">Follow this exercise to try the GitHub flow</h3>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">
            GitHub's "Hello World" tutorial teaches you essentials, where you create your own repository and learn GitHub's pull request workflow for creating and reviewing code.
          </p>
          
          <button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium py-1.5 px-4 rounded-md text-sm border border-secondary">
            Try the GitHub flow
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;