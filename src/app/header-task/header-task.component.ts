import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
@Component({
  selector: 'app-header-task',
  templateUrl: './header-task.component.html',
  styleUrls: ['./header-task.component.css']
})
export class HeaderTaskComponent implements OnInit {

  constructor(public tasksService:TasksService) { }

  ngOnInit(): void {
  }

}
