import HttpCodes from '../constants/http-codes.enum';
import Student from '../models/student.model';

import { NextFunction, Request, Response } from 'express';

class StudentsController {
    private studens: Student[];

    constructor() {
        this.studens = [];
    }

    public async getStudents(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            res.status(HttpCodes.OK).send(this.studens);
        } catch (error) {
            next(error);
        }
    }

    public async addStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const student: Student = req.body;
            this.studens.push(student);
            res.status(HttpCodes.OK).send(this.studens);
        } catch (error) {
            next(error);
        }
    }

    public async deleteStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const student: Student = req.body;
            this.studens = this.studens.filter((item) => item.email !== student.email);
            res.status(HttpCodes.OK).send(this.studens);
        } catch (error) {
            next(error);
        }
    }

    public async changeStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const student: Student = req.body;
            this.studens = this.studens.map((item) => {
                if (item.email === student.email) {
                    return student;
                }
                return item;
            });
            res.status(HttpCodes.OK).send(this.studens);
        } catch (error) {
            next(error);
        }
    }
}

export default new StudentsController();
