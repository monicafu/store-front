import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MyAccountComponent} from './components/my-account/my-account.component';
import {MyprofileComponent} from "./components/myprofile/myprofile.component";

const appRoutes: Routes = [
	{
		path :'',
		redirectTo:'/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
  {
    path: 'myAccount',
    component: MyAccountComponent
  },
  {
    path:'myProfile',
    component:MyprofileComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
