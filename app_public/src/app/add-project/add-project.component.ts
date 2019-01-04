import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project';
import { KnownDataService } from '../known-data.service';



@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {


@Input() project: Project;

   
  //Defining a new public member with project properties : default value for project. 
   public newProject = {
     title: '',
     description: '',
     lead: '',
     teamMembers: '',
     goal: '',
     outcomes: '',
     protoDue: '',
     completion: '',
   };

    
   //Setting form visibility.
   public formVisible: boolean = false;
   //Adding validation.
   //Given submitted data, remove error messages
   //Then check for each data item is truthy.
   //If true, it will get logged into the console.
   //Declaring the form error var
   public formError: string; 
   
  
   constructor(private knownDataService: KnownDataService) { }

   ngOnInit() {
   }
   //Private member to check that all form fields have content
   private formIsValid(): boolean {
      if (this.newProject.title && this.newProject.description && this.newProject.lead && this.newProject.teamMembers && this.newProject.completion) {
          return true;
         } else {
          return false;
         }
   }
   
   private resetAndHideNewProjectForm(): void {
     this.formVisible = false;
     this.newProject.title;
     this.newProject.description;
     this.newProject.lead; 
     this.newProject.teamMembers;
     this.newProject.goal;
     this.newProject.outcomes;
     this.newProject.protoDue;
     this.newProject.completion;
   }
      
   public postNewProject(): void {
      this.formError = '';
      if (this.formIsValid()) {
          console.log(this.newProject);
          this.knownDataService.postNewProject(this.newProject).then(project => {
            console.log('Project added', project);
            this.resetAndHideNewProjectForm();
          })
      } else { 
        this.formError = 'Please include data in all fields.';
      }
   }
}
