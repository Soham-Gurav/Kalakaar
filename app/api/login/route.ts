import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

// This function handles the incoming POST request from your login form
export async function POST(request: Request) {
  try {
    // 1. Get the email and password from the request body
    const { email, password } = await request.json();

    // 2. Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required.' },
        { status: 400 } // Bad Request
      );
    }

    // 3. Connect to the MongoDB database
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
      throw new Error('MONGO_URI is not defined in .env.local');
    }
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    const db = client.db("KalakaarDB");
    const usersCollection = db.collection('users');

    // 4. Find the user by their email address
    const user = await usersCollection.findOne({ email: email });

    if (!user) {
      // If no user is found with that email, send a generic error
      await client.close();
      return NextResponse.json(
        { message: 'Invalid credentials. Please try again.' },
        { status: 401 } // Unauthorized
      );
    }

    // 5. Compare the submitted password with the hashed password in the database
    const passwordsMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordsMatch) {
      // If the passwords do not match, send the same generic error
      await client.close();
      return NextResponse.json(
        { message: 'Invalid credentials. Please try again.' },
        { status: 401 } // Unauthorized
      );
    }

    // IMPORTANT: In a real-world app, you would create a session or JWT here.
    // For now, we'll just send back a success message and the user's name.

    // 6. Close the database connection
    await client.close();

    // 7. Send a success response
    return NextResponse.json(
      {
        message: 'Login successful!',
        user: {
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 } // OK
    );

  } catch (error) {
    console.error('API Login Error:', error);
    return NextResponse.json(
      { message: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
