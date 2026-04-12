import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskHeaderComponent implements OnInit {
  @Input() activeFilter!: string;
  @Input() filters!: string[];

  @Output() setFilter = new EventEmitter<string>();
  @Output() openModal = new EventEmitter<void>();
  @Output() setPriority = new EventEmitter<string>();

  showPriorityDropdown = false;
  activePriority = 'All';

  constructor(private elRef: ElementRef) {}

  ngOnInit() {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.showPriorityDropdown = false;
    }
  }

  selectPriority(p: string): void {
    this.activePriority = p;
    this.showPriorityDropdown = false;
    this.setPriority.emit(p);
  }
}