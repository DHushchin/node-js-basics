import HttpCodes from '../constants/http-codes.enum';
import { NotFoundError, BadRequestError } from '../exceptions';
import Group from '../models/group.model';

import { Request, Response } from 'express';

class GroupController {
    private groups: Group[];

    constructor() {
        this.groups = [];
        this.createGroup = this.createGroup.bind(this);
        this.deleteGroup = this.deleteGroup.bind(this);
        this.getGroupById = this.getGroupById.bind(this);
        this.getGroups = this.getGroups.bind(this);
        this.getGroupsFiltered = this.getGroupsFiltered.bind(this);
        this.updateGroup = this.updateGroup.bind(this);
    }

    public getGroups = (req: Request, res: Response): void => {
        const page = parseInt(req.query.page as string, 10) || 1;
        const itemsPerPage = parseInt(req.query.itemsPerPage as string, 10) || this.groups.length;

        const skip = (page - 1) * itemsPerPage;
        const take = itemsPerPage;

        const groups = this.groups.slice(skip, skip + take);
        res.status(HttpCodes.OK).json({ groups });
    };

    public getGroupById = (req: Request, res: Response): void => {
        const groupId = req.params.id;
        const group = this.groups.find((g) => g.id === groupId);

        if (!group) {
            throw new NotFoundError('Group not found');
        } else {
            res.status(HttpCodes.OK).json({ group });
        }
    };

    public getGroupsFiltered = (req: Request, res: Response): void => {
        const { name, faculty } = req.query;
        let filteredGroups = this.groups;

        if (name) {
            filteredGroups = filteredGroups.filter((g) => g.name === name);
        }

        if (faculty) {
            filteredGroups = filteredGroups.filter((g) => g.faculty === faculty);
        }

        res.status(HttpCodes.OK).json({ groups: filteredGroups });
    };

    public createGroup = (req: Request, res: Response): void => {
        const { name, faculty } = req.body;

        // Validation
        if (!name || !faculty) {
            throw new BadRequestError('Name and faculty are required');
        }

        const group = new Group(name, faculty);
        this.groups.push(group);

        res.status(HttpCodes.CREATED).json({ group });
    };

    public deleteGroup = (req: Request, res: Response): void => {
        const groupId = req.params.id;
        const groupIndex = this.groups.findIndex((g) => g.id === groupId);

        if (groupIndex === -1) {
            throw new NotFoundError('Group not found');
        } else {
            this.groups.splice(groupIndex, 1);
            res.status(HttpCodes.OK).json({ message: 'Group deleted' });
        }
    };

    public updateGroup = (req: Request, res: Response): void => {
        const groupId = req.params.id;
        const { name, faculty } = req.body;
        const groupIndex = this.groups.findIndex((g) => g.id === groupId);

        if (groupIndex === -1) {
            throw new NotFoundError('Group not found');
        } else {
            this.groups[groupIndex].name = name;
            this.groups[groupIndex].faculty = faculty;
            res.status(HttpCodes.OK).json({ group: this.groups[groupIndex] });
        }
    };
}

export default new GroupController();
