import mongoose, { InferSchemaType, Model } from 'mongoose';

const progressSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  tutorialId: { type: String, required: true },
  lessonId: { type: String, required: true },
  completedAt: { type: Date, default: Date.now },
});

// Один користувач - один запис на урок
progressSchema.index({ userId: 1, tutorialId: 1, lessonId: 1 }, { unique: true });

export type ProgressDoc = InferSchemaType<typeof progressSchema>;

export const Progress: Model<ProgressDoc> =
  mongoose.models.Progress ?? mongoose.model<ProgressDoc>('Progress', progressSchema);
