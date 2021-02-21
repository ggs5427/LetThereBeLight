import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeePageComponent } from './coffee-page/coffee-page.component';

const activitiesRoutes: Routes = [
    {
        path: '',
        data: {title:'Activities'},
        children: [ {path:'Coffee', data:{title: 'Coffee'}, component: CoffeePageComponent} ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(activitiesRoutes)],
  exports: [RouterModule],
})
export class ActivitiesRoutingModule {}
