import groupController from '../controllers/group.controller';
import { validateGroup } from '../middlewares/validation.middlware';

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
        this.router.get('/groups', (req, res) => {
            if (Object.keys(req.query).some((key) => ['name', 'faculty'].includes(key))) {
                groupController.getGroupsFiltered(req, res);
            } else {
                groupController.getGroups(req, res);
            }
        });
        this.router.get('/groups/:id', groupController.getGroupById);
        this.router.get('/groups', groupController.getGroupsFiltered);
        this.router.post('/groups', validateGroup, groupController.createGroup);
        this.router.delete('/groups/:id', groupController.deleteGroup);
        this.router.put('/groups/:id', validateGroup, groupController.updateGroup);
    }
}

export default new GroupRouter().getRouter();
