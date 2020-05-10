import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-bhbnavbar',
  templateUrl: './bhbnavbar.component.html',
  styleUrls: ['./bhbnavbar.component.css']
})
export class BhbnavbarComponent implements OnInit {

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
