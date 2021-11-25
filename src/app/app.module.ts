import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { HeaderTaskComponent } from './header-task/header-task.component';
import { FooterTaskComponent } from './footer-task/footer-task.component';
import { MainTasksComponent } from './tasksCategory/main-tasks/main-tasks.component';
import { WorkTasksComponent } from './tasksCategory/work-tasks/work-tasks.component';
import { HomeTasksComponent } from './tasksCategory/home-tasks/home-tasks.component';
import { OtherTasksComponent } from './tasksCategory/other-tasks/other-tasks.component';
import { DonetasksComponent } from './tasksMethods/donetasks/donetasks.component';
import { DeletedtasksComponent } from './tasksMethods/deletedtasks/deletedtasks.component';
import { ProgressComponent } from './tasksMethods/progress/progress.component';
import { RouterModule } from '@angular/router';
import { AddtasksComponent } from './tasksMethods/addtasks/addtasks.component';
import { EditTasksComponent } from './tasksMethods/edit-tasks/edit-tasks.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    HeaderTaskComponent,
    FooterTaskComponent,
    MainTasksComponent,
    WorkTasksComponent,
    HomeTasksComponent,
    OtherTasksComponent,
    DonetasksComponent,
    DeletedtasksComponent,
    ProgressComponent,
    AddtasksComponent,
    EditTasksComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'' , component:MainTasksComponent},
      {path:'done' , component:DonetasksComponent},
      {path:'deleted' , component:DeletedtasksComponent},
      {path:'progress' , component:ProgressComponent},
      {path:'addtask' , component:AddtasksComponent},
      {path:'editTask/:id/:Category' , component:EditTasksComponent},
      {path:'**' , component:NotfoundComponent},

    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
