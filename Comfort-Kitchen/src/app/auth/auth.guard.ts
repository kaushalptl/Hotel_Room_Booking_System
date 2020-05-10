import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {MyserviceService} from 'src/app/myservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private myservice : MyserviceService,private router : Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.myservice.LoggedIn){
        alert("Please Login First");
        //  this.router.navigateByUrl('/login');
         this.myservice.deleteToken();
         return false;
      }
    return true;
  }
  
}
