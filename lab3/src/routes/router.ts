import studentController from '../controllers/student.controller';
import groupController from '../controllers/group.controller';
import { NextFunction, Request, Response, Router } from 'express';
import HttpCodes from '../constants/http-codes.enum';

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
        this.router.get('/students', async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/students', {
                message: "Hello",
                students: await studentController.getStudents(req, res, next)
            });
        });

        this.router.post('/students', async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/students', {
                message: "Hello",
                students: await studentController.addStudent(req, res, next)
            });
        });

        this.router.delete('/students/:id',async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/students', {
                message: "Hello",
                students: await studentController.changeStudent(req, res, next)
            });
        });

        this.router.put('/students/:id', async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/students', {
                message: "Hello",
                students: await studentController.deleteStudent(req, res, next)
            });
        });
    }

    private createGroupRoutes(): void {
        this.router.get('/groups', async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/groups', {
                message: "Hello",
                group: await groupController.getGroups(req, res, next)
            });
        });

        this.router.post('/groups', async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/groups', {
                message: "Hello",
                students: await groupController.addGroup(req, res, next)
            });
        });

        this.router.delete('/groups/:id', async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/groups', {
                message: "Hello",
                students: await groupController.changeGroup(req, res, next)
            });
        });

        this.router.put('/groups/:id', async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/groups', {
                message: "Hello",
                students: await groupController.deleteGroup(req, res, next)
            });
        });
    }

    private createRoutes(): void {
        this.createStudentRoutes();
        this.createGroupRoutes();
    }
}

export default new RouteCreator().getRouter();
