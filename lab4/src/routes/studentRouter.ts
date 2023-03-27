import studentController from '../controllers/student.controller';
import { Router } from 'express';

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
        this.router.get('/students', studentController.getStudents);
        this.router.get('/students/:id', studentController.getStudentById);
        this.router.get('/students', studentController.getStudentsFiltered);
        this.router.post('/students', studentController.createStudent);
        this.router.delete('/students/:id', studentController.deleteStudent);
        this.router.put('/students/:id', studentController.updateStudent);
    }
}

export default new StudentRouter().getRouter();
