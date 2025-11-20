import mongoose, { Mongoose } from 'mongoose';

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

const globalCache = globalThis as typeof globalThis & { mongooseCache?: MongooseCache };

if (!globalCache.mongooseCache) {
  globalCache.mongooseCache = { conn: null, promise: null };
}

async function dbConnect(): Promise<Mongoose> {
  if (globalCache.mongooseCache!.conn) {
    return globalCache.mongooseCache!.conn;
  }

  if (!globalCache.mongooseCache!.promise) {
    const opts = { bufferCommands: false };
    globalCache.mongooseCache!.promise = mongoose.connect(MONGODB_URI!, opts);
  }

  globalCache.mongooseCache!.conn = await globalCache.mongooseCache!.promise;
  return globalCache.mongooseCache!.conn;
}

export default dbConnect;
