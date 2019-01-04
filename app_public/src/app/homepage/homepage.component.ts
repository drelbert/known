import { Component, OnInit } from '@angular/core';

//This is a parent component to page-header
//See below the new member
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //Setting the data for the homepage instance of page header within the homepage component
  //Here is a new member with the header nested 
  //The class member is a simple JavaScript object
  public pageContent = {
    header: {
      title: 'known current projects',
      strapline: 'Find out who is "known" in your organization.',
      bottomline: 'Catchy tagline goes here!'
    },
    //Updating this pageContent member for the sidebar data.
    sidebar : 'Here is the work all your ninjas are doing.'
  };

}
