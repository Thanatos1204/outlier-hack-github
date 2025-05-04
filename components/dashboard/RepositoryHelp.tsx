import React from 'react';

const RepositoryHelp = () => {
  return (
    <div className="bg-card border border-border rounded-md p-4 h-full">
      <h3 className="text-base font-semibold mb-3">Repositories that need your help</h3>
      
      <div className="space-y-4">
        <div className="border-b border-border pb-3">
          <div className="flex items-center mb-1">
            <svg className="h-4 w-4 mr-1.5 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 1.75C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0112.25 16h-8.5A1.75 1.75 0 012 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5z"></path>
              <path d="M6.25 7a.75.75 0 01.75-.75h2a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75z"></path>
            </svg>
            <span className="text-sm font-medium">gradle / gradle</span>
          </div>
          <p className="text-xs text-muted-foreground pl-5">
            Adaptable, fast automation for all
          </p>
        </div>
        
        <div className="border-b border-border pb-3">
          <div className="flex items-center mb-1">
            <svg className="h-4 w-4 mr-1.5 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 1.75C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0112.25 16h-8.5A1.75 1.75 0 012 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5z"></path>
              <path d="M6.25 7a.75.75 0 01.75-.75h2a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75z"></path>
            </svg>
            <span className="text-sm font-medium">joaomatossilva / DateTimeExtensions</span>
          </div>
          <p className="text-xs text-muted-foreground pl-5">
            This project is a merge of several common DateTime operations on the form of extensions to System.DateTime, including natural date difference text (precise and human rounded), holidays and working days calculations on several culture locales.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-1">
            <svg className="h-4 w-4 mr-1.5 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 1.75C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0112.25 16h-8.5A1.75 1.75 0 012 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5z"></path>
              <path d="M6.25 7a.75.75 0 01.75-.75h2a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75z"></path>
            </svg>
            <span className="text-sm font-medium">up-for-grabs / up-for-grabs.net</span>
          </div>
          <p className="text-xs text-muted-foreground pl-5">
            This is a list of projects which have curated tasks specifically for new contributors. These issues are a great way to get started with a project, or to help share the load of working on open source projects. Jump in!
          </p>
        </div>
      </div>
      
      <button className="mt-4 w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium py-1.5 px-4 rounded-md text-sm border border-secondary">
        See more repos with good first issues
      </button>
    </div>
  );
};

export default RepositoryHelp;