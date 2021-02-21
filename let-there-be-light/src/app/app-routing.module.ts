import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
const routes: Routes = [
    {
      path:'activities', 
      data: {title:''}, 
      //loadChildren: () => import ('./activities/activities.module').then((m) => m.ActivitiesModule)
      component: ActivitiesComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
