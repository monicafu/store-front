import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { NavBarComponent } from './nav-bar/nav-bar.component';
=======
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
>>>>>>> dd132e71f7fbef6ee207ee83f0884dd6a4744a6e


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    routing,
    HttpModule,
    HttpClientModule,
=======
    routing,
    MatButtonModule,
    MatCheckboxModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule
>>>>>>> dd132e71f7fbef6ee207ee83f0884dd6a4744a6e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
