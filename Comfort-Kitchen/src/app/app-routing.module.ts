import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SaboutComponent} from './rest1/sabout/sabout.component'
import { LoginComponent } from './rest1/login/login.component';
import { MenuComponent } from './rest1/menu/menu.component';
import { ShomeComponent } from './rest1/shome/shome.component';
import { BooktableComponent } from './rest1/booktable/booktable.component';
import { SingupComponent } from './singup/singup.component';
import { AuthGuard } from './auth/auth.guard';
import { BmenuComponent } from './blueberry/bmenu/bmenu.component';
import { BhomeComponent } from './blueberry/bhome/bhome.component';
import { BaboutComponent } from './blueberry/babout/babout.component';
import { BbooktableComponent } from './blueberry/bbooktable/bbooktable.component';
import { BhhomeComponent } from './bhagyoday/bhhome/bhhome.component';
import { BhaboutComponent } from './bhagyoday/bhabout/bhabout.component';
import { BhmenuComponent } from './bhagyoday/bhmenu/bhmenu.component';
import { DhomeComponent } from './90 Degree/dhome/dhome.component';
import { DaboutComponent } from './90 Degree/dabout/dabout.component';
import { DmenuComponent } from './90 Degree/dmenu/dmenu.component';
import { NhomeComponent } from './navjeevan/nhome/nhome.component';
import { NaboutComponent } from './navjeevan/nabout/nabout.component';
import { NmenuComponent } from './navjeevan/nmenu/nmenu.component';
import { WhomeComponent } from './woodland/whome/whome.component';
import { WaboutComponent } from './woodland/wabout/wabout.component';
import { WmenuComponent } from './woodland/wmenu/wmenu.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'comfortkitchen',component:HomeComponent},
  {path:'home',component:ShomeComponent},
  {path:'sabout',component:SaboutComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'booktable',component:BooktableComponent,canActivate:[AuthGuard]},
  {path:'singup',component:SingupComponent},
  {path:'bmenu',component:BmenuComponent},
  {path:'bhome',component:BhomeComponent},
  {path:'babout',component:BaboutComponent},
  {path:'bbooktable',component:BbooktableComponent},
  {path:'bhhome',component:BhhomeComponent},
  {path:'bhabout',component:BhaboutComponent},
  {path:'bhmenu',component:BhmenuComponent},
  {path:'dhome',component:DhomeComponent},
  {path:'dabout',component:DaboutComponent},
  {path:'dmenu',component:DmenuComponent},
  {path:'nhome',component:NhomeComponent},
  {path:'nabout',component:NaboutComponent},
  {path:'nmenu',component:NmenuComponent},
  {path:'whome',component:WhomeComponent},
  {path:'wabout',component:WaboutComponent},
  {path:'wmenu',component:WmenuComponent},
  {path:'managerlogin',component:ManagerloginComponent},
  {path:'requests',component:RequestsComponent}

];

// canActivate:[AuthGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
