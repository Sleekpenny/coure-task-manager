import { AdCard, cardProps } from "../types/interfaces";

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
      route: '/settings',
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

export const  userTasks: cardProps[]  =[
  {
    ticketId: "TKT-0042",
    title: "Redesign onboarding splash screen",
    description: "Update the onboarding flow to match the new brand guidelines...",
    priority: "high",
    commentCount: 7,
    assignees: [
      { name: 'Ada James' }, 
      { name: 'Ben King', imageUrl: 'https://...' }]
  },
  {
    ticketId: "TKT-0042",
    title: "Redesign onboarding splash screen",
    description: "Update the onboarding flow to match the new brand guidelines...",
    priority: "high",
    commentCount: 7,
    assignees: [
      { name: 'Ada James' }, 
      { name: 'Ben King', imageUrl: 'https://...' }]
  },
  {
    ticketId: "TKT-0042",
    title: "Redesign onboarding splash screen",
    description: "Update the onboarding flow to match the new brand guidelines...",
    priority: "high",
    commentCount: 7,
    assignees: [
      { name: 'Ada James' }, 
      { name: 'Ben King', imageUrl: 'https://...' }]
  },
  {
    ticketId: "TKT-0042",
    title: "Redesign onboarding splash screen",
    description: "Update the onboarding flow to match the new brand guidelines...",
    priority: "high",
    commentCount: 7,
    assignees: [
      { name: 'Ada James' }, 
      { name: 'Ben King', imageUrl: 'https://...' }]
  },
  {
    ticketId: "TKT-0042",
    title: "Redesign onboarding splash screen",
    description: "Update the onboarding flow to match the new brand guidelines...",
    priority: "high",
    commentCount: 7,
    assignees: [
      { name: 'Ada James' }, 
      { name: 'Ben King', imageUrl: 'https://...' }]
  },
  {
    ticketId: "TKT-0042",
    title: "Redesign onboarding splash screen",
    description: "Update the onboarding flow to match the new brand guidelines...",
    priority: "high",
    commentCount: 7,
    assignees: [
      { name: 'Ada James' }, 
      { name: 'Ben King', imageUrl: 'https://...' }]
  },
  {
    ticketId: "TKT-0042",
    title: "Redesign onboarding splash screen",
    description: "Update the onboarding flow to match the new brand guidelines...",
    priority: "high",
    commentCount: 7,
    assignees: [
      { name: 'Ada James' }, 
      { name: 'Ben King', imageUrl: 'https://...' }]
  },

]