import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';

// This is the main function that handles incoming POST requests
export async function POST(request: Request) {
  // Use a try...catch block to handle potential errors gracefully
  try {
    // 1. Get the user data from the request body
    const { name, email, password, craftType, region } = await request.json();

    // 2. Validate the input (basic example)
    if (!email || !password || password.length < 8) {
      return NextResponse.json(
        { message: 'Invalid input. Email and a password of at least 8 characters are required.' },
        { status: 400 } // Bad Request
      );
    }

    // 3. Connect to your MongoDB Atlas database using the shared helper
    const { db } = await connectToDatabase();
    const usersCollection = db.collection('users');

    // 4. Check if a user with this email already exists
    const existingUser = await usersCollection.findOne({ email: email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists.' },
        { status: 409 } // Conflict
      );
    }

    // 5. Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 12);

    // 6. Insert the new user document into the 'users' collection
    const result = await usersCollection.insertOne({
      name,
      email,
      passwordHash: hashedPassword,
      craftType,
      region,
      createdAt: new Date(),
    });

    // 8. Send a success response back to the frontend (serialize ObjectId)
    return NextResponse.json(
      { message: 'User created successfully!', userId: result.insertedId.toString() },
      { status: 201 } // Created
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}