import { useState, ReactNode } from 'react';

// Mock data for repository health metrics
const mockRepositories = [
    { 
      id: 1, 
      name: 'devco/InventoryWizard', 
      health: 92,
      issues: { open: 24, closed: 187 },
      pullRequests: { open: 7, merged: 125, closed: 15 },
      activity: 'high',
      ci: { status: 'passing', coverage: 87 },
      dependencies: { upToDate: 18, outdated: 3, vulnerable: 1 },
      contributors: 8,
      commits: { lastWeek: 27, lastMonth: 112 }
    },
    { 
      id: 2, 
      name: 'toolsuite/EndpointEngine', 
      health: 78,
      issues: { open: 12, closed: 83 },
      pullRequests: { open: 4, merged: 56, closed: 7 },
      activity: 'medium',
      ci: { status: 'passing', coverage: 72 },
      dependencies: { upToDate: 12, outdated: 5, vulnerable: 2 },
      contributors: 5,
      commits: { lastWeek: 14, lastMonth: 63 }
    },
    { 
      id: 3, 
      name: 'blocksuite/DataBridge', 
      health: 65,
      issues: { open: 18, closed: 42 },
      pullRequests: { open: 6, merged: 38, closed: 4 },
      activity: 'medium',
      ci: { status: 'failing', coverage: 54 },
      dependencies: { upToDate: 15, outdated: 7, vulnerable: 3 },
      contributors: 4,
      commits: { lastWeek: 8, lastMonth: 37 }
    },
    { 
      id: 4, 
      name: 'opensource/PolicyTracker', 
      health: 89,
      issues: { open: 7, closed: 64 },
      pullRequests: { open: 2, merged: 48, closed: 3 },
      activity: 'high',
      ci: { status: 'passing', coverage: 92 },
      dependencies: { upToDate: 9, outdated: 1, vulnerable: 0 },
      contributors: 6,
      commits: { lastWeek: 21, lastMonth: 78 }
    },
  ];
  

// Helper components
interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-gray-800 border border-gray-700 rounded-md p-4 ${className}`}>
    {children}
  </div>
);

interface SectionTitleProps {
  title: string;
  children?: ReactNode;
}

const SectionTitle = ({ title, children }: SectionTitleProps) => (
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-sm font-semibold text-gray-300">{title}</h3>
    {children}
  </div>
);

const HealthIndicator = ({ score }: { score: number }) => {
  let color = 'bg-green-500';
  if (score < 70) color = 'bg-yellow-500';
  if (score < 50) color = 'bg-red-500';
  
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${color}`} 
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-sm font-medium text-gray-300">{score}</span>
    </div>
  );
};

interface StatusBadgeProps {
  status: string;
  type?: 'default' | 'ci' | 'activity' | 'dependency';
}

const StatusBadge = ({ status, type = 'default' }: StatusBadgeProps) => {
  let bgColor = 'bg-blue-900 text-blue-300';
  
  if (type === 'ci') {
    bgColor = status === 'passing' 
      ? 'bg-green-900 text-green-300' 
      : status === 'failing' 
        ? 'bg-red-900 text-red-300' 
        : 'bg-yellow-900 text-yellow-300';
  } else if (type === 'activity') {
    bgColor = status === 'high' 
      ? 'bg-green-900 text-green-300' 
      : status === 'medium' 
        ? 'bg-yellow-900 text-yellow-300' 
        : 'bg-red-900 text-red-300';
  } else if (type === 'dependency') {
    bgColor = status === 'upToDate'
      ? 'bg-green-900 text-green-300'
      : status === 'outdated'
        ? 'bg-yellow-900 text-yellow-300'
        : 'bg-red-900 text-red-300';
  }
  
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
      {status}
    </span>
  );
};

interface RepoStatCardProps {
  title: string;
  value: number;
  change: number;
  unit?: string;
}

const RepoStatCard = ({ title, value, change, unit = '' }: RepoStatCardProps) => {
  const isPositive = change > 0;
  return (
    <div className="bg-gray-900 rounded-md p-3">
      <div className="text-xs text-gray-500 mb-1">{title}</div>
      <div className="text-xl font-bold text-gray-200">{value}{unit}</div>
      {change !== 0 && (
        <div className={`text-xs ${isPositive ? 'text-green-400' : 'text-red-400'} mt-1 flex items-center`}>
          <svg className="h-3 w-3 mr-0.5" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" d={isPositive 
              ? "M8 12l-8-8 1.5-1.5L8 9 14.5 2.5 16 4z" 
              : "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
            } />
          </svg>
          {isPositive ? '+' : ''}{change}% from last month
        </div>
      )}
    </div>
  );
};

interface Repository {
  id: number;
  name: string;
  health: number;
  issues: { open: number; closed: number };
  pullRequests: { open: number; merged: number; closed: number };
  activity: string;
  ci: { status: string; coverage: number };
  dependencies: { upToDate: number; outdated: number; vulnerable: number };
  contributors: number;
  commits: { lastWeek: number; lastMonth: number };
}

