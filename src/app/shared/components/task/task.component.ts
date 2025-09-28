import { Component, output, signal } from '@angular/core';
import { ITask } from '../../../core/interfaces';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
})
export class TaskComponent {

  text_field = signal("");
  errorMessage = signal("");
  outputTask = output<ITask>();

  resetTask(){
    this.text_field.set('');
    this.errorMessage.set("");
  }
   addTask(){
  
      if(!this.text_field().trim()){
        this.errorMessage.set("Task name is required.");
        return;
      }
  
      const newTask: ITask = {
        id: Math.floor(Math.random() * 10000),
        name: this.text_field()
      };
      this.outputTask.emit(newTask);
      this.resetTask();
    }
 }
