import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-bnavbar',
  templateUrl: './bnavbar.component.html',
  styleUrls: ['./bnavbar.component.css']
})
export class BnavbarComponent implements OnInit {

  constructor(private myservice:MyserviceService,private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.myservice.logout();
    this.myservice.LoggedIn=false;
    
    alert("Succesfully Logged Out")
  }
}
