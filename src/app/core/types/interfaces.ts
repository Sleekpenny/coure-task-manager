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
    export interface FullTask {
    id: string;
    title: string;
    description:string;
    date: Date;
    priority: string;
    status: string;
  }

 export interface cardProps {
    ticketId:string;
    title:string;
    description:string;
    priority:string;
    commentCount:number;
    date: Date;
    status: string;
  }

  export interface AdCard {
  id:number;
  title: string;
  description: string;
  icon?:string
}

  export type Priority = 'low' | 'medium' | 'high';