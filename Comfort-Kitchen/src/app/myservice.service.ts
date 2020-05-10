import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,RouterModule} from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public LoggedIn : boolean = JSON.parse(sessionStorage.getItem('LoggedIn'))=="true" || false; 

  public authListner = new Subject<boolean>();
  getAuthListner(){
    return this.authListner.asObservable();
  }
  
  constructor(private http: HttpClient,private router:Router) { }
  
  submitRegister(data){
    console.log("you are in Registration Service ");
    this.http.post('http://localhost:3000/register',data).subscribe(res=>{var register=JSON.stringify(res);
    console.log(register);
    var st=JSON.parse(register);
    console.log(st.status);
    if(st.status=="fail")
      {
        console.log("SignIn failed!");
        this.router.navigate(['/singup']);
      }
      else
      {
        console.log("SignIn Successful !");
          this.router.navigate(['/comfortkitchen']);
      }
  })
  }

  booktable(data){
    console.log("Initializing booking process");
    this.http.post('http://localhost:3000/booktable',data).subscribe(res=>{var bookdetails=JSON.stringify(res);
    console.log(bookdetails);
    var st=JSON.parse(bookdetails);
    console.log(st.status);
    if(st.status=="fail")
      {
        console.log("Booking failed!");
        this.router.navigate(['/home']);
      }
      else
      {
        console.log("Booking Successful !");
        alert("Booking Successful !");
          this.router.navigate(['/home']);
      }
  })
  }

  logincheck(data){
    console.log("in login check service...");
    this.http.post('http://localhost:3000/login',data).subscribe(res=>{var name=JSON.stringify(res);
    console.log(name)
    var st=JSON.parse(name)
    console.log(st.status)
      if(st.status=="fail")
      {
        alert("please enter correct username or password !!!");
        console.log("please enter correct username or password !!!");
      }

      else
      {
        this.authListner.next(true);
        this.LoggedIn=true;
        sessionStorage.setItem('LoggedIn',"true");
        ///console.log(res.userd)
        console.log("email from service:"+data.email)
        sessionStorage.setItem('email',data.email)
       // this.isLogged.next(true)
          this.router.navigate(['/comfortkitchen'])
      }
     });
  }
  setToken(token: string)
   {
     localStorage.setItem('token',token);
   }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token=localStorage.getItem('token');
    if(token)
    {
      var userPayload=atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
    {
      return null;
    }
  }

  isLoggedIn()
  {
    var userPayload=this.getUserPayload();
    if(userPayload)
       return userPayload.exp > Date.now() / 1000 ;
    else
       return false;
  }
  
  logout(){
    console.log("Logout is called");
    sessionStorage.removeItem('LoggedIn');
    this.LoggedIn=false;
    
  }

  managerlogincheck(data){
    console.log("in login check service...");
    this.http.post('http://localhost:3000/mlogin',data).subscribe(res=>{var name=JSON.stringify(res);
    console.log(name)
    var st=JSON.parse(name)
    console.log(st.status)
      if(st.status=="fail")
      {
        alert("please enter correct username or password !!!");
        console.log("please enter correct username or password !!!");
      }

      else
      {
        this.authListner.next(true);
        ///console.log(res.userd)
        console.log("email from service:"+data.email)
        localStorage.setItem('manageremail',data.email)
       // this.isLogged.next(true)
          this.router.navigate(['/requests'])
      }
     });
  }
  Displayreq()
  {
    var mail=localStorage.getItem('manageremail'); 
    //var obj={"mail":mail}   
    console.log("in display req");
    return this.http.get('http://localhost:3000/displayreq/'+mail);

  }
  acceptreq(data:string){
    console.log(data);
    console.log("in Approve request");
    this.http.delete('http://localhost:3000/acceptreq/'+data).subscribe((res)=>{console.log(res)});
}

 rejectreq(data:string){
    console.log("in reject request");
    this.http.delete('http://localhost:3000/rejectreq'+"/"+data).subscribe((res)=>{console.log(res)});
}

}
