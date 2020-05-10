import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-nnavbar',
  templateUrl: './nnavbar.component.html',
  styleUrls: ['./nnavbar.component.css']
})
export class NnavbarComponent implements OnInit {

  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
  }

  logout()
  {
    this.myservice.logout();
    this.myservice.LoggedIn=false;
    alert("Succesfully Logged Out")
  }
}
