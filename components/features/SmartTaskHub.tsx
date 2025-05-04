import { useState } from 'react';

// Mock data for personal dashboard
const mockAssignedTasks: Task[] = [
    { id: 1, title: 'Fix login authentication bug', repository: 'devco/AuthManager', priority: 'high', dueDate: '2025-05-06', type: 'issue' },
    { id: 2, title: 'Review PR: Add filter functionality', repository: 'toolsuite/DashboardKit', priority: 'medium', dueDate: '2025-05-05', type: 'pull_request' },
    { id: 3, title: 'Implement dark mode UI', repository: 'blocksuite/UIThemes', priority: 'low', dueDate: '2025-05-08', type: 'issue' },
    { id: 4, title: 'Document API for v2.0 release', repository: 'devco/AuthManager', priority: 'medium', dueDate: '2025-05-09', type: 'issue' },
    { id: 5, title: 'Review PR: Refactor data logic', repository: 'devco/AuthManager', priority: 'high', dueDate: '2025-05-04', type: 'pull_request' },
  ];
  

  const mockTeamActivity = [
    { id: 1, user: 'Jamie Doe', avatar: 'J', action: 'opened a pull request', target: 'Add client-side validation', time: '2 hours ago', repository: 'devco/AuthManager' },
    { id: 2, user: 'Chris Ray', avatar: 'C', action: 'commented on issue', target: 'Optimize dashboard loading', time: '4 hours ago', repository: 'toolsuite/DashboardKit' },
    { id: 3, user: 'Morgan Lee', avatar: 'M', action: 'merged a pull request', target: 'Fix pagination in listing', time: '6 hours ago', repository: 'devco/FrontendUI' },
    { id: 4, user: 'Taylor Brooks', avatar: 'T', action: 'closed issue', target: 'Update broken documentation links', time: '1 day ago', repository: 'opensource/docs-hub' },
  ];
  

  const mockScheduledEvents = [
    { id: 1, title: 'Team Standup', time: '10:00 AM', duration: '15 min', participants: 8 },
    { id: 2, title: 'Code Review Session', time: '11:30 AM', duration: '45 min', participants: 3 },
    { id: 3, title: 'Product Demo', time: '2:00 PM', duration: '1 hour', participants: 12 },
  ];
  

  const mockCodeReviews = [
    { id: 1, title: 'Implement JWT authentication', repository: 'devco/AuthManager', author: 'Jamie Doe', avatar: 'J', filesChanged: 8, additions: 124, deletions: 35 },
    { id: 2, title: 'Add loading state to dashboard', repository: 'blocksuite/UIThemes', author: 'Morgan Lee', avatar: 'M', filesChanged: 3, additions: 47, deletions: 12 },
  ];
  

// Helper components
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-gray-800 border border-gray-700 rounded-md p-4 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ title, children }: { title: string; children?: React.ReactNode }) => (
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-sm font-semibold text-gray-300">{title}</h3>
    {children}
  </div>
);

const PriorityBadge = ({ priority }: { priority: 'low' | 'medium' | 'high' }) => {
  let bgColor = 'bg-green-900 text-green-300';
  if (priority === 'medium') bgColor = 'bg-yellow-900 text-yellow-300';
  if (priority === 'high') bgColor = 'bg-red-900 text-red-300';
  
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full ${bgColor}`}>
      {priority}
    </span>
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

interface Task {
  id: number;
  title: string;
  repository: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  type: 'issue' | 'pull_request';
}

const TaskItem = ({ task, onComplete }: { task: Task; onComplete: (id: number) => void }) => {
  const isPastDue = new Date(task.dueDate) < new Date();
  const isDueSoon = new Date(task.dueDate) < new Date(new Date().setDate(new Date().getDate() + 2));
  
  return (
    <div className="p-3 border border-gray-700 rounded-md mb-2 hover:border-gray-600 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <input 
            type="checkbox" 
            className="mt-1 h-4 w-4 rounded border-gray-700 text-blue-500 focus:ring-blue-500"
            onChange={() => onComplete(task.id)}
          />
          <div>
            <div className="text-sm font-medium text-gray-300">{task.title}</div>
            <div className="text-xs text-gray-500 mt-0.5">
              {task.repository}
            </div>
          </div>
        </div>
        <PriorityBadge priority={task.priority} />
      </div>
      <div className="flex items-center justify-between mt-2 ml-6">
        <div className="flex items-center gap-2">
          <span className={`text-xs ${isPastDue ? 'text-red-400' : isDueSoon ? 'text-yellow-400' : 'text-gray-500'}`}>
            {isPastDue ? 'Past due: ' : isDueSoon ? 'Due soon: ' : 'Due: '}
            {task.dueDate}
          </span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${
            task.type === 'issue' 
              ? 'bg-green-900 text-green-300' 
              : 'bg-purple-900 text-purple-300'
          }`}>
            {task.type === 'issue' ? (
              <>
                <svg className="h-3 w-3 mr-1" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
                </svg>
                Issue
              </>
            ) : (
              <>
                <svg className="h-3 w-3 mr-1" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z" />
                </svg>
                Pull Request
              </>
            )}
          </span>
        </div>
        <button className="p-1 rounded hover:bg-gray-700 text-gray-500 hover:text-gray-300">
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

