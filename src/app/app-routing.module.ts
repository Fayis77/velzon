import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './module/Pages/analytics/analytics.component';
import { DashboardComponent } from './module/Pages/dashboard/dashboard.component';

const routes: Routes = [

  // { path: 'analytics', component: AnalyticsComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
