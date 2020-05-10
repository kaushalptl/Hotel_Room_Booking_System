import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import {MyserviceService} from '../myservice.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  myForm: FormGroup;
  successMessage: String = '';
  
   // private _router: Router,
   // private _activatedRoute: ActivatedRoute) {
    constructor(private myservice: MyserviceService){
    this.myForm = new FormGroup({
      email: new FormControl(null, [Validators.email,Validators.required]),
      cname: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
      mobileno: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
      cnfpass: new FormControl(null, [this.passValidator,Validators.required])
    });

    this.myForm.controls.password.valueChanges
      .subscribe(
        x => this.myForm.controls.cnfpass.updateValueAndValidity()
      );
      }


  ngOnInit() {
  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }
 
 

 reg(data)
  {
    this.myservice.submitRegister(data);
  }
}
