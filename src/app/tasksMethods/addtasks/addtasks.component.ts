import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css']
})
export class AddtasksComponent implements OnInit {

  constructor(public TasksService:TasksService , private router:Router) { }

  ngOnInit(): void {
  }
  onAddTask(title,desc,date,category){
    this.TasksService.onAddTask(title.value,desc.value,date.value,category.value);
    this.router.navigate(['/']);
  }

}
