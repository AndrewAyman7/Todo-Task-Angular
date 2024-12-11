import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  title: string = 'ToDo App';

  tasks: Task[] = [];

  inputTask: string = "";
  incrementalId: number = 1;
  
  addTask(): void{
    if(this.inputTask !== ""){ //.trim() bs
      this.tasks.push( {id: this.incrementalId++ , title: this.inputTask} );
      this.inputTask="";
    }
    console.log(this.tasks)
  }

  removeTask(id: number): void{
    const index = this.tasks.findIndex(item => item.id === id);
    this.tasks.splice(index, 1); // Remove the item from the array
  }

  updateTask(id: number): void{
    const item = this.tasks.find(i => i.id === id);

    if (item) {
      const newTitle = prompt('Enter The Updated Task', item.title);
      if (newTitle !== null && newTitle.trim()) {
        item.title = newTitle // Update the title
      }
      else {
        alert('You Should insert the new value');
      }
    }
}


}
