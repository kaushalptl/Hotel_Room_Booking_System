import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-whome',
  templateUrl: './whome.component.html',
  styleUrls: ['./whome.component.css']
})
export class WhomeComponent implements OnInit {

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
