import HttpCodes from '../constants/http-codes.enum';
import Student from '../models/student.model';

import { NextFunction, Request, Response } from 'express';

class StudentsController {
    private students: Student[] = [];

    constructor() {
        const student = new Student('John', 'Doe', ' ', ' ', 0, '1');
        this.students = [student];
    }

    public async getStudents(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            res.status(HttpCodes.OK).send(this.students);
        } catch (error) {
            next(error);
        }
    }

    public async addStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const student: Student = req.body;
            this.students.push(student);
            res.status(HttpCodes.OK).send(this.students);
        } catch (error) {
            next(error);
        }
    }

    public async deleteStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const studentId : string = req.params.id;
            this.students = this.students.filter((item) => item.id !== studentId);
            res.status(HttpCodes.OK).send(this.students);
        } catch (error) {
            next(error);
        }
    }

    public async changeStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const studentId : string = req.params.id;
            const student: Student = req.body;
            this.students = this.students.map((item) => {
                if (item.id === studentId) {
                    return {...item, ...student};
                }
                return item;
            });
            res.status(HttpCodes.OK).send(this.students);
        } catch (error) {
            next(error);
        }
    }
}


export default new StudentsController();
