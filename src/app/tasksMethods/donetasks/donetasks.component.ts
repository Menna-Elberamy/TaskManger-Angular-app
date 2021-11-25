import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-donetasks',
  templateUrl: './donetasks.component.html',
  styleUrls: ['./donetasks.component.css']
})
export class DonetasksComponent implements OnInit {

  constructor(public TasksService:TasksService) { }


  ngOnInit(): void {
  }

}
