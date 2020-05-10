import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import {FooterComponent} from './footer/footer.component';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './home/home.component';
import { SaboutComponent } from './rest1/sabout/sabout.component';
import { LoginComponent } from './rest1/login/login.component';
import { MenuComponent } from './rest1/menu/menu.component';
import { ShomeComponent } from './rest1/shome/shome.component';
import { BooktableComponent } from './rest1/booktable/booktable.component';
import { SingupComponent } from './singup/singup.component';
import { SfooterComponent } from './rest1/sfooter/sfooter.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RestownerComponent } from './restowner/restowner.component';
import { BhomeComponent } from './blueberry/bhome/bhome.component';
import { BmenuComponent } from './blueberry/bmenu/bmenu.component';
import { BbooktableComponent } from './blueberry/bbooktable/bbooktable.component';
import { BaboutComponent } from './blueberry/babout/babout.component';
import { DhomeComponent } from './90 Degree/dhome/dhome.component';
import { DmenuComponent } from './90 Degree/dmenu/dmenu.component';
import { DaboutComponent } from './90 Degree/dabout/dabout.component';
import { DbooktableComponent } from './90 Degree/dbooktable/dbooktable.component';
import { BhhomeComponent } from './bhagyoday/bhhome/bhhome.component';
import { BhmenuComponent } from './bhagyoday/bhmenu/bhmenu.component';
import { BhaboutComponent } from './bhagyoday/bhabout/bhabout.component';
import { BhbootableComponent } from './bhagyoday/bhbootable/bhbootable.component';
import { NhomeComponent } from './navjeevan/nhome/nhome.component';
import { NmenuComponent } from './navjeevan/nmenu/nmenu.component';
import { NaboutComponent } from './navjeevan/nabout/nabout.component';
import { NbookComponent } from './navjeevan/nbook/nbook.component';
import { WbookComponent } from './woodland/wbook/wbook.component';
import { WaboutComponent } from './woodland/wabout/wabout.component';
import { WmenuComponent } from './woodland/wmenu/wmenu.component';
import { WhomeComponent } from './woodland/whome/whome.component';
import { DnavbarComponent } from './90 Degree/dnavbar/dnavbar.component';
import { BhbnavbarComponent } from './bhagyoday/bhbnavbar/bhbnavbar.component';
import { BnavbarComponent } from './blueberry/bnavbar/bnavbar.component';
import { NnavbarComponent } from './navjeevan/nnavbar/nnavbar.component';
import { WnavbarComponent } from './woodland/wnavbar/wnavbar.component';
import { AboutComponent } from './about/about.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { RequestsComponent } from './requests/requests.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    HotelComponent,
    HomeComponent,
    SaboutComponent,
    LoginComponent,
    MenuComponent,
    ShomeComponent,
    BooktableComponent,
    SingupComponent,
    SfooterComponent,
    RestownerComponent,
    BhomeComponent,
    BmenuComponent,
    BbooktableComponent,
    BaboutComponent,
    DhomeComponent,
    DmenuComponent,
    DaboutComponent,
    DbooktableComponent,
    BhhomeComponent,
    BhmenuComponent,
    BhaboutComponent,
    BhbootableComponent,
    NhomeComponent,
    NmenuComponent,
    NaboutComponent,
    NbookComponent,
    WbookComponent,
    WaboutComponent,
    WmenuComponent,
    WhomeComponent,
    DnavbarComponent,
    BhbnavbarComponent,
    BnavbarComponent,
    NnavbarComponent,
    WnavbarComponent,
    AboutComponent,
    ManagerloginComponent,
    RequestsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