interface Activity {
  id: number;
  user: string;
  avatar: string;
  action: string;
  target: string;
  time: string;
  repository: string;
}

const ActivityItem = ({ activity }: { activity: Activity }) => {
  let avatarColor = 'bg-blue-600';
  if (activity.avatar === 'R') avatarColor = 'bg-green-600';
  if (activity.avatar === 'A') avatarColor = 'bg-purple-600';
  if (activity.avatar === 'M') avatarColor = 'bg-red-600';
  
  return (
    <div className="flex items-start gap-3 mb-3 pb-3 border-b border-gray-700 last:border-0 last:mb-0 last:pb-0">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 ${avatarColor}`}>
        {activity.avatar}
      </div>
      <div>
        <div className="text-sm">
          <span className="font-medium text-gray-300">{activity.user}</span>
          <span className="text-gray-500"> {activity.action} </span>
          <span className="text-blue-400">{activity.target}</span>
        </div>
        <div className="text-xs text-gray-500 mt-0.5">
          {activity.time} in {activity.repository}
        </div>
      </div>
    </div>
  );
};

interface ScheduledEvent {
  id: number;
  title: string;
  time: string;
  duration: string;
  participants: number;
}

interface CodeReview {
  id: number;
  title: string;
  repository: string;
  author: string;
  avatar: string;
  filesChanged: number;
  additions: number;
  deletions: number;
}

const ScheduleItem = ({ event }: {event:ScheduledEvent}) => (
    <div className="flex items-center justify-between p-2 border-b border-gray-700 last:border-0">
      <div>
        <div className="text-sm font-medium text-gray-300">{event.title}</div>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
          <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 11-2 0 1 1 0 012 0zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.893c.614.893.614.894.613.894V10.867c-.36.267-.741.482-1.152.607-.413.125-.813.179-1.2.052-1.17-.388-1.9-.962-2.06-1.265A.75.75 0 015.32 9.636z" />
          </svg>
          <span>{event.participants} participants</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm text-gray-300">{event.time}</div>
        <div className="text-xs text-gray-500">{event.duration}</div>
      </div>
    </div>
  );

const CodeReviewItem = ({ review }: { review: CodeReview }) => {
  let avatarColor = 'bg-blue-600';
  if (review.avatar === 'R') avatarColor = 'bg-green-600';
  if (review.avatar === 'A') avatarColor = 'bg-purple-600';
  if (review.avatar === 'M') avatarColor = 'bg-red-600';
  
  return (
    <div className="border border-gray-700 rounded-md p-3 mb-2 hover:border-gray-600 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0 ${avatarColor}`}>
            {review.avatar}
          </div>
          <span className="text-sm font-medium text-gray-300">{review.author}</span>
        </div>
        <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-md">
          Review
        </button>
      </div>
      <div className="mt-2">
        <div className="text-sm text-blue-400 hover:underline cursor-pointer">
          {review.title}
        </div>
        <div className="text-xs text-gray-500 mt-0.5">
          {review.repository}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
        <span>{review.filesChanged} files changed</span>
        <span className="text-green-500">+{review.additions}</span>
        <span className="text-red-500">-{review.deletions}</span>
      </div>
    </div>
  );
};

