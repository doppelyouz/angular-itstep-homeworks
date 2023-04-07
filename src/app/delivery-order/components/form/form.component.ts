import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileFormInterface } from '../../types/ProfileForm.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  myForm!: FormGroup;
  formToConfirmation!: ProfileFormInterface
  isSubmitted: boolean = false

  constructor() {
    this.createForm();
  }

  createForm() {
    this.myForm = new FormGroup({
      email: new FormControl('',Validators.required),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if(this.myForm.valid) {
      this.isSubmitted = true;
      this.formToConfirmation = this.myForm.value
      this.myForm.reset()
    }
  }
}
