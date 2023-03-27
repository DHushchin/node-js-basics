import groupController from '../controllers/group.controller';
import { Router } from 'express';

class GroupRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.createGroupRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private createGroupRoutes(): void {
        this.router.get('/groups', groupController.getGroups);
        this.router.get('/groups/:id', groupController.getGroupById);
        this.router.get('/groups', groupController.getGroupsFiltered);
        this.router.post('/groups', groupController.createGroup);
        this.router.delete('/groups/:id', groupController.deleteGroup);
        this.router.put('/groups/:id', groupController.updateGroup);
    }
}

export default new GroupRouter().getRouter();
