import studentController from '../controllers/student.controller';
import groupController from '../controllers/group.controller';
import { Router } from 'express';

class RouteCreator {
    private router: Router;

    constructor() {
        this.router = Router();
        this.createRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private createStudentRoutes(): void {
        this.router.get('/students', studentController.getStudents);
        this.router.post('/students', studentController.addStudent);
        this.router.delete('/students', studentController.deleteStudent);
        this.router.put('/students', studentController.changeStudent);
    }

    private createGroupRoutes(): void {
        this.router.get('/groups', groupController.getGroups);
        this.router.post('/groups', groupController.addGroup);
        this.router.delete('/groups', groupController.deleteGroup);
        this.router.put('/groups', groupController.changeGroup);
    }

    private createRoutes(): void {
        this.createStudentRoutes();
        this.createGroupRoutes();
    }
}

export default new RouteCreator().getRouter();
