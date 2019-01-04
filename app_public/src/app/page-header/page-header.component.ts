//Any property of a class needs to be defined
//Need to define an input property 
//So import  Input into this component
//Then use it as a decorator when we define the content member
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  //Defining content as a class member that accepts an input of any type
  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

}
