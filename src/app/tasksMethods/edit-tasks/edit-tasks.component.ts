import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {
    taskId;
    taskCategory;
    taskDetail;
  constructor(public TasksService:TasksService , private route:ActivatedRoute , private router:Router)  {
    this.getTaskIdAndCategory();

  }

  ngOnInit(): void {
  }
getTaskIdAndCategory(){
  this.taskId=this.route.snapshot.paramMap.get('id');
    this.taskCategory=this.route.snapshot.paramMap.get('Category');
    console.log(this.taskId , this.taskCategory);

    if(this.TasksService.homeTasks.length==0 && this.TasksService.workTasks.length==0){
      this.taskDetail=this.TasksService.otherTasks[this.taskId];
      console.log(this.taskDetail);
    }
    else if(this.TasksService.homeTasks.length==0 && this.TasksService.otherTasks.length==0){
      this.taskDetail=this.TasksService.workTasks[this.taskId];
      console.log(this.taskDetail);
    }
    else if(this.TasksService.workTasks.length==0 && this.TasksService.otherTasks.length==0){
      this.taskDetail=this.TasksService.homeTasks[this.taskId];
      console.log(this.taskDetail);
    }
    else if(this.TasksService.homeTasks.length==0){
      if(this.taskCategory==this.TasksService.workTasks.includes(this.taskCategory)){
        this.taskDetail=this.TasksService.workTasks[this.taskId];
        console.log(this.taskDetail);
      }
      else {
        this.taskDetail=this.TasksService.otherTasks[this.taskId];
        console.log(this.taskDetail);
      }
    }
    else if(this.TasksService.otherTasks.length==0){
      if(this.taskCategory==this.TasksService.homeTasks.includes(this.taskCategory)){
        this.taskDetail=this.TasksService.homeTasks[this.taskId];
        console.log(this.taskDetail);
      }
      else{
        this.taskDetail=this.TasksService.workTasks[this.taskId];
        console.log(this.taskDetail);
      }
    }
    else if(this.TasksService.workTasks.length==0){
      if(this.taskCategory==this.TasksService.homeTasks.includes(this.taskCategory)){
        this.taskDetail=this.TasksService.homeTasks[this.taskId];
        console.log(this.taskDetail);
      }
      else {
        this.taskDetail=this.TasksService.otherTasks[this.taskId];
        console.log(this.taskDetail);
      }
    }
    else
    {
      if(this.taskCategory==this.TasksService.homeTasks[this.taskId].Category)
      {
        this.taskDetail=this.TasksService.homeTasks[this.taskId];
        console.log(this.taskDetail);
      }
      else if(this.taskCategory==this.TasksService.workTasks[this.taskId].Category)
      {
        this.taskDetail=this.TasksService.workTasks[this.taskId];
        console.log(this.taskDetail);
      }
      else if (this.taskCategory==this.TasksService.otherTasks[this.taskId].Category)
      {
        this.taskDetail=this.TasksService.otherTasks[this.taskId];
        console.log(this.taskDetail);
      }
    }
}

onDeleteTask(){
  this.TasksService.onDeleteTask(this.taskId,this.taskCategory);
  this.router.navigate(['/']);

}
onEditTask(){
  if(this.taskDetail.Category!=this.taskCategory){
    if(this.taskDetail.Category=="home"){
      if(this.taskCategory=="work"){
        this.TasksService.workTasks.splice(this.taskId,1);
      this.TasksService.onAddTask(
        this.taskDetail.Title,
        this.taskDetail.Description,
        this.taskDetail.Date,
        this.taskDetail.Category,
      )
      this.TasksService.onEditTask(this.taskId,this.taskDetail);
      this.router.navigate(['']);
      console.log(this.taskDetail.Category , this.taskCategory)
      }
      else{
        this.TasksService.otherTasks.splice(this.taskId,1);
      this.TasksService.onAddTask(
        this.taskDetail.Title,
        this.taskDetail.Description,
        this.taskDetail.Date,
        this.taskDetail.Category,
      )
      this.TasksService.onEditTask(this.taskId,this.taskDetail);
      this.router.navigate(['']);
      console.log(this.taskDetail.Category , this.taskCategory)
      }

    }
    else if(this.taskDetail.Category=="work"){
      if(this.taskCategory=="home"){
        this.TasksService.homeTasks.splice(this.taskId,1);
      this.TasksService.onAddTask(
        this.taskDetail.Title,
        this.taskDetail.Description,
        this.taskDetail.Date,
        this.taskDetail.Category,
      )
      this.TasksService.onEditTask(this.taskId,this.taskDetail);
      this.router.navigate(['']);
      console.log(this.taskDetail.Category , this.taskCategory)
      }
      else{
        this.TasksService.otherTasks.splice(this.taskId,1);
      this.TasksService.onAddTask(
        this.taskDetail.Title,
        this.taskDetail.Description,
        this.taskDetail.Date,
        this.taskDetail.Category,
      )
      this.TasksService.onEditTask(this.taskId,this.taskDetail);
      this.router.navigate(['']);
      console.log(this.taskDetail.Category , this.taskCategory)
      }

    }
    else{
      if(this.taskCategory=="home"){
        this.TasksService.homeTasks.splice(this.taskId,1);
      this.TasksService.onAddTask(
        this.taskDetail.Title,
        this.taskDetail.Description,
        this.taskDetail.Date,
        this.taskDetail.Category,
      )
      this.TasksService.onEditTask(this.taskId,this.taskDetail);
      this.router.navigate(['']);
      console.log(this.taskDetail.Category , this.taskCategory)
      }
      else{
        this.TasksService.workTasks.splice(this.taskId,1);
      this.TasksService.onAddTask(
        this.taskDetail.Title,
        this.taskDetail.Description,
        this.taskDetail.Date,
        this.taskDetail.Category,
      )
      this.TasksService.onEditTask(this.taskId,this.taskDetail);
      this.router.navigate(['']);
      console.log(this.taskDetail.Category , this.taskCategory)
      }

    }

  }
  else{
    this.TasksService.onEditTask(this.taskId,this.taskDetail);
    this.router.navigate([""]);

  }

}

}
