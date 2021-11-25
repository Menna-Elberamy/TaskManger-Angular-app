import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor(public tasksService:TasksService) {
  }

  ngOnInit(): void {
  }

}
