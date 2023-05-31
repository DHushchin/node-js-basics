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


class StudentsController {
  constructor() {}

  public async getStudents(req: Request, res: Response): Promise<void> {
    const cachedData = await promisify(redisClient.get).bind(redisClient)('students');
    if (cachedData) {
        const students = JSON.parse(cachedData);
        return students;
    } else {
        const students = await StudentModel.find().populate('groupId');
        redisClient.set('students', JSON.stringify(students));
        res.json(students);
    }
  }

  public async addStudent(req: Request, res: Response): Promise<void> {
    try {
      const student: IStudent = req.body;
      const newStudent = await StudentModel.create(student);
      res.status(201).json(newStudent);
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteStudent(req: Request, res: Response): Promise<void> {
    try {
      const studentId: string = req.params['id'];
      await StudentModel.findByIdAndDelete(studentId);
      res.sendStatus(HttpCodes.OK);
    } catch (error) {
      console.log(error);
    }
  }

  public async changeStudent(req: Request, res: Response): Promise<void> {
    try {
      const studentId: string = req.params.id;
      const updatedStudent: IStudent = req.body;
      const result = await StudentModel.findByIdAndUpdate(studentId, updatedStudent, { new: true });
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

export default StudentsController;
