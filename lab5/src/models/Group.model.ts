import mongoose, { Schema, Document, Model } from 'mongoose';

interface IGroup extends Document {
    name: string;
    studentIds: Schema.Types.ObjectId[];
  }

export default IGroup;