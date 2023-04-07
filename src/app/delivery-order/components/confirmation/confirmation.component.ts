import { Component, Input } from '@angular/core';
import { ProfileFormInterface } from '../../types/ProfileForm.interface';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  @Input() profileForm!: ProfileFormInterface

  onSubmit() {
    console.log("accepted");
  }
}
