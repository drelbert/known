import { Component, OnInit } from '@angular/core';

//Importing the service from known-data.service.ts
//Note the ../ which means go up a level in the folder structure
import { KnownDataService } from '../known-data.service';
//Using the new project.ts class file
import { Project } from '../project';


@Component({
  //This selector rolls over to the index.html file to change the tag on the page
  //When the home-list was created, this resulted in a new component, but not a new tag on the index page 
  //Note, that selector defines the tag on the page that the component will bind to
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
//Defining a class member inside this component code 
export class HomeListComponent implements OnInit {
  //Injecting the service into the component with the constructor
  //Note that injecting knownDataService of type KnownDataService
  constructor(private knownDataService: KnownDataService) { }
  //Creating a function to call the data service from the home-list.components.ts
  public projects: Project[];

  public project: Project;

  private getProjects(): void{
    this.knownDataService
      .getProjects()
        .then(foundProjects => this.projects = foundProjects);
  }


  //This is an Angular lifecycle hook to allow for listening to the process and take action at given times
  //Making the data call to the getProjects method
  ngOnInit() { 
    this.getProjects();
  }

}
