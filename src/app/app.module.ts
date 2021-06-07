import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './shared/services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/api.service';
import { TransferenciaComponent } from './shared/components/transferencia/transferencia.component';
import { OperacionesComponent } from './shared/components/operaciones/operaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    LoginComponent,
    TransferenciaComponent,
    OperacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LoginService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
