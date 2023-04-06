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
                message: "",
                students: await studentController.getStudents(req, res, next)
            });
        });

        this.router.post('/students', async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/students', {
                message: "",
                students: await studentController.addStudent(req, res, next)
            });
        });

        this.router.post('/students/delete/:id',async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/students', {
                message: "",
                students: await studentController.deleteStudent(req, res, next)
            });
        });

        this.router.put('/students/put/:id', async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/students', {
                message: "",
                students: await studentController.changeStudent(req, res, next)
            });
        });
    }

    private createGroupRoutes(): void {
        this.router.get('/groups', async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/groups', {
                message: "",
                groups: await groupController.getGroups(req, res, next)
            });
        });

        this.router.post('/groups', async function(req: Request, res: Response, next: NextFunction) {
            console.log("add func");
            res.status(HttpCodes.OK).render('../src/views/pages/groups', {
                message: "",
                groups: await groupController.addGroup(req, res, next)
            });
        });

        this.router.post('/groups/delete/:id', async function(req: Request, res: Response, next: NextFunction) {
            console.log("delete func")
            res.status(HttpCodes.OK).render('../src/views/pages/groups', {
                message: "",
                groups: await groupController.deleteGroup(req, res, next)
            });
        });

        this.router.post('/groups/put/:id', async function(req: Request, res: Response, next: NextFunction) {
            res.status(HttpCodes.OK).render('../src/views/pages/groups', {
                message: "",
                groups: await groupController.changeGroup(req, res, next)
            });
        });
    }

    private createRoutes(): void {
        this.createStudentRoutes();
        this.createGroupRoutes();
    }
}

export default new RouteCreator().getRouter();
