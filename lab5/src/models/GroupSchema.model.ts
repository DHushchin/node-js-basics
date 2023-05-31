import mongoose, { Schema, Document, Model } from 'mongoose';
import IGroup from './Group.model';

const groupSchema = new Schema<IGroup>({
    name: { type: String, required: true },
    studentIds: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
  });

  export default groupSchema;