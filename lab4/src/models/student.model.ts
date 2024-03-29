import { v4 as uuidv4 } from 'uuid';

class Student {
    public name: string;
    public surname: string;
    public email: string;
    public phone: string;
    public age: number;
    public id: string;
    public groupId: string;

    public constructor(
        name: string,
        surname: string,
        email: string,
        phone: string,
        age: number,
        groupId: string,
    ) {
        this.id = uuidv4();
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.groupId = groupId;
    }
}

export default Student;
