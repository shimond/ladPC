import { Component } from '@angular/core';
import { Person } from './model/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  person: Person = { fullName: 'David Keriboshe', email: 'kriboshe@gmail.com', isActive: true };
}
