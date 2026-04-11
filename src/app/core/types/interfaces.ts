export interface NavItem {
    label: string;
    icon: string;
    activeIcon: string;
    route: string;
  }
  
  export interface Task {
    id: number;
    iconBg: string;
    title: string;
    desc: string;
    done: boolean;
  }
   
  export interface ProjectStat {
    label: string;
    count: number;
    color: string;
  }
   
  export interface InvoiceRow {
    label: string;
    count: number;
    amount: string;
    percent: number;
    barClass: string;
  }
   
  export interface MeetingItem {
    time: string;
    label: string;
    name: string;
    platform: string;
    platformClass: string;
  }
   
  export interface TicketItem {
    initials: string;
    avatarGrad: string;
    name: string;
    desc: string;
  }

  export interface FullTask {
    id: number;
    title: string;
    project: string;
    projectColor: string;
    assignee: string;
    initials: string;
    avatarColor: string;
    dueDate: string;
    priority: 'High' | 'Medium' | 'Low';
    status: 'In Progress' | 'Completed' | 'Not Started' | 'Overdue';
  }

  export interface SettingsGroup {
    title: string;
    items: SettingsItemDef[];
  }
   
  export interface SettingsItemDef {
    icon: string;
    title: string;
    desc: string;
    type: 'chevron' | 'toggle';
    toggled?: boolean;
  }

  export interface TaskCardUser {
    name: string;
    imageUrl?: string;
  }

  export interface cardProps {
    ticketId:string;
    title:string;
    description:string;
    priority:string;
    commentCount:number
    assignees: TaskCardUser[]
  }
  
  export type Priority = 'low' | 'medium' | 'high';