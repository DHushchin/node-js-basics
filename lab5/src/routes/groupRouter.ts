import GroupsController from '../controllers/GroupController.controller';
import { validateGroup } from '../middlewares/validation.middlware';

import { Router } from 'express';

class GroupRouter {
    private router: Router;
    private groupController: GroupsController;

    constructor() {
        this.router = Router();
        this.groupController = new GroupsController();
        this.createGroupRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private createGroupRoutes(): void {
        this.router.get('/groups', (req, res) => {
            if (Object.keys(req.query).some((key) => ['name', 'faculty'].includes(key))) {
                this.groupController.getGroups(req, res);
            } else {
                this.groupController.getGroups(req, res);
            }
        });
        this.router.get('/groups/:id', this.groupController.getGroupById);
        this.router.get('/groups', this.groupController.getGroupsFiltered);
        this.router.post('/groups', validateGroup, this.groupController.createGroup);
        this.router.delete('/groups/:id', this.groupController.deleteGroup);
        this.router.put('/groups/:id', validateGroup, this.groupController.updateGroup);
    }
}

export default new GroupRouter().getRouter();
