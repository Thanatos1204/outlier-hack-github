import { useState } from 'react';

// Mock data for developer insights
const mockContributionData = [
  { date: '2025-04-28', count: 7 },
  { date: '2025-04-29', count: 4 },
  { date: '2025-04-30', count: 12 },
  { date: '2025-05-01', count: 5 },
  { date: '2025-05-02', count: 9 },
  { date: '2025-05-03', count: 6 },
  { date: '2025-05-04', count: 3 },
];

const mockProductivityTimes = [
  { hour: '9am', score: 65, commits: 8, focus: '42 min/hr' },
  { hour: '10am', score: 82, commits: 12, focus: '54 min/hr' },
  { hour: '11am', score: 91, commits: 15, focus: '58 min/hr' },
  { hour: '12pm', score: 53, commits: 5, focus: '35 min/hr' },
  { hour: '1pm', score: 47, commits: 4, focus: '30 min/hr' },
  { hour: '2pm', score: 75, commits: 9, focus: '48 min/hr' },
  { hour: '3pm', score: 87, commits: 14, focus: '56 min/hr' },
  { hour: '4pm', score: 68, commits: 7, focus: '44 min/hr' },
  { hour: '5pm', score: 42, commits: 3, focus: '28 min/hr' },
];

const mockLanguageStats = [
  { language: 'TypeScript', percentage: 42, color: '#3178c6' },
  { language: 'JavaScript', percentage: 28, color: '#f1e05a' },
  { language: 'Python', percentage: 15, color: '#3572A5' },
  { language: 'CSS', percentage: 10, color: '#563d7c' },
  { language: 'HTML', percentage: 5, color: '#e34c26' },
];

const mockRepoActivity = [
  { name: 'devco/InventoryWizard', commits: 17, prs: 4, issues: 6 },
  { name: 'johndoe/TaskTrackerPro', commits: 32, prs: 7, issues: 11 },
  { name: 'blocksuite/DataBridge', commits: 8, prs: 2, issues: 4 },
];

const mockCollaborators = [
  { name: 'Sarah Chen', avatar: 'S', activity: 'high', openPRs: 3 },
  { name: 'Raj Patel', avatar: 'R', activity: 'medium', openPRs: 1 },
  { name: 'Alex Kim', avatar: 'A', activity: 'high', openPRs: 4 },
  { name: 'Maria Lopez', avatar: 'M', activity: 'low', openPRs: 0 },
];

// Helper components
const SectionTitle = ({ title, children }: { title: string; children?: React.ReactNode }) => (
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-sm font-semibold text-gray-300">{title}</h3>
    {children}
  </div>
);

const Card = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => (
  <div className={`bg-gray-800 border border-gray-700 rounded-md p-4 ${className}`}>
    {children}
  </div>
);

type ContributionDay = {
  date: string;
  count: number;
};

const ContributionHeatmap = ({ data }: { data: ContributionDay[] }) => {
  // Simplified heatmap for the example
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-500">Less</span>
        <div className="flex gap-1">
          {['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'].map((color, i) => (
            <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
          ))}
        </div>
        <span className="text-xs text-gray-500">More</span>
      </div>
      <div className="flex gap-1 mt-1">
        {data.map((day, i) => {
          // Determine color based on count
          let color = '#161b22';
          if (day.count > 0) color = '#0e4429';
          if (day.count > 3) color = '#006d32';
          if (day.count > 6) color = '#26a641';
          if (day.count > 9) color = '#39d353';
          
          return (
            <div 
              key={i} 
              className="w-4 h-4 rounded-sm"
              style={{ backgroundColor: color }}
              title={`${day.date}: ${day.count} contributions`}
            />
          );
        })}
      </div>
    </div>
  );
};

