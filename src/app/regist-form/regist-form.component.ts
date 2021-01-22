import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist-form',
  templateUrl: './regist-form.component.html',
  styleUrls: ['./regist-form.component.css']
})
export class RegistFormComponent implements OnInit {

public modal:boolean = false;

constructor(private f7b: FormBuilder, private router: Router) { }

formReg = this.f7b.group({
  company:["",[Validators.required,Validators.minLength(3)]],
  phone:["",[Validators.required,Validators.minLength(13)]],
  password:["",[Validators.required,Validators.minLength(13)]],
  checkbox:[false,Validators.requiredTrue],
})

ngOnInit(): void {
}
@Output() Back = new EventEmitter<any>();
  back() {
this.Back.emit(true)
}
showModal(){
  this.modal = !this.modal
}
closeModal(){
  this.modal = !this.modal
}

onSubmit(){
  this.router.navigate(['/last'])
}
  
}
