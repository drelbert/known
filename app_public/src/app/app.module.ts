//Here is the importing of all that is needed from Angular.
//This bundle are the Core imports.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//Adding/importing the Router Module for the SPA build.
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module';
//This bundle are the Component imports.
import { HomeListComponent } from './home-list/home-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



//Decorating the component = giving it the info it needs to run 
@NgModule({
  declarations: [
    HomeListComponent,
    FrameworkComponent,
    DashboardComponent,
    HomepageComponent,
    PageHeaderComponent,
    SidebarComponent,
    HtmlLineBreaksPipe,
    ProjectDetailsComponent,
    DetailsPageComponent,
    AddProjectComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule, 
    RouterModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
//Exporting the component as a class 
export class AppModule { }