const LanguageBar = ({ language, percentage, color }: { language: string; percentage: number; color: string }) => (
  <div className="mb-2">
    <div className="flex justify-between text-xs mb-1">
      <span className="text-gray-300">{language}</span>
      <span className="text-gray-500">{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
      <div 
        className="h-full rounded-full" 
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
    </div>
  </div>
);

const ActivityBar = ({ value, max, color }: { value: number; max: number; color: string }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
      <div 
        className="h-full rounded-full" 
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
    </div>
  );
};

const TabButton = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button
    className={`px-3 py-1.5 text-sm font-medium rounded-md ${
      active 
        ? 'bg-gray-700 text-white' 
        : 'text-gray-400 hover:text-gray-300'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

// Hour productivity component
const HourProductivity = ({ 
  time, 
  selectedHour, 
  setSelectedHour 
}: { 
  time: { hour: string; score: number }; 
  selectedHour: string; 
  setSelectedHour: (hour: string) => void 
}) => {
  const isSelected = selectedHour === time.hour;
  
  // Get color based on productivity score
  const getBarColor = (score: number): string => {
    if (score > 80) return '#4CAF50'; // High productivity - green
    if (score > 60) return '#2196F3'; // Medium productivity - blue
    return '#FFC107'; // Lower productivity - amber
  };
  
  return (
    <div 
      className={`w-8 flex flex-col items-center cursor-pointer transition-all duration-200 ${
        isSelected ? 'scale-110' : 'hover:scale-105'
      }`}
      onClick={() => setSelectedHour(time.hour)}
    >
      <div className="relative h-48 w-full">
        <div 
          className={`absolute bottom-0 w-full rounded-t-sm transition-all ${
            isSelected ? 'border-2 border-white' : 'border border-transparent'
          }`}
          style={{ 
            height: `${time.score}%`, 
            backgroundColor: getBarColor(time.score) 
          }} 
        />
      </div>
      <div className={`text-xs mt-1 ${isSelected ? 'text-white font-medium' : 'text-gray-500'}`}>
        {time.hour}
      </div>
    </div>
  );
};

// Main component
const DeveloperInsights = () => {
  const [activeTab, setActiveTab] = useState('activity');
  const [timeRange, setTimeRange] = useState('week');
  const [selectedHour, setSelectedHour] = useState('11am');
  
  const selectedTimeData = mockProductivityTimes.find(t => t.hour === selectedHour);
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-200">Developer Insights</h2>
        <div className="flex items-center gap-2">
          <select 
            className="bg-gray-800 border border-gray-700 rounded-md text-sm text-gray-300 py-1 px-2"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>
      
      {/* Tab navigation */}
      <div className="border-b border-gray-700 pb-2">
        <div className="flex gap-2">
          <TabButton 
            active={activeTab === 'activity'} 
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </TabButton>
          <TabButton 
            active={activeTab === 'productivity'} 
            onClick={() => setActiveTab('productivity')}
          >
            Productivity
          </TabButton>
          <TabButton 
            active={activeTab === 'collaboration'} 
            onClick={() => setActiveTab('collaboration')}
          >
            Collaboration
          </TabButton>
        </div>
      </div>
      
      {/* Activity Tab */}
      {activeTab === 'activity' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <SectionTitle title="Contribution Activity">
              <span className="text-green-500 text-xs font-medium">+22% vs. last week</span>
            </SectionTitle>
            <div className="mb-4">
              <ContributionHeatmap data={mockContributionData} />
              <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">46</div>
                  <div className="text-xs text-gray-500">Commits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">13</div>
                  <div className="text-xs text-gray-500">PRs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">21</div>
                  <div className="text-xs text-gray-500">Issues</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">8</div>
                  <div className="text-xs text-gray-500">Reviews</div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card>
            <SectionTitle title="Language & Tech Stack" />
            <div className="space-y-3">
              {mockLanguageStats.map((lang, i) => (
                <LanguageBar 
                  key={i} 
                  language={lang.language} 
                  percentage={lang.percentage} 
                  color={lang.color}
                />
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-900 rounded-md p-2 text-center">
                  <div className="text-xs text-gray-500">Top Framework</div>
                  <div className="text-sm font-medium text-gray-300 mt-1">React</div>
                </div>
                <div className="bg-gray-900 rounded-md p-2 text-center">
                  <div className="text-xs text-gray-500">Most Used</div>
                  <div className="text-sm font-medium text-gray-300 mt-1">VS Code</div>
                </div>
                <div className="bg-gray-900 rounded-md p-2 text-center">
                  <div className="text-xs text-gray-500">Preferred</div>
                  <div className="text-sm font-medium text-gray-300 mt-1">NextJS</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
      
      {/* Productivity Tab */}
      {activeTab === 'productivity' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <SectionTitle title="Most Productive Hours">
              <div className="text-xs text-gray-500">
                Based on the last 30 days
              </div>
            </SectionTitle>
            
            <div className="flex flex-col h-80">
              {mockProductivityTimes.length === 0 ? (
                <div className="h-48 flex items-center justify-center text-sm text-gray-500">
                  No productivity data available.
                </div>
              ) : (
                <div className="flex items-end justify-between mt-3 mb-2 px-2 flex-1">
                  {mockProductivityTimes.map((time, i) => (
                    <HourProductivity 
                      key={i} 
                      time={time} 
                      selectedHour={selectedHour}
                      setSelectedHour={setSelectedHour}
                    />
                  ))}
                </div>
              )}
              
              <div className="h-24 bg-gray-900 rounded-md p-3 mt-2">
                {selectedTimeData && (
                  <div className="h-full flex flex-col">
                    <div className="text-sm font-medium text-gray-300 mb-1">
                      {selectedHour} Productivity Details
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-400">{selectedTimeData.score}%</div>
                        <div className="text-xs text-gray-500">Productivity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-400">{selectedTimeData.commits}</div>
                        <div className="text-xs text-gray-500">Commits</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-400">{selectedTimeData.focus}</div>
                        <div className="text-xs text-gray-500">Focus Time</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      {selectedTimeData.score > 80 
                        ? "This is one of your peak productivity hours! Consider scheduling important work during this time."
                        : selectedTimeData.score > 60
                        ? "You're quite productive during this hour. Good for focused work."
                        : "This is a lower productivity period. Maybe better for meetings or admin tasks."}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
          
          <Card>
            <SectionTitle title="Repository Activity">
              <select className="bg-gray-900 border border-gray-700 rounded text-xs text-gray-300 py-1 px-2">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </SectionTitle>
            <div className="space-y-4">
              {mockRepoActivity.map((repo, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-400 truncate">{repo.name}</span>
                    <span className="text-xs text-gray-500">
                      {repo.commits + repo.prs + repo.issues} events
                    </span>
                  </div>
                  <div className="flex gap-2 items-center text-xs bg-gray-900 p-2 rounded-md">
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg height="16" width="16" className="text-gray-500" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z" />
                      </svg>
                      <span>{repo.commits}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg height="16" width="16" className="text-gray-500" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z" />
                      </svg>
                      <span>{repo.prs}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg height="16" width="16" className="text-gray-500" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
                      </svg>
                      <span>{repo.issues}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Activity level</span>
                      <span className="text-gray-300">
                        {Math.round((repo.commits + repo.prs * 2 + repo.issues) / 0.6)}%
                      </span>
                    </div>
                    <ActivityBar 
                      value={repo.commits + repo.prs * 2 + repo.issues} 
                      max={60} 
                      color={
                        (repo.commits + repo.prs * 2 + repo.issues) > 45 
                          ? '#4CAF50' 
                          : (repo.commits + repo.prs * 2 + repo.issues) > 30 
                            ? '#2196F3' 
                            : '#FFC107'
                      }
                    />
                  </div>
                </div>
              ))}
              
              <button className="w-full bg-gray-900 hover:bg-gray-700 text-gray-300 rounded-md py-2 mt-2 text-sm font-medium border border-gray-700">
                View All Repositories
              </button>
            </div>
          </Card>
          
          {/* Productivity Summary Card */}
          <Card className="md:col-span-2">
            <SectionTitle title="Productivity Trends & Insights" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900 p-3 rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-300">Peak Hours</div>
                  <span className="text-xs bg-green-900 text-green-300 px-2 py-0.5 rounded-full">
                    Consistent
                  </span>
                </div>
                <div className="text-lg font-semibold text-white mb-1">11AM & 3PM</div>
                <p className="text-xs text-gray-500">
                  You're most productive in the late morning and mid-afternoon. Try scheduling complex tasks during these times.
                </p>
              </div>
              
              <div className="bg-gray-900 p-3 rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-300">Focus Suggestion</div>
                  <span className="text-xs bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full">
                    Insight
                  </span>
                </div>
                <div className="text-lg font-semibold text-white mb-1">Pomodoro Technique</div>
                <p className="text-xs text-gray-500">
                  Based on your work patterns, try 25-minute focused work sessions with 5-minute breaks to maximize productivity.
                </p>
              </div>
              
              <div className="bg-gray-900 p-3 rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-300">Meeting Impact</div>
                  <span className="text-xs bg-yellow-900 text-yellow-300 px-2 py-0.5 rounded-full">
                    Action Required
                  </span>
                </div>
                <div className="text-lg font-semibold text-white mb-1">26% Drop</div>
                <p className="text-xs text-gray-500">
                  Meetings during your peak hours reduce your productivity by ~26%. Consider rescheduling them to lower productivity periods.
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
      
      {/* Collaboration Tab */}
      {activeTab === 'collaboration' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <SectionTitle title="Team Collaboration" />
            <div className="space-y-3">
              {mockCollaborators.map((collaborator, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white 
                      ${i % 4 === 0 ? 'bg-blue-600' : i % 4 === 1 ? 'bg-green-600' : i % 4 === 2 ? 'bg-purple-600' : 'bg-red-600'}`}
                    >
                      {collaborator.avatar}
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">{collaborator.name}</div>
                      <div className="flex items-center gap-1 text-xs">
                        <span className={`w-2 h-2 rounded-full ${
                          collaborator.activity === 'high' ? 'bg-green-500' : 
                          collaborator.activity === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                        <span className="text-gray-500">
                          {collaborator.activity === 'high' ? 'Very active' : 
                          collaborator.activity === 'medium' ? 'Active' : 'Less active'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-gray-500">
                      {collaborator.openPRs} open PRs
                    </div>
                    <button className="p-1 rounded-md hover:bg-gray-700">
                      <svg height="16" width="16" className="text-gray-500" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 11-2 0 1 1 0 012 0zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.893c.614.893.614.894.613.894V10.867c-.36.267-.741.482-1.152.607-.413.125-.813.179-1.2.052-1.17-.388-1.9-.962-2.06-1.265A.75.75 0 015.32 9.636z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          <Card>
            <SectionTitle title="Collaboration Stats" />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-3 rounded-md">
                <div className="text-2xl font-bold text-blue-400">85%</div>
                <div className="text-xs text-gray-500">PR approval rate</div>
                <div className="text-xs text-green-500 mt-1">+12% from last month</div>
              </div>
              <div className="bg-gray-900 p-3 rounded-md">
                <div className="text-2xl font-bold text-purple-400">4.2h</div>
                <div className="text-xs text-gray-500">Avg. PR review time</div>
                <div className="text-xs text-green-500 mt-1">-1.3h from last month</div>
              </div>
              <div className="bg-gray-900 p-3 rounded-md">
                <div className="text-2xl font-bold text-green-400">93%</div>
                <div className="text-xs text-gray-500">Issue resolution rate</div>
                <div className="text-xs text-green-500 mt-1">+5% from last month</div>
              </div>
              <div className="bg-gray-900 p-3 rounded-md">
                <div className="text-2xl font-bold text-orange-400">8</div>
                <div className="text-xs text-gray-500">Team members</div>
                <div className="text-xs text-blue-500 mt-1">+2 new this month</div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DeveloperInsights;