import HttpCodes from '../constants/http-codes.enum';
import Group from '../models/group.model';

import { NextFunction, Request, Response } from 'express';

class GroupsController {
    private groups: Group[];

    constructor() {
        this.groups = [];
        this.getGroups = this.getGroups.bind(this);
        this.addGroup = this.addGroup.bind(this);
        this.deleteGroup = this.deleteGroup.bind(this);
    }

    public async getGroups(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            res.status(HttpCodes.OK).send(this.groups);
        } catch (error) {
            next(error);
        }
    }

    public async addGroup(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const group: Group = req.body;
            this.groups.push(group);
            res.status(HttpCodes.OK).send(this.groups);
        } catch (error) {
            next(error);
        }
    }

    public async deleteGroup(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const groupId: string = req.params.id;
            this.groups = this.groups.filter((item) => item.id !== groupId);
            res.status(HttpCodes.OK).send(this.groups);
        } catch (error) {
            next(error);
        }
    }

    public async changeGroup(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const group: Group = req.body;
            const groupId: string = req.params.id;
            this.groups = this.groups.map((item) => {
                if (item.id === group.id) {
                    return { ...item, ...group };
                }
                return item;
            });
            res.status(HttpCodes.OK).send(this.groups);
        } catch (error) {
            next(error);
        }
    }
}

export default new GroupsController();
