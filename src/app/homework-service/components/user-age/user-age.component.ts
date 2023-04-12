import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-age',
  templateUrl: './user-age.component.html',
  styleUrls: ['./user-age.component.scss']
})
export class UserAgeComponent {
  @Input() isAllowed: boolean = false;
}