// Main component
const SmartTaskHub = () => {
  const [activeTab, setActiveTab] = useState('todos');
  const [tasks, setTasks] = useState(mockAssignedTasks);
  const [taskView, setTaskView] = useState('all');
  
const handleCompleteTask = (taskId: number): void => {
    // In a real app, you would send this to a backend
    // For now, we'll just remove it from the list
    setTasks(tasks.filter(task => task.id !== taskId));
};
  
  const filteredTasks = tasks.filter(task => {
    if (taskView === 'all') return true;
    if (taskView === 'issues') return task.type === 'issue';
    if (taskView === 'pull_requests') return task.type === 'pull_request';
    if (taskView === 'high_priority') return task.priority === 'high';
    return true;
  });
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-200">Smart Task Hub</h2>
        <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1.5 text-sm font-medium">
          <svg className="h-4 w-4 mr-1.5" viewBox="0 0 16 16" fill="currentColor">
            <path d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z" />
          </svg>
          Add Task
        </button>
      </div>
      
      {/* Tab navigation */}
      <div className="border-b border-gray-700 pb-2">
        <div className="flex gap-2">
          <TabButton 
            active={activeTab === 'todos'} 
            onClick={() => setActiveTab('todos')}
          >
            My Tasks
          </TabButton>
          <TabButton 
            active={activeTab === 'activity'} 
            onClick={() => setActiveTab('activity')}
          >
            Team Activity
          </TabButton>
          <TabButton 
            active={activeTab === 'schedule'} 
            onClick={() => setActiveTab('schedule')}
          >
            Today's Schedule
          </TabButton>
        </div>
      </div>
      
      {/* Tasks Tab */}
      {activeTab === 'todos' && (
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="md:col-span-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <SectionTitle title="Assigned Tasks">
                  <span className="text-blue-400 text-xs font-medium">{filteredTasks.length} tasks</span>
                </SectionTitle>
              </div>
              <div>
                <select
                  className="bg-gray-800 border border-gray-700 rounded-md text-sm text-gray-300 py-1 px-2"
                  value={taskView}
                  onChange={(e) => setTaskView(e.target.value)}
                >
                  <option value="all">All Tasks</option>
                  <option value="issues">Issues Only</option>
                  <option value="pull_requests">Pull Requests Only</option>
                  <option value="high_priority">High Priority</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              {filteredTasks.length > 0 ? (
                filteredTasks.map(task => (
                  <TaskItem 
                    key={task.id} 
                    task={task} 
                    onComplete={handleCompleteTask}
                  />
                ))
              ) : (
                <div className="text-center py-8 bg-gray-800 border border-gray-700 rounded-md">
                  <svg className="h-12 w-12 mx-auto text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" />
                    <path fillRule="evenodd" d="M9 11a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zm-6.25 4c-.41 0-.75-.34-.75-.75v-.01c0-.42.34-.75.75-.75h6.5c.41 0 .75.34.75.75v.01c0 .41-.34.75-.75.75h-6.5z" />
                  </svg>
                  <p className="text-gray-500 mt-2">No tasks matching your filter</p>
                  <button 
                    className="mt-3 text-blue-400 text-sm hover:underline"
                    onClick={() => setTaskView('all')}
                  >
                    Show all tasks
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <Card>
              <SectionTitle title="Code Reviews Requested" />
              <div className="space-y-2">
                {mockCodeReviews.map(review => (
                  <CodeReviewItem key={review.id} review={review} />
                ))}
              </div>
            </Card>
            
            <Card>
              <SectionTitle title="Productivity Stats" />
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-gray-900 p-3 rounded-md">
                  <div className="text-2xl font-bold text-green-400">8</div>
                  <div className="text-xs text-gray-500">Tasks completed this week</div>
                </div>
                <div className="bg-gray-900 p-3 rounded-md">
                  <div className="text-2xl font-bold text-blue-400">16</div>
                  <div className="text-xs text-gray-500">PRs merged this month</div>
                </div>
                <div className="bg-gray-900 p-3 rounded-md">
                  <div className="text-2xl font-bold text-purple-400">82%</div>
                  <div className="text-xs text-gray-500">Tasks completed on time</div>
                </div>
                <div className="bg-gray-900 p-3 rounded-md">
                  <div className="text-2xl font-bold text-yellow-400">5</div>
                  <div className="text-xs text-gray-500">Active projects</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
      
      {/* Activity Tab */}
      {activeTab === 'activity' && (
        <div className="grid grid-cols-1 gap-4">
          <Card>
            <SectionTitle title="Recent Team Activity" />
            <div className="space-y-1">
              {mockTeamActivity.map(activity => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </div>
          </Card>
        </div>
      )}
      
      {/* Schedule Tab */}
      {activeTab === 'schedule' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <SectionTitle title="Today's Meetings" />
            <div className="space-y-1">
              {mockScheduledEvents.map(event => (
                <ScheduleItem key={event.id} event={event} />
              ))}
            </div>
          </Card>
          
          <Card>
            <SectionTitle title="Focus Time Recommendations" />
            <div className="p-4 bg-gray-900 rounded-md mb-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-300">Optimal Focus Time</div>
                <span className="text-xs bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full">
                  Recommended
                </span>
              </div>
              <div className="text-2xl font-bold text-blue-400">11:00 AM - 1:00 PM</div>
              <div className="text-xs text-gray-500 mt-0.5">Based on your meeting schedule and past productivity patterns</div>
            </div>
            
            <div className="text-sm text-gray-300 font-medium mb-2">Focus Mode Features</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                </svg>
                <span className="text-sm text-gray-300">Temporarily mute notifications</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                </svg>
                <span className="text-sm text-gray-300">Automatic status update</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                </svg>
                <span className="text-sm text-gray-300">Minimize distractions in UI</span>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 mt-3 text-sm font-medium">
              Enable Focus Mode
            </button>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SmartTaskHub;