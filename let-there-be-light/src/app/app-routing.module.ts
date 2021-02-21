import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeePageComponent } from './coffee-page/coffee-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'', 
  component: HomePageComponent},

    {
      path:'contact-us', 
      data: {title: ''},
      component: ContactUsComponent
    },
    {
      path:'activities', 
      data: {title:''}, 
      //loadChildren: () => import ('./activities/activities.module').then((m) => m.ActivitiesModule)
      component: CoffeePageComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
