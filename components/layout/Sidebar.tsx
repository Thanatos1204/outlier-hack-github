import React from 'react';

const repositories = [
  { id: 1, icon: 'circle', name: 'devco/InventoryWizard' },
  { id: 2, icon: 'circle', name: 'devco/ClientPortalApp' },
  { id: 3, icon: 'square', name: 'techgroup/CodeEthicsGuide' },
  { id: 4, icon: 'profile', name: 'johndoe/TaskTrackerPro' },
  { id: 5, icon: 'square-2', name: 'blocksuite/DataBridge' },
  { id: 6, icon: 'square-2', name: 'blocksuite/InsightOpsTool' },
  { id: 7, icon: 'circle', name: 'devco/ProjectZephyr' },
];

const teams = [
  { id: 1, icon: 'square-2', name: 'techclub/alexsmith-dev' },
];


const Sidebar = () => {
  return (
    <aside className="sidebar w-[320px] h-full overflow-y-auto p-4 bg-background">
      {/* User Profile */}
      <div className="flex items-center gap-2 mb-6">
        <div className="avatar w-8 h-8 bg-orange-500 text-white flex items-center justify-center">
          <span className="text-sm font-semibold">T</span>
        </div>
        <div className="flex-1 flex items-center">
          <span className="font-semibold text-sm truncate">Thanatos1204</span>
          <svg className="h-4 w-4 ml-1" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Top Repositories Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold">Top repositories</h2>
          <button className="btn-primary inline-flex items-center justify-center h-7 px-2 py-1 text-xs rounded-md">
            <svg className="mr-1 h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6H9.75A.75.75 0 019 5.25V1.5H3.75zM10 4.75V1.5l3.5 3.25H10z"></path>
            </svg>
            New
          </button>
        </div>
        
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Find a repository..."
            className="input h-7 py-1 pl-8 text-xs w-full bg-card"
          />
        </div>
        
        <ul className="space-y-1">
          {repositories.map((repo) => (
            <li key={repo.id} className="repo-item text-sm">
              {repo.icon === 'circle' ? (
                <span className="h-3.5 w-3.5 bg-blue-500 rounded-full flex-shrink-0 mr-2"></span>
              ) : repo.icon === 'square' ? (
                <span className="h-3.5 w-3.5 bg-gray-200 rounded-sm flex-shrink-0 mr-2"></span>
              ) : repo.icon === 'profile' ? (
                <span className="h-3.5 w-3.5 bg-orange-400 rounded-full flex-shrink-0 mr-2"></span>
              ) : (
                <span className="h-3.5 w-3.5 bg-purple-500 rounded-sm flex-shrink-0 mr-2"></span>
              )}
              <span className="truncate">{repo.name}</span>
            </li>
          ))}
        </ul>
        
        <button className="text-xs text-muted-foreground hover:text-foreground mt-2 flex items-center">
          Show more
        </button>
      </div>

      {/* Your Teams Section */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Your teams</h2>
        
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Find a team..."
            className="input h-7 py-1 pl-8 text-xs w-full bg-card"
          />
        </div>
        
        <ul className="space-y-1">
          {teams.map((team) => (
            <li key={team.id} className="repo-item text-sm">
              <span className="h-3.5 w-3.5 bg-green-500 rounded-sm flex-shrink-0 mr-2"></span>
              <span className="truncate">{team.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;