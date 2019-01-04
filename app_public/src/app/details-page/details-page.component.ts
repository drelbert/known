import { Component, OnInit } from '@angular/core';
//Importing functionality from the Angular router to get value of current route and the URL parameters as an observable 
import { ActivatedRoute, ParamMap}  from '@angular/router';
import { KnownDataService } from '../known-data.service';
//Using the new project.ts class file
import { Project } from '../project';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  //Note = lowercase is the local instance and the upper case is the class type definition
  constructor(
    private knownDataService: KnownDataService, 
    //Making the activated route avail to the component by defining a private member
    private route: ActivatedRoute
    ) { }

//Exposing the project details through a new class member = detailsOfProject
detailsOfProject: Project;

  ngOnInit(): void { 
    //Two chained observables 
    //The paramMap being subscribed to by the switchMap below
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('projectId');
          return this.knownDataService.getProjectById(id);
        })
      )
      .subscribe((detailsOfProject: Project) => {
        this.detailsOfProject = detailsOfProject;
        this.pageContent.header.title = detailsOfProject.title;
        this.pageContent.sidebar = `The description of the ${detailsOfProject.title} project is "${detailsOfProject.description}"`;
    });
  }

  public pageContent = {
    header: {
      title: '',
      strapline: ''
    },
    sidebar: ''
  };

}