const RepoDetailCard = ({ repository }: { repository: Repository }) => {
  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <svg className="h-4 w-4 mr-1.5 text-blue-400" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
          </svg>
          <span className="text-sm font-medium text-blue-400 hover:underline cursor-pointer">
            {repository.name}
          </span>
        </div>
        <StatusBadge status={repository.activity} type="activity" />
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-gray-500">Health score</div>
        <div className="text-xs text-gray-500">{repository.health}/100</div>
      </div>
      <HealthIndicator score={repository.health} />
      
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Open issues</span>
            <span className="text-gray-300">{repository.issues.open}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Open PRs</span>
            <span className="text-gray-300">{repository.pullRequests.open}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Contributors</span>
            <span className="text-gray-300">{repository.contributors}</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">CI status</span>
            <StatusBadge status={repository.ci.status} type="ci" />
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Coverage</span>
            <span className="text-gray-300">{repository.ci.coverage}%</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Vulnerabilities</span>
            <span className={`text-${repository.dependencies.vulnerable > 0 ? 'red' : 'green'}-400`}>
              {repository.dependencies.vulnerable}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-700 flex justify-between">
        <button className="text-xs text-blue-400 hover:underline">View details</button>
        <button className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded">
          Monitor
        </button>
      </div>
    </Card>
  );
};

interface DependencyItemProps {
  name: string;
  type: 'vulnerable' | 'outdated' | 'upToDate';
  currentVersion: string;
  latestVersion: string;
  age: string;
}

const DependencyItem = ({ name, type, currentVersion, latestVersion, age }: DependencyItemProps) => {
  const isVulnerable = type === 'vulnerable';
  const isOutdated = type === 'outdated' || isVulnerable;
  
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
      <div className="flex items-center">
        <div className={`w-2 h-2 rounded-full ${
          isVulnerable ? 'bg-red-500' : isOutdated ? 'bg-yellow-500' : 'bg-green-500'
        } mr-2`} />
        <span className="text-sm font-medium text-gray-300">{name}</span>
      </div>
      <div className="flex items-center">
        <div className="text-xs text-gray-500 mr-3">
          {currentVersion} {isOutdated && `→ ${latestVersion}`}
        </div>
        <StatusBadge 
          status={isVulnerable ? 'vulnerable' : isOutdated ? 'outdated' : 'upToDate'} 
          type="dependency" 
        />
      </div>
    </div>
  );
};

const DependencyCard = () => {
  const mockDependencies: DependencyItemProps[] = [
    { name: 'react', currentVersion: '18.2.0', latestVersion: '18.2.0', type: 'upToDate', age: '2 months' },
    { name: 'next', currentVersion: '14.0.3', latestVersion: '15.0.0', type: 'outdated', age: '6 months' },
    { name: 'tailwindcss', currentVersion: '3.3.0', latestVersion: '4.0.0', type: 'outdated', age: '8 months' },
    { name: 'lodash', currentVersion: '4.17.20', latestVersion: '4.17.21', type: 'vulnerable', age: '12 months' },
    { name: 'typescript', currentVersion: '5.2.2', latestVersion: '5.2.2', type: 'upToDate', age: '1 month' },
  ];
  
  return (
    <Card>
      <SectionTitle title="Dependencies Status">
        <div className="text-xs text-gray-500">Total: 22</div>
      </SectionTitle>
      
      <div className="flex justify-between mb-4 text-center">
        <div>
          <div className="text-lg font-bold text-green-400">18</div>
          <div className="text-xs text-gray-500">Up to date</div>
        </div>
        <div>
          <div className="text-lg font-bold text-yellow-400">3</div>
          <div className="text-xs text-gray-500">Outdated</div>
        </div>
        <div>
          <div className="text-lg font-bold text-red-400">1</div>
          <div className="text-xs text-gray-500">Vulnerable</div>
        </div>
      </div>
      
      <div className="space-y-1">
        {mockDependencies.map((dep, i) => (
          <DependencyItem key={i} {...dep} />
        ))}
      </div>
      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 mt-3 text-sm font-medium">
        Update All Dependencies
      </button>
    </Card>
  );
};

