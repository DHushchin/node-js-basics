import mongoose, { Schema, Document, Model } from 'mongoose';

interface IStudent extends Document {
  name: string;
  surname: string;
  email: string;
  phone: string;
  age: number;
  groupId: Schema.Types.ObjectId;
}

export default IStudent;