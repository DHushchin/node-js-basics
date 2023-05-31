import mongoose, { Schema, Document, Model } from 'mongoose';
import IStudent from './Student.model';

const studentSchema = new Schema<IStudent>({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    groupId: { type: Schema.Types.ObjectId, ref: 'Group' },
  });

  export default studentSchema;