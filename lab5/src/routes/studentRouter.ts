import { validateStudent } from '../middlewares/validation.middlware';

import { Router, Request, Response } from 'express';
import StudentsController from '../controllers/StudentController.controller';

class StudentRouter {
    private router: Router;
    private studentController: StudentsController;

    constructor() {
        this.router = Router();
        this.studentController = new StudentsController();
        this.createStudentRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private createStudentRoutes(): void {
        this.router.get('/students', async (req, res) => {
            if (Object.keys(req.query).some((key) => ['name', 'faculty'].includes(key))) {
                await this.studentController.getStudents(req, res);
            } else {
                await this.studentController.getStudents(req, res);
            }
        });
        this.router.get('/students/:id', async (req, res) =>  {await this.studentController.getStudents(req, res);});
        this.router.get('/students', async (req, res) =>  {await this.studentController.getStudents(req, res);});
        this.router.post('/students', validateStudent, async (req, res) =>  {await this.studentController.addStudent(req, res);});
        this.router.delete('/students/:id', async (req, res) =>  {await this.studentController.deleteStudent(req, res);});
        this.router.put('/students/:id', validateStudent, async (req, res) =>  {await this.studentController.changeStudent(req, res);});
    }
}

export default new StudentRouter().getRouter();
