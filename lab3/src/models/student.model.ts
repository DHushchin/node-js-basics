class Student {
    public name: string;
    public surname: string;
    public email: string;
    public phone: string;
    public age: number;
    public id: string;

    public constructor(
        name: string,
        surname: string,
        email: string,
        phone: string,
        age: number,
        id: string,
    ) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.id = id;
    }
}

export default Student;