const CIStatusCard = () => {
  const builds = [
    { id: 1, branch: 'main', status: 'success', time: '2 hours ago', duration: '3m 42s', commit: 'a23f67d' },
    { id: 2, branch: 'feature/user-auth', status: 'success', time: '5 hours ago', duration: '4m 18s', commit: 'b45d12e' },
    { id: 3, branch: 'fix/dashboard-layout', status: 'failure', time: '1 day ago', duration: '2m 56s', commit: 'c78e34f' },
    { id: 4, branch: 'refactor/api-client', status: 'success', time: '2 days ago', duration: '3m 12s', commit: 'd90f56a' },
  ];
  
  return (
    <Card>
      <SectionTitle title="CI/CD Status" />
      
      <div className="space-y-2">
        {builds.map(build => (
          <div key={build.id} className="flex items-center justify-between p-2 bg-gray-900 rounded-md">
            <div className="flex items-center">
              {build.status === 'success' ? (
                <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                </svg>
              ) : (
                <svg className="h-4 w-4 text-red-500 mr-2" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M3.404 12.596a6.5 6.5 0 119.192-9.192 6.5 6.5 0 01-9.192 9.192zM2.344 2.343a8 8 0 1011.313 11.314A8 8 0 002.343 2.343zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z" />
                </svg>
              )}
              <div>
                <div className="text-sm font-medium text-gray-300">{build.branch}</div>
                <div className="text-xs text-gray-500">
                  {build.time} • {build.commit}
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              {build.duration}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// Main component
const RepositoryHealth = () => {
  const [selectedRepo, setSelectedRepo] = useState(mockRepositories[0].id);
  const activeRepo = mockRepositories.find(repo => repo.id === selectedRepo) || mockRepositories[0];
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-200">Repository Health Dashboard</h2>
        <div className="flex items-center gap-2">
          <select 
            className="bg-gray-800 border border-gray-700 rounded-md text-sm text-gray-300 py-1 px-2"
            value={selectedRepo}
            onChange={(e) => setSelectedRepo(Number(e.target.value))}
          >
            {mockRepositories.map(repo => (
              <option key={repo.id} value={repo.id}>
                {repo.name}
              </option>
            ))}
          </select>
          <button className="p-1 rounded-md hover:bg-gray-700">
            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        {/* Main stats - 3 columns */}
        <div className="lg:col-span-3 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <RepoStatCard title="Open Issues" value={activeRepo.issues.open} change={-15} />
            <RepoStatCard title="Open PRs" value={activeRepo.pullRequests.open} change={+8} />
            <RepoStatCard title="Contributors" value={activeRepo.contributors} change={+25} />
          </div>
          
          <Card>
            <SectionTitle title="Activity Overview" />
            <div className="h-40 bg-gray-900 rounded-md mb-2 relative overflow-hidden">
              {/* Basic activity chart */}
              <div className="absolute inset-0 flex items-end px-2">
                {[35, 42, 28, 65, 48, 70, 55, 40, 60, 45, 75, 50].map((height, i) => (
                  <div 
                    key={i}
                    className="h-full flex-1 flex items-end px-0.5"
                  >
                    <div 
                      className="w-full bg-blue-500 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Apr 4</span>
              <span>Apr 11</span>
              <span>Apr 18</span>
              <span>Apr 25</span>
              <span>May 2</span>
            </div>
            
            <div className="grid grid-cols-2 mt-4 gap-4 text-center">
              <div>
                <div className="text-xs text-gray-500">This Week</div>
                <div className="text-lg font-bold text-blue-400">{activeRepo.commits.lastWeek}</div>
                <div className="text-xs text-gray-500">commits</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">This Month</div>
                <div className="text-lg font-bold text-blue-400">{activeRepo.commits.lastMonth}</div>
                <div className="text-xs text-gray-500">commits</div>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <SectionTitle title="Code Coverage" />
              <div className="flex items-center justify-center py-6">
                <div className="relative h-28 w-28">
                  <svg className="h-full w-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="3"
                      strokeDasharray="100, 100"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={activeRepo.ci.coverage > 75 ? "#10B981" : activeRepo.ci.coverage > 50 ? "#F59E0B" : "#EF4444"}
                      strokeWidth="3"
                      strokeDasharray={`${activeRepo.ci.coverage}, 100`}
                    />
                    <text x="18" y="20.5" textAnchor="middle" fill="white" fontSize="8.5" fontWeight="bold">
                      {activeRepo.ci.coverage}%
                    </text>
                  </svg>
                </div>
              </div>
              <div className="text-center text-xs text-gray-500">
                {activeRepo.ci.coverage > 75 ? 'Good coverage' : activeRepo.ci.coverage > 50 ? 'Moderate coverage' : 'Poor coverage'}
              </div>
            </Card>
            <Card>
              <SectionTitle title="PR Approval Time" />
              <div className="text-center py-6">
                <div className="text-3xl font-bold text-blue-400">2.4</div>
                <div className="text-sm text-gray-500">hours on average</div>
                <div className="text-xs text-green-400 mt-1">30% faster than last month</div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Repository list - 1 column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {mockRepositories.map(repo => (
              <RepoDetailCard key={repo.id} repository={repo} />
            ))}
          </div>
        </div>
        
        {/* Right section - 1 column */}
        <div className="lg:col-span-1 space-y-4">
          <DependencyCard />
          <CIStatusCard />
        </div>
      </div>
    </div>
  );
};

export default RepositoryHealth;