import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';

function escapeRegex(string: string) {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


export async function GET(request: Request) {
  try {
    // 1. Get all search parameters from the URL
    const { searchParams } = new URL(request.url);
    const query = (searchParams.get('query') || '').trim();
    const type = searchParams.get('type');
    const category = searchParams.get('category');
    const location = searchParams.get('location');

    if (type !== 'users' && type !== 'products') {
      return NextResponse.json({ message: 'A valid search type ("users" or "products") is required.' }, { status: 400 });
    }

    // If no query provided, don't return all documents — return empty array
    if (!query) {
      return NextResponse.json([], { status: 200 });
    }

  const { db } = await connectToDatabase();
  let results: any[] = [];
    
    // 2. Build a dynamic filter object based on the provided parameters
    const filter: any = {};
    if (query) {
      if (type === 'users') {
        filter.name = { $regex: escapeRegex(query), $options: 'i' };
      } else {
        filter.$or = [
          { title: { $regex: escapeRegex(query), $options: 'i' } },
          { tags: { $regex: escapeRegex(query), $options: 'i' } }
        ];
      }
    }

    if (category) {
      const field = type === 'users' ? 'craftType' : 'tags';
      filter[field] = { $regex: escapeRegex(category), $options: 'i' };
    }

    if (location) {
      if (type === 'users') {
        filter.region = { $regex: escapeRegex(location), $options: 'i' };
      }
    }
    
    // 3. Perform the database search
    if (type === 'users') {
      const usersCollection = db.collection('users');
      results = await usersCollection.find(filter).toArray();
    } else if (type === 'products') {
      const productsCollection = db.collection('products');
      if (location) {
          const usersCollection = db.collection('users');
          const usersInLocation = await usersCollection.find({ region: { $regex: escapeRegex(location), $options: 'i' } }).project({ _id: 1 }).toArray();
          const userIds = usersInLocation.map(user => user._id);
          filter.userId = { $in: userIds };
      }
      results = await productsCollection.find(filter).toArray();
    }

    return NextResponse.json(results, { status: 200 });

  } catch (error) {
    console.error('API Search Error:', error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}