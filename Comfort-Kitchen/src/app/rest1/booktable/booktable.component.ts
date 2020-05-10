import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import {MyserviceService} from '../../myservice.service';
@Component({
  selector: 'app-singup',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})
export class BooktableComponent implements OnInit {

  myForm: FormGroup;
  successMessage: String = '';
  
    constructor(private myservice: MyserviceService){
    this.myForm = new FormGroup({
      email: new FormControl(null, [Validators.email,Validators.required]),
      gname: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      phone:new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
      time: new FormControl(null, Validators.required),
      guests: new FormControl(null,Validators.required)
    });
   }


  ngOnInit() {
  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }
   

 book(data)
  {
    this.myservice.booktable(data);
  }
}
