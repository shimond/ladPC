import { Person, Gender } from '../model/person.model';


export class PeopleService {

  getAllPeople() : Array<Person> {
    const people = [
      { fullName: 'Shimon Dahan', email: 'sdahan@jbh.co.il', gender: Gender.Male },
      { fullName: 'Naama Dahan', email: 'naama@jbh.co.il', gender: Gender.Female },
      { fullName: 'Roni Cohen', email: 'Roni@jbh.co.il', gender: Gender.Other },
      { fullName: 'Moshe Levi', email: 'moshelev@walla.co.il', gender: Gender.Male }
    ];
    return people;
  }
  constructor() { }
}



export class PeopleMockService {

  getAllPeople() : Array<Person> {
    const people = [
      { fullName: 'David david', email: 'david@jbh.co.il', gender: Gender.Male },
      { fullName: 'Moshe Levi', email: 'moshelev@walla.co.il', gender: Gender.Male }
    ];
    return people;
  }
  constructor() { }
}
