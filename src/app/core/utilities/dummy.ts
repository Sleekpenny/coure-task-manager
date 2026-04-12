import { AdCard, cardProps, FullTask } from "../types/interfaces";

export const navItems = [
    {
      label: 'Dashboard',
      icon: 'grid-outline',
      activeIcon: 'grid-sharp',
      route: '/',
    },
    {
      label: 'Tasks',
      icon: 'checkmark-circle-outline',
      activeIcon: 'checkmark-circle-sharp',
      route: '/tasks',
    },
    {
      label: 'Settings',
      icon: 'cog-outline',
      activeIcon: 'cog-sharp',
      route: '',
    },
  ];

export const tasks:AdCard[] = [

  {
    id: 1,
    icon: 'logo-github', 
    title: '9TDesign - Mobile App Prototype',
    description: 'Ready prototype for testing user in this week.',
  },
  {
    id: 2,
    icon: 'logo-twitch',
    title: 'Horizon - Dashboard Design',
    description: 'Design a dashboard comfortable with Vision Pro',
  },
];
//   {
//     ticketId: "TKT-0042",
//     title: "Redesign onboarding splash screen",
//     status: 'In Progress',
//     date: 1142026,
//     description: "Update the onboarding flow to match the new brand guidelines...",
//     priority: "high",
//     commentCount: 7,
//     assignees: []
//   },
//   {
//     ticketId: "TKT-0042",
//     title: "Redesign onboarding splash screen",
//     description: "Update the onboarding flow to match the new brand guidelines...",
//     priority: "high",
//     commentCount: 7,
//     date: 0,
//     status: "Completed",
//     assignees: []
//   },
//   {
//     ticketId: "TKT-0042",
//     title: "Redesign onboarding splash screen",
//     description: "Update the onboarding flow to match the new brand guidelines...",
//     priority: "high",
//     commentCount: 7,
//     date: 0,
//     status: "",
//     assignees: []
//   },
//   {
//     ticketId: "TKT-0042",
//     title: "Redesign onboarding splash screen",
//     description: "Update the onboarding flow to match the new brand guidelines...",
//     priority: "high",
//     commentCount: 7,
//     date: 0,
//     status: "",
//     assignees: []
//   },
//   {
//     ticketId: "TKT-0042",
//     title: "Redesign onboarding splash screen",
//     description: "Update the onboarding flow to match the new brand guidelines...",
//     priority: "high",
//     commentCount: 7,
//     date: 0,
//     status: "",
//     assignees: []
//   },
//   {
//     ticketId: "TKT-0042",
//     title: "Redesign onboarding splash screen",
//     description: "Update the onboarding flow to match the new brand guidelines...",
//     priority: "high",
//     commentCount: 7,
//     date: 0,
//     status: "",
//     assignees: []
//   },
//   {
//     ticketId: "TKT-0042",
//     title: "Redesign onboarding splash screen",
//     description: "Update the onboarding flow to match the new brand guidelines...",
//     priority: "high",
//     commentCount: 7,
//     date: 0,
//     status: "",
//     assignees: []
//   },

// ]

// export const taskLists:FullTask[] =[
//   {
//     id: 1,
//     title: 'BrightBridge - Website Design',
//     avatarColor: 'linear-gradient(135deg,#6366f1 0%,#818cf8 100%)',
//     dueDate: 'Apr 15, 2026',
//     priority: 'High',
//     status: 'In Progress',
//     description: "",
//     date: 0
//   },
//   {
//     id: 2,
//     title: 'Github - Upload Dev Files & Images',
//     project: 'SaaS Platform',
//     projectColor: '#111827',
//     assignee: 'Alice Wong',
//     initials: 'AW',
//     avatarColor: 'linear-gradient(135deg,#10b981 0%,#34d399 100%)',
//     dueDate: 'Apr 12, 2026',
//     priority: 'Medium',
//     status: 'Not Started',
//     description: "",
//     date: 0
//   },
//   {
//     id: 3,
//     title: '9TDesign - Mobile App Prototype',
//     project: '9TDesign',
//     projectColor: '#f59e0b',
//     assignee: 'Marcus Lee',
//     initials: 'ML',
//     avatarColor: 'linear-gradient(135deg,#f59e0b 0%,#fbbf24 100%)',
//     dueDate: 'Apr 10, 2026',
//     priority: 'High',
//     status: 'Overdue',
//     description: "",
//     date: 0
//   },
//   {
//     id: 4,
//     title: 'Horizon - Dashboard Design',
//     project: 'Horizon',
//     projectColor: '#6366f1',
//     assignee: 'Sarah Chen',
//     initials: 'SC',
//     avatarColor: 'linear-gradient(135deg,#a78bfa 0%,#6366f1 100%)',
//     dueDate: 'Apr 20, 2026',
//     priority: 'Low',
//     status: 'Completed',
//     description: "",
//     date: 0
//   },
//   {
//     id: 5,
//     title: 'Mobile App UI Review',
//     project: 'AppReview',
//     projectColor: '#3b82f6',
//     assignee: 'David Park',
//     initials: 'DP',
//     avatarColor: 'linear-gradient(135deg,#3b82f6 0%,#60a5fa 100%)',
//     dueDate: 'Apr 18, 2026',
//     priority: 'Medium',
//     status: 'In Progress',
//     description: "",
//     date: 0
//   },
//   {
//     id: 6,
//     title: 'Branding Assets Compilation',
//     project: 'BrandKit',
//     projectColor: '#ec4899',
//     assignee: 'Nina Osei',
//     initials: 'NO',
//     avatarColor: 'linear-gradient(135deg,#ec4899 0%,#f472b6 100%)',
//     dueDate: 'Apr 25, 2026',
//     priority: 'Low',
//     status: 'Not Started',
//     description: "",
//     date: 0
//   },
// ];