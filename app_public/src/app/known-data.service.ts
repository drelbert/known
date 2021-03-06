import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Creating a data service with these steps and code 
//Observables return chunks of data 
//Promises return a complete set 
//RxJS converts observables to promises
//Need to set up service to make HTTP req and return promises
//Also need to inject the HTTP service into our service
//Adding in the HTTP service and RxJS promise support 

//import 'rxjs/add/operator/toPromise';
//Import the Project class into this service with 
import { Project } from './project';
import { User } from './user';
import { AuthResponse } from './authresponse';
import { BROWSER_STORAGE } from './storage';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class KnownDataService {
  //Injecting the service by defining the parameter name: type
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  //the URL call
  //private apiBaseUrl = 'mongodb://heroku_bf9tx0rq:4o7hgbeftgukc62i3hb94mp6gl@ds163402.mlab.com:63402/heroku_bf9tx0rq';
  
  //Oriningal code prior to adding environemnt config changes
  //private apiBaseUrl = 'http://localhost:3000/api';
  
  //New line for changes to the environments files
  private apiBaseUrl = environment.apiBaseUrl;

  //Below are data services which call the API.
  //Defining a method to get the projects for home-list and the details-page.
  //These services are imported into their respective pages.
  public getProjects(): Promise<Project[]> {
    const url: string = `${this.apiBaseUrl}/projects`;
    //Return the promise 
    return this.http
    .get(url)
    .toPromise()
    .then(response => response as Project[])
    .catch(this.handleError);
  }
  //Defining a data service method to get specific project details
  public getProjectById(projectId: string): Promise<Project> {
    const url: string = `${this.apiBaseUrl}/projects/${projectId}`;
    return this.http  
        .get(url)
        .toPromise()
        .then(response => response as Project) 
        .catch(this.handleError);
  }
    

  //Public member for adding a new project. 
  public postNewProject(formData: any): Promise<any> {
    const url: string = `${this.apiBaseUrl}/projects`;
    return this.http
        .post(url, formData)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
  //Three new methods for comm with API endpoints.  
  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
  
}