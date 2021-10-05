import { Routes } from "@angular/router";
import { CarreiraComponent } from "./pags/carreira/carreira.component";
import { FormacaoComponent } from "./pags/formacao/formacao.component";
import { HobbiesComponent } from "./pags/hobbies/hobbies.component";
import { HomeComponent } from "./pags/home/home.component";

export const AppRoutes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'carreira',
    component: CarreiraComponent
  },
  {
    path: 'formacao',
    component: FormacaoComponent
  },
  {
    path: 'hobbies',
    component: HobbiesComponent
  }
]