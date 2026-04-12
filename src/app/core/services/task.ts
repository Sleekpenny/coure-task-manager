import { Injectable } from '@angular/core';
import { FullTask } from '../types/interfaces';
import { STORAGE_KEY } from '../enums/form.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskServices {
  private tasks$ = new BehaviorSubject<FullTask[]>(this.load());
 
  readonly tasks = this.tasks$.asObservable();
 
  private load(): FullTask[] {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    } catch {
      return [];
    }
  }
 
  private save(tasks: FullTask[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    this.tasks$.next(tasks);
  }
 
  getAll(): FullTask[] {
    return this.tasks$.getValue();
  }
 
  add(task: FullTask) {
    this.save([...this.getAll(), task]);
  }
 
  update(updated: FullTask) {
    this.save(this.getAll().map(t => t.id === updated.id ? updated : t));
  }
 
  delete(id: string) {
    this.save(this.getAll().filter(t => t.id !== id));
  }
  
}
