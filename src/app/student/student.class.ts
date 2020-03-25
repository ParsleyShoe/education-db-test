import { Major } from '../major/major.class';

export class Student {
    id:number = 0;
    name:string;
    sat:number;
    gpa:number;
    majorId?:number;
    major:Major;

    constructor() {}
}