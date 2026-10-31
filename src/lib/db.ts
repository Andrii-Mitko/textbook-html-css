import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined');
}

// Кеш з'єднання, щоб у dev-режимі не створювати нове при кожному HMR
const globalCache = globalThis as unknown as {
  mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
};

const cache = (globalCache.mongoose ??= { conn: null, promise: null });

export async function connectDB(): Promise<typeof mongoose> {
  if (cache.conn) return cache.conn;

  cache.promise ??= mongoose.connect(MONGODB_URI as string);
  cache.conn = await cache.promise;

  return cache.conn;
}
