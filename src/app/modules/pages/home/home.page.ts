import { Component } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { InvoiceRow, MeetingItem, ProjectStat, TicketItem } from '@app/core';
import { NgClass } from '@angular/common';
import { PageContentComponent } from "@app/shared/components/layouts/page-content/page-content.component";
import { HeaderComponent } from "@app/shared/components/ui/header/header.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonIcon, IonContent, NgClass, PageContentComponent, HeaderComponent],
  standalone:true
})
export class HomePage {
  activeTab = 'This Month';
  tabs = ['Today', 'This Week', 'This Month', 'Reports'];
 
  tasks = [
    {
      id: 1,
      iconBg: '#fff0f0',
      title: 'BrightBridge - Website Design',
      desc: 'Design a framer website with modern templates',
      done: true,
    },
    {
      id: 2,
      iconBg: '#f0f0f0',
      title: 'Github - Upload Dev Files & Images',
      desc: 'Collaborate with Developers to handle the SaaS Project.',
      done: false,
    },
    {
      id: 3,
      iconBg: '#fff5e6',
      title: '9TDesign - Mobile App Prototype',
      desc: 'Ready prototype for testing user in this week.',
      done: false,
    },
    {
      id: 4,
      iconBg: '#f0f0ff',
      title: 'Horizon - Dashboard Design',
      desc: 'Design a dashboard comfortable with Vision Pro',
      done: false,
    },
  ];
 
  projectStats: ProjectStat[] = [
    { label: 'In Progress', count: 14, color: '#3b82f6' },
    { label: 'Completed', count: 32, color: '#10b981' },
    { label: 'Not Started', count: 54, color: '#e5e7eb' },
  ];
 
  invoiceRows: InvoiceRow[] = [
    { label: 'Overdue', count: 5, amount: 'USD 183,00$', percent: 85, barClass: 'invoice-row__bar--overdue' },
    { label: 'Net Paid', count: 5, amount: 'USD 183,00$', percent: 65, barClass: 'invoice-row__bar--not-paid' },
    { label: 'Partial', count: 5, amount: 'USD 183,00$', percent: 55, barClass: 'invoice-row__bar--partial' },
    { label: 'Fully Paid', count: 5, amount: 'USD 183,00$', percent: 90, barClass: 'invoice-row__bar--paid' },
    { label: 'Draft', count: 5, amount: 'USD 183,00$', percent: 30, barClass: 'invoice-row__bar--draft' },
  ];
 
  meetings: MeetingItem[] = [
    {
      time: '6:45 PM',
      label: 'My Meetings',
      name: 'App Project',
      platform: 'Meet',
      platformClass: 'meeting-item__platform--meet',
    },
    {
      time: '6:45 PM',
      label: 'My Meetings',
      name: 'User Research',
      platform: 'Zoom',
      platformClass: 'meeting-item__platform--zoom',
    },
  ];
 
  tickets: TicketItem[] = [
    {
      initials: 'JM',
      avatarGrad: 'linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)',
      name: 'Jacob Martinez',
      desc: 'I need 3 more new features on the mobile app design.',
    },
    {
      initials: 'LB',
      avatarGrad: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      name: 'Luke Bell',
      desc: 'I need 3 more new features on the mobile app design.',
    },
    {
      initials: 'CM',
      avatarGrad: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      name: 'Connor Mitchell',
      desc: 'I need 3 more new features on the mobile app design.',
    },
  ];
  constructor() {}

  ngAfterViewInit(): void {
    this.renderDonutChart();
    this.renderSparklineChart();
  }
 
  toggleTask(task: any): void {
    task.done = !task.done;
  }
 
  setTab(tab: string): void {
    this.activeTab = tab;
  }

  private renderDonutChart(): void {
    const canvas = document.getElementById('donutChart') as HTMLCanvasElement;
    if (!canvas) return;
 
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
 
    const dpr = window.devicePixelRatio || 1;
    const size = 140;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);
 
    const cx = size / 2;
    const cy = size / 2;
    const r = 52;
    const iR = 36;
    const gap = 0.04;
 
    const segments = [
      { value: 14, color: '#3b82f6' },
      { value: 32, color: '#10b981' },
      { value: 54, color: '#e5e7eb' },
    ];
    const total = segments.reduce((s, seg) => s + seg.value, 0);
 
    let start = -Math.PI / 2;
    for (const seg of segments) {
      const sweep = (seg.value / total) * (2 * Math.PI) - gap;
      ctx.beginPath();
      ctx.arc(cx, cy, r, start + gap / 2, start + sweep + gap / 2);
      ctx.arc(cx, cy, iR, start + sweep + gap / 2, start + gap / 2, true);
      ctx.closePath();
      ctx.fillStyle = seg.color;
      ctx.fill();
      start += sweep + gap;
    }
  }
 
  /** Render sparkline using Canvas */
  private renderSparklineChart(): void {
    const canvas = document.getElementById('sparklineChart') as HTMLCanvasElement;
    if (!canvas) return;
 
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
 
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.offsetWidth || 200;
    const h = 80;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);
 
    const incomeData = [18, 22, 19, 26, 24, 28, 25, 30, 24, 28, 26, 30];
    const expenseData = [12, 14, 11, 16, 13, 18, 14, 20, 15, 16, 13, 17];
 
    const drawLine = (data: number[], color: string, fill: string) => {
      const max = 35;
      const pts = data.map((v, i) => ({
        x: (i / (data.length - 1)) * w,
        y: h - (v / max) * h,
      }));
 
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const cpX = (pts[i - 1].x + pts[i].x) / 2;
        ctx.bezierCurveTo(cpX, pts[i - 1].y, cpX, pts[i].y, pts[i].x, pts[i].y);
      }
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, fill);
      grad.addColorStop(1, 'transparent');
 
      ctx.lineTo(pts[pts.length - 1].x, h);
      ctx.lineTo(pts[0].x, h);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
 
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const cpX = (pts[i - 1].x + pts[i].x) / 2;
        ctx.bezierCurveTo(cpX, pts[i - 1].y, cpX, pts[i].y, pts[i].x, pts[i].y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
    };
 
    drawLine(incomeData, '#6366f1', 'rgba(99,102,241,0.12)');
    drawLine(expenseData, '#f59e0b', 'rgba(245,158,11,0.08)');
  }
}
