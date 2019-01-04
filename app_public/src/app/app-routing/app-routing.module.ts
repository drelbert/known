import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from '../homepage/homepage.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetailsPageComponent} from '../details-page/details-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'project/:projectId',
    component: DetailsPageComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
