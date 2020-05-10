import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-wnavbar',
  templateUrl: './wnavbar.component.html',
  styleUrls: ['./wnavbar.component.css']
})
export class WnavbarComponent implements OnInit {

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
