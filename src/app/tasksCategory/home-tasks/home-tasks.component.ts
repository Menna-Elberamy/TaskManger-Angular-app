import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrls: ['./home-tasks.component.css']
})
export class HomeTasksComponent implements OnInit {


  constructor(public TasksService:TasksService) {
   }

  ngOnInit(): void {
  }

  onDeleteTask(i,category){
    this.TasksService.onDeleteTask(i,category);
    console.log(category)
    console.log(this.TasksService.deletedTasks)
  }
  onDoneTask(i,category){
    this.TasksService.onDoneTask(i,category);
    console.log(category)
    console.log(this.TasksService.doneTasks)
  }

}
