import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import 'hammerjs';

//third party package
import { DataTableModule} from "angular2-datatable";
import { DataFilterPipe} from "./components/book-list/data-filter.pipe";

import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {PaymentService} from './services/payment.service';
import {ShippingService} from "./services/shipping.service";
import {BookService} from "./services/book.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { BookListComponent } from './components/book-list/book-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyprofileComponent,
    BookListComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    routing,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    DataTableModule
  ],
  providers: [
    LoginService,
    UserService,
    PaymentService,
    ShippingService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
