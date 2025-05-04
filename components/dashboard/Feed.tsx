import React from 'react';

const Feed = () => {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Feed</h2>
        <button className="inline-flex items-center bg-secondary hover:bg-secondary/80 text-secondary-foreground py-1 px-3 text-sm rounded-md border border-secondary">
          <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3.75 2h3.5a.75.75 0 010 1.5h-3.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-3.5a.75.75 0 011.5 0v3.5A1.75 1.75 0 0112.25 14h-8.5A1.75 1.75 0 012 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.854-1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z"></path>
          </svg>
          Filter
        </button>
      </div>
      
      <div className="bg-card border border-border rounded-md overflow-hidden">
        <div className="border-b border-border p-5">
          <div className="flex items-start mb-3">
            <div className="mr-3">
              <div className="h-10 w-10 rounded-md bg-blue-800 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center text-sm">
                <a href="#" className="font-medium text-blue-500 hover:underline">mindsdb/mindsdb</a>
                <span className="text-muted-foreground ml-2">released</span>
              </div>
              <div className="text-xs text-muted-foreground">4 days ago</div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">v25.4.5.0</h3>
          
          <div className="mb-4">
            <h4 className="text-lg font-medium mb-2">TL;DR</h4>
            
            <div className="space-y-4">
              <h4 className="text-base font-medium mb-2">Bug Fixes and Improvements</h4>
              
              <ul className="space-y-3 pl-6 list-disc">
                <li className="text-sm">
                  We addressed the issue with the DESCRIBE commands for objects in projects, resulting in a smoother and more intuitive user experience.
                </li>
                <li className="text-sm">
                  We've made certain that only authorized users can access sensitive features.
                </li>
              </ul>
              
              <div>
                <a href="#" className="text-sm text-blue-400 hover:underline">
                  Read more
                </a>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-3">
                <div className="flex items-center">
                  <div className="avatar w-5 h-5 rounded-full bg-gray-600 mr-1"></div>
                  <div className="avatar w-5 h-5 rounded-full bg-blue-600 mr-1"></div>
                  <div className="avatar w-5 h-5 rounded-full bg-green-600 mr-1"></div>
                  <div className="avatar w-5 h-5 rounded-full bg-yellow-600 mr-1"></div>
                  <div className="avatar w-5 h-5 rounded-full bg-purple-600"></div>
                </div>
                <div>Contributors</div>
              </div>
              
              <div className="flex items-center gap-2 pt-2">
                <button className="p-1 rounded-md hover:bg-secondary">
                  <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.893c.614.893.614.894.613.894V10.867c-.36.267-.741.482-1.152.607-.413.125-.813.179-1.2.052-1.17-.388-1.9-.962-2.06-1.265A.75.75 0 015.32 9.636z"></path>
                  </svg>
                </button>
                <div className="text-xs">2</div>
                
                <button className="p-1 rounded-md hover:bg-secondary ml-2">
                  <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                  </svg>
                </button>
                <div className="text-xs">2</div>
                
                <button className="p-1 rounded-md hover:bg-secondary ml-2">
                  <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
                  </svg>
                </button>
                <div className="text-xs">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;