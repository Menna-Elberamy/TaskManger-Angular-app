import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-deletedtasks',
  templateUrl: './deletedtasks.component.html',
  styleUrls: ['./deletedtasks.component.css']
})
export class DeletedtasksComponent implements OnInit {

  constructor(public TasksService:TasksService) { }

  ngOnInit(): void {
  }

}
