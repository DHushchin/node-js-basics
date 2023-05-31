import { NextFunction, Request, Response } from 'express';
import mongoose, { Schema, Document, Model } from 'mongoose';
import HttpCodes from '../constants/http-codes.enum';

import IStudent from '../models/Student.model';
import IGroup from '../models/Group.model';
import studentSchema from '../models/StudentSchema.model';
import groupSchema from '../models/GroupSchema.model';

import redis from 'redis';
import { promisify } from 'util';

const redisClient = redis.createClient();

const StudentModel: Model<IStudent> = mongoose.model<IStudent>('Student', studentSchema);
const GroupModel: Model<IGroup> = mongoose.model<IGroup>('Group', groupSchema);

class GroupsController {
    constructor() {}
  
    public async getGroups(req: Request, res: Response): Promise<void> {
        // Check if the data exists in the cache
        const cachedData = await promisify(redisClient.get).bind(redisClient)('groups');
        if (cachedData) {
            const groups = JSON.parse(cachedData);
            return groups;
        } else {
            // Data is not in the cache, fetch it from the database
            const groups = await GroupModel.find().populate('studentIds');
            // Store the data in the cache
            redisClient.set('groups', JSON.stringify(groups));
            res.json(groups);
        }
    }
  
    public async addGroup(req: Request, res: Response): Promise<void> {
      try {
        const group: IGroup = req.body;
        const newGroup = await GroupModel.create(group);
        res.status(201).json(newGroup);
      } catch (error) {
        console.log(error);
      }
    }
  
    public async deleteGroup(req: Request, res: Response): Promise<void> {
      try {
        const groupId: string = req.params.id;
        
        await GroupModel.findByIdAndDelete(groupId);
  
        await StudentModel.updateMany({ groupId }, { $unset: { groupId: 1 } });
  
        res.sendStatus(HttpCodes.OK);
      } catch (error) {
        console.log(error);
      }
    }
  
    public async changeGroup(req: Request, res: Response): Promise<void> {
      try {
        const groupId: string = req.params.id;
        const updatedGroup: IGroup = req.body;
        const result = await GroupModel.findByIdAndUpdate(groupId, updatedGroup, { new: true });
        res.json(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  export default GroupsController;