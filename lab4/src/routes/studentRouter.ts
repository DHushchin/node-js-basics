import studentController from '../controllers/student.controller';
import { validateStudent } from '../middlewares/validation.middlware';

import { Router, Request, Response } from 'express';

class StudentRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.createStudentRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private createStudentRoutes(): void {
        this.router.get('/students', (req: Request, res: Response) => {
            if (
                Object.keys(req.query).some((key) =>
                    ['name', 'surname', 'email', 'phone', 'age', 'groupId'].includes(key),
                )
            ) {
                studentController.getStudentsFiltered(req, res);
            } else {
                studentController.getStudents(req, res);
            }
        });
        this.router.get('/students/:id', studentController.getStudentById);
        this.router.get('/students', studentController.getStudentsFiltered);
        this.router.post('/students', validateStudent, studentController.createStudent);
        this.router.delete('/students/:id', studentController.deleteStudent);
        this.router.put('/students/:id', validateStudent, studentController.updateStudent);
    }
}

export default new StudentRouter().getRouter();
