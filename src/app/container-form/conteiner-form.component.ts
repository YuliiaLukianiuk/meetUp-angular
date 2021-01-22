import { Component } from '@angular/core';

@Component({
  selector: 'app-conteiner-form',
  templateUrl: './conteiner-form.component.html',
  styleUrls: ['./conteiner-form.component.css']
})

export class ConteinerForm {
  public formFirst:boolean = true;
  set(value:any) {
    this.formFirst = value
  }

}
