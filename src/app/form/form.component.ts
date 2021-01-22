import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class Form implements OnInit {
  public userForm: any =  FormGroup;
  public reg:RegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  @Output() change = new EventEmitter<any>();

  formSubmitAttempt = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(this.reg)]],
    });
  }

  onSubmit(e:any) {
    e.preventDefault();
    this.change.emit(false)
  }
  isFieldInvalid(field: string): any {
    return this.formSubmitAttempt && this.userForm.get(field).invalid;
  }
}