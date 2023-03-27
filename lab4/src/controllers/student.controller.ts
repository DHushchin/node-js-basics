import HttpCodes from '../constants/http-codes.enum';
import { NotFoundError, BadRequestError } from '../exceptions';
import Student from '../models/student.model';

import { Request, Response } from 'express';

class StudentController {
    private students: Student[];

    constructor() {
        this.students = [];
        this.createStudent = this.createStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.getStudentById = this.getStudentById.bind(this);
        this.getStudents = this.getStudents.bind(this);
        this.getStudentsFiltered = this.getStudentsFiltered.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    public getStudents = (req: Request, res: Response): void => {
        const page = parseInt(req.query.page as string, 10) || 1;
        const itemsPerPage = parseInt(req.query.itemsPerPage as string, 10) || this.students.length;

        const skip = (page - 1) * itemsPerPage;
        const take = itemsPerPage;

        const students = this.students.slice(skip, skip + take);
        res.status(HttpCodes.OK).json({ students });
    };

    public getStudentById = (req: Request, res: Response): void => {
        const studentId = req.params.id;
        const student = this.students.find((s) => s.id === studentId);

        if (!student) {
            throw new NotFoundError('Student not found');
        } else {
            res.status(HttpCodes.OK).json({ student });
        }
    };

    public getStudentsFiltered = (req: Request, res: Response): void => {
        const { name, surname, email, phone, age } = req.query;
        let filteredStudents = this.students;

        if (name) {
            filteredStudents = filteredStudents.filter((s) => s.name === name);
        }

        if (surname) {
            filteredStudents = filteredStudents.filter((s) => s.surname === surname);
        }

        if (email) {
            filteredStudents = filteredStudents.filter((s) => s.email === email);
        }

        if (phone) {
            filteredStudents = filteredStudents.filter((s) => s.phone === phone);
        }

        if (age) {
            filteredStudents = filteredStudents.filter(
                (s) => s.age === parseInt(age as string, 10),
            );
        }

        res.status(HttpCodes.OK).json({ students: filteredStudents });
    };

    public createStudent = (req: Request, res: Response): void => {
        const { name, surname, email, phone, age } = req.body;

        // Validation
        if (!name || !surname || !email || !phone || !age) {
            throw new BadRequestError('All fields are required');
        }

        const newStudent = new Student(name, surname, email, phone, age);
        this.students.push(newStudent);

        res.status(HttpCodes.CREATED).json({ student: newStudent });
    };

    public deleteStudent = (req: Request, res: Response): void => {
        const studentId = req.params.id;
        const index = this.students.findIndex((s) => s.id === studentId);

        if (index === -1) {
            throw new NotFoundError('Student not found');
        } else {
            this.students.splice(index, 1);
            res.status(HttpCodes.OK).json({ message: 'Student deleted' });
        }
    };

    public updateStudent = (req: Request, res: Response): void => {
        const studentId = req.params.id;
        const { name, surname, email, phone, age } = req.body;

        const student = this.students.find((s) => s.id === studentId);

        if (!student) {
            throw new NotFoundError('Student not found');
        } else {
            student.name = name || student.name;
            student.surname = surname || student.surname;
            student.email = email || student.email;
            student.phone = phone || student.phone;
            student.age = age || student.age;

            res.status(HttpCodes.OK).json({ student });
        }
    };
}

export default new StudentController();
