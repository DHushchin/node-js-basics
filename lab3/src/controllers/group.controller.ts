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
        this.changeGroup = this.changeGroup.bind(this);
    }

    public async getGroups(req: Request, res: Response, next: NextFunction): Promise<Group[] | undefined> {
        try {
            return this.groups;
        } catch (error) {
            next(error);
        }
    }

    public async addGroup(req: Request, res: Response, next: NextFunction): Promise<Group[] | undefined> {
        try {
            const group: Group = req.body;
            this.groups.push(group);
            return this.groups;
        } catch (error) {
            next(error);
        }
    }

    public async deleteGroup(req: Request, res: Response, next: NextFunction): Promise<Group[] | undefined> {
        try {
            const groupId: string = req.params.id;
            this.groups = this.groups.filter((item) => item.id !== groupId);
            return this.groups;
        } catch (error) {
            next(error);
        }
    }

    public async changeGroup(req: Request, res: Response, next: NextFunction): Promise<Group[] | undefined> {
        try {
            const group: Group = req.body;
            const groupId: string = req.params.id;
            this.groups = this.groups.map((item) => {
                if (item.id === groupId) {
                    return { ...item, ...group };
                }
                return item;
            });
            return this.groups;
        } catch (error) {
            next(error);
        }
    }
}

export default new GroupsController();
