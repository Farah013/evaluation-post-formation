import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './profil/profil.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { SearchCompComponent } from './search-comp/search-comp.component';
import { FormationCardComponent } from './formation-card/formation-card.component';
import { AjoutFormationComponent } from './ajout-formation/ajout-formation.component';
import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { ListeParticipantsComponent } from './liste-participants/liste-participants.component';
import { ObjectifsPedagogiquesComponent } from './objectifs-pedagogiques/objectifs-pedagogiques.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidenavBarComponent,
    ProfilComponent,
    ListeFormationComponent,
    SearchCompComponent,
    FormationCardComponent,
    AjoutFormationComponent,
    DetailsFormationComponent,
    ListeParticipantsComponent,
    ObjectifsPedagogiquesComponent,
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
