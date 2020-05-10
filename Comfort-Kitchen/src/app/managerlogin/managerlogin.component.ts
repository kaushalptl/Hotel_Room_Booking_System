import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service'
import { Router,RouterModule,ActivatedRoute } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.css']
})
export class ManagerloginComponent implements OnInit {


  loginForm: FormGroup;
  constructor(private myservice: MyserviceService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.minLength(8)])
    });
  }

  ngOnInit() {
  }
  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login(data)
  {
    this.myservice.managerlogincheck(data);

  }
}
