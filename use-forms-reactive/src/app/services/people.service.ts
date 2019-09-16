import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people: Array<Person> = [
    { id: 1, fullName: 'Shimon Dahan', email: 'Shimond@any-techs.co.il', isActive: true },
    { id: 2, fullName: 'Gilad Dahan', email: 'Gil@any-techs.co.il', isActive: true },
    { id: 3, fullName: 'Tehila Dahan', email: 'Tehila@any-techs.co.il', isActive: false },
    { id: 4, fullName: 'Naama Dahan', email: 'Naama@any-techs.co.il', isActive: true }
  ];

  getAllPeople() {
    return this.people;
  }

  updatePerson(person: Person) {
    const updatePerson = this.people.find(x => x.id == person.id);
    if (updatePerson) {
      updatePerson.fullName = person.fullName;
      updatePerson.email = person.email;
      updatePerson.isActive = person.isActive;
    }
    else {
      throw 'Not found.';
    }
  }
  addNewPerson(p: Person) {
    p.id = this.people[this.people.length - 1].id + 1;
    this.people.push(p);
  }

  constructor() { }
}
