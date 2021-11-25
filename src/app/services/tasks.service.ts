import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/tasks';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  homeTasks :Array<Tasks>=[];
  workTasks :Array<Tasks>=[];
  otherTasks :Array<Tasks>=[];
  deletedTasks :Array<Tasks>=[];
  doneTasks :Array<Tasks>=[];

  constructor() {
    let homeSavedTask=localStorage.getItem('homeTask');
    let workSavedTask=localStorage.getItem('workTask');
    let otherSavedTask=localStorage.getItem('otherTask');
    let doneSavedTask=localStorage.getItem('doneTask');
    let deletedSavedTask=localStorage.getItem('deletedTask');

    if(homeSavedTask || workSavedTask || otherSavedTask || doneSavedTask || deletedSavedTask){
      this.homeTasks=JSON.parse(homeSavedTask);
      this.workTasks=JSON.parse(workSavedTask);
      this.otherTasks=JSON.parse(otherSavedTask);
      this.doneTasks=JSON.parse(doneSavedTask);
      this.deletedTasks=JSON.parse(deletedSavedTask);
    }
    else{
      this.homeTasks=[];
      this.workTasks=[];
      this.otherTasks=[];
      this.doneTasks=[];
      this.deletedTasks=[];
    }
  }

  onDeleteTask(i,category){
    if(this.homeTasks.length===0 && this.workTasks.length===0){
      this.deletedTasks.push(this.otherTasks[i])
      this.otherTasks.splice(i,1)
    }
    else if(this.homeTasks.length===0 && this.otherTasks.length===0){
      this.deletedTasks.push(this.workTasks[i])
      this.workTasks.splice(i,1)
    }
    else if(this.workTasks.length===0 && this.otherTasks.length===0){
      this.deletedTasks.push(this.homeTasks[i])
      this.homeTasks.splice(i,1)
    }
    else if(this.homeTasks.length===0){
      if(category==this.workTasks[i].Category){
        this.deletedTasks.push(this.workTasks[i])
        this.workTasks.splice(i,1)
      }
      else if(category==this.otherTasks[i].Category){
        this.deletedTasks.push(this.otherTasks[i])
        this.otherTasks.splice(i,1)
      }
    }
    else if(this.otherTasks.length===0){
      if(category==this.homeTasks[i].Category){
        this.deletedTasks.push(this.homeTasks[i])
        this.homeTasks.splice(i,1)

      }
      else if(category==this.workTasks[i].Category){
        this.deletedTasks.push(this.workTasks[i])
        this.workTasks.splice(i,1)
      }
    }
    else if(this.workTasks.length===0){
      if(category==this.homeTasks[i].Category){
        this.deletedTasks.push(this.homeTasks[i])
        this.homeTasks.splice(i,1)

      }
      else{
        this.deletedTasks.push(this.otherTasks[i])
        this.otherTasks.splice(i,1)
      }
    }
    else {
      if(this.homeTasks[i].Category==category)
      {
        this.deletedTasks.push(this.homeTasks[i])
        this.homeTasks.splice(i,1)
      }
      else if(this.workTasks[i].Category==category)
      {
        this.deletedTasks.push(this.workTasks[i])
        this.workTasks.splice(i,1)
      }
      else if (this.otherTasks[i].Category==category)
      {
        this.deletedTasks.push(this.otherTasks[i])
        this.otherTasks.splice(i,1)
      }
    }
    this.saveAllTasks();

  }

  onDoneTask(i,category){
    if(this.homeTasks.length===0 && this.workTasks.length===0){
      this.doneTasks.push(this.otherTasks[i])
      this.otherTasks.splice(i,1)
    }
    else if(this.homeTasks.length===0 && this.otherTasks.length===0){
      this.doneTasks.push(this.workTasks[i])
      this.workTasks.splice(i,1)
    }
    else if(this.workTasks.length===0 && this.otherTasks.length===0){
      this.doneTasks.push(this.homeTasks[i])
      this.homeTasks.splice(i,1)
    }
    else if(this.homeTasks.length===0){
      if(category==this.workTasks[i].Category){
        this.doneTasks.push(this.workTasks[i])
        this.workTasks.splice(i,1)
      }
      else if(category==this.otherTasks[i].Category){
        this.doneTasks.push(this.otherTasks[i])
        this.otherTasks.splice(i,1)
      }
    }
    else if(this.otherTasks.length===0){
      if(category==this.homeTasks[i].Category){
        this.doneTasks.push(this.homeTasks[i])
        this.homeTasks.splice(i,1)

      }
      else if(category==this.workTasks[i].Category){
        this.doneTasks.push(this.workTasks[i])
        this.workTasks.splice(i,1)
      }
    }
    else if(this.workTasks.length===0){
      if(category==this.homeTasks[i].Category){
        this.doneTasks.push(this.homeTasks[i])
        this.homeTasks.splice(i,1)

      }
      else if(category==this.otherTasks[i].Category){
        this.doneTasks.push(this.otherTasks[i])
        this.otherTasks.splice(i,1)
      }
    }
    else {
      if(this.homeTasks[i].Category==category)
      {
        this.doneTasks.push(this.homeTasks[i])
        this.homeTasks.splice(i,1)
      }
      else if(this.workTasks[i].Category==category)
      {
        this.doneTasks.push(this.workTasks[i])
        this.workTasks.splice(i,1)
      }
      else if (this.otherTasks[i].Category==category)
      {
        this.doneTasks.push(this.otherTasks[i])
        this.otherTasks.splice(i,1)
      }

    }
    this.saveAllTasks();

  }
  onEditTask(i,data){
    this.saveAllTasks();
  }
  onAddTask(title,desc,date,category){
    if(category=='home'||category=='Home'){
      this.homeTasks.push({
        Title:title,
        Description:desc,
        Date:date,
        Category:category
      })
    }
    else if(category=='work'||category=='Work'){
      this.workTasks.push({
        Title:title,
        Description:desc,
        Date:date,
        Category:category
      })
    }
    else {
      this.otherTasks.push({
        Title:title,
        Description:desc,
        Date:date,
        Category:category
      })
    }
    this.saveAllTasks();
  }

  saveAllTasks(){
    localStorage.setItem('homeTask',JSON.stringify(this.homeTasks));
    localStorage.setItem('workTask',JSON.stringify(this.workTasks));
    localStorage.setItem('otherTask',JSON.stringify(this.otherTasks));
    localStorage.setItem('doneTask',JSON.stringify(this.doneTasks));
    localStorage.setItem('deletedTask',JSON.stringify(this.deletedTasks));
  }
}
