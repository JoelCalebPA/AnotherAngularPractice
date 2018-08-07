import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ToasterModule } from 'angular2-toaster';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToasterModule.forRoot(),
    SlimLoadingBarModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
