import mongoose, { InferSchemaType, Model } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export type UserDoc = InferSchemaType<typeof userSchema>;

// Перевірка models потрібна, щоб не перестворювати модель при HMR
export const User: Model<UserDoc> =
  mongoose.models.User ?? mongoose.model<UserDoc>('User', userSchema);
