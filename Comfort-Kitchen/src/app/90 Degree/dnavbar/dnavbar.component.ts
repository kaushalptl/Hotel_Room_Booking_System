import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-dnavbar',
  templateUrl: './dnavbar.component.html',
  styleUrls: ['./dnavbar.component.css']
})
export class DnavbarComponent implements OnInit {

  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
  }

  logout(){
    this.myservice.logout();
    this.myservice.LoggedIn=false;
    
    alert("Succesfully Logged Out")
  }
}
