export interface Person {
    fullName: string;
    email: string;
    gender: Gender;
}


export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other'
}
