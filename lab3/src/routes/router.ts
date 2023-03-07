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
        this.router.get('/students', async function(req, res, next) {
            let students = await studentController.getStudents(req, res, next)
            console.log(students)
            res.render('../src/views/pages/students', {
                message: "Hello",
                students: students
            });
        });
        this.router.post('/students', studentController.addStudent);
        this.router.delete('/students/:id', studentController.deleteStudent);
        this.router.put('/students/:id', studentController.changeStudent);
    }

    private createGroupRoutes(): void {
        this.router.get('/groups', async function(req, res, next) {
            const groups = await studentController.getStudents(req, res, next)
            // res.render('../src/views/pages/groups',{
            //     message: "Hello",
            //     groups: groups
            // });
        });
        this.router.post('/groups', groupController.addGroup);
        this.router.delete('/groups/:id', groupController.deleteGroup);
        this.router.put('/groups/:id', groupController.changeGroup);
    }

    private createRoutes(): void {
        this.createStudentRoutes();
        this.createGroupRoutes();
    }
}

export default new RouteCreator().getRouter();
