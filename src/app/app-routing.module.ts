import { FormationPassedComponent } from './formation-passed/formation-passed.component';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'profile',
    component: ProfilComponent,
  },
  {
    path: 'liste-formateur',
    component: ListeFormateursComponent,
  },
  {
    path: 'liste-formation',
    component: ListeFormationComponent,
  },
  {
    path: 'formation-passed',
    component: FormationPassedComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(
      [{ path: 'liste-formation', component: ListeFormationComponent }],
      { onSameUrlNavigation: 'reload' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
