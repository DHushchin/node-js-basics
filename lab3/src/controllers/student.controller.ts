import HttpCodes from '../constants/http-codes.enum';
import Student from '../models/student.model';

import { NextFunction, Request, Response } from 'express';

class StudentsController {
    private students: Student[];

    constructor() {
        this.students = [];
        this.getStudents = this.getStudents.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.changeStudent = this.changeStudent.bind(this);
    }

    public async getStudents(req: Request, res: Response, next: NextFunction): Promise<Student[] | undefined> {
        try {
            return this.students;
        } catch (error) {
            next(error);
        }
    }

    public async addStudent(req: Request, res: Response, next: NextFunction): Promise<Student[] | undefined> {
        try {
            const student: Student = req.body;
            this.students.push(student);
            return this.students;
        } catch (error) {
            next(error);
        }
    }

    public async deleteStudent(req: Request, res: Response, next: NextFunction): Promise<Student[] | undefined> {
        try {
            console.log("start delete func");
            const studentId: string = req.params['id'];
            console.log(studentId);
            this.students = this.students.filter((item) => item.id !== studentId);
            return this.students;
        } catch (error) {
            console.log("error");
            next(error);
        }
    }

    public async changeStudent(req: Request, res: Response, next: NextFunction): Promise<Student[] | undefined> {
        try {
            const studentId: string = req.params.id;
            const student: Student = req.body;
            this.students = this.students.map((item) => {
                if (item.id === studentId) {
                    return { ...item, ...student };
                }
                return item;
            });
            return this.students;
        } catch (error) {
            next(error);
        }
    }
}

export default new StudentsController();
