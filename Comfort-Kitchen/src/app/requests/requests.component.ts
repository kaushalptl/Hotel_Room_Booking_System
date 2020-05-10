import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
 Reqdata;
  constructor(private router:Router,private myservice:MyserviceService,public activeroute:ActivatedRoute) { 
  }

  ngOnInit() {
    console.log("onInit");
    this.myservice.Displayreq().subscribe((data)=>{this.Reqdata=data;console.log(data);})
    console.log("back");
  }
 
  Reject(data)
  {
    this.myservice.rejectreq(this.Reqdata[data]._id);
  }

  Approve(data)
  {
    this.myservice.acceptreq(this.Reqdata[data]._id);
  }
}
