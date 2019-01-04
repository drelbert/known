import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContentInsight = {
    header: {
      //Should have a title key:value here but would not work, so went with strapline.
      title: 'Insights',
      strapline: ''
    },
    contentKnownIs : 'Known was developed to surface your internal ninjas, stars, and do-ers.  \n\nYou have hired smart people, Known will help you find that talent for your next project.',
    contentNumbers : 'Total Projects = 22',
    contentPeople : 'Number of People = 15'
  };

  public pageContentManage = {
    header: {
      title: 'Manage',
    }
  };

}
