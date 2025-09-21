import { MongoClient, Db } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI;
// We'll use your main database, KalakaarDB
const DB_NAME = 'KalakaarDB';

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

interface MongoCache {
  conn: { client: MongoClient; db: Db } | null;
  promise: Promise<{ client: MongoClient; db: Db }> | null;
}

// To prevent connection issues in development with hot-reloading,
// we store the connection promise in a global variable.
let cached: MongoCache = (global as any).mongo;

if (!cached) {
  cached = (global as any).mongo = { conn: null, promise: null };
}

// This is the function we are exporting
export async function connectToDatabase() {
  // If we have a cached connection, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If there's no promise, create one. This prevents race conditions
  // where multiple requests try to connect at the same time.
  if (!cached.promise) {
    const client = new MongoClient(MONGO_URI);
    cached.promise = client.connect().then((client) => {
      return { client, db: client.db(DB_NAME) };
    });
  }

  // Await the promise and cache the connection object
  cached.conn = await cached.promise;
  return cached.conn;
}
