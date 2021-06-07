import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { OperacionesComponent } from './shared/components/operaciones/operaciones.component';
import { TransferenciaComponent } from './shared/components/transferencia/transferencia.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'transferencia',
    component:TransferenciaComponent,
    pathMatch:'full'
  },
  {
    path:'operacion',
    component:OperacionesComponent,
    pathMatch:'full'
  },
  // {
  //   path:'mujeres',
  //   component:HomemeComponent,
  //   pathMatch:'full'
  // },
  {
    path:'404',
    component:NotFoundComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
