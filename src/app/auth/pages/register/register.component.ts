import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  myForm: FormGroup = this.fb.group({
    name:['Ivan', [Validators.required, Validators.minLength(2)]],
    email:['test@test.com', [Validators.required, Validators.email]],
    password:['123456', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder) { }

  register(){
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
    
  }
}
