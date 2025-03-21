import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const revalidate = 0;

export async function GET(req: NextRequest) {
  const client = new MongoClient(process.env.MONGODB_URI as string);
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('votes');

    const votes = await collection.find({}).toArray();

    return NextResponse.json(votes, { status: 200 });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return NextResponse.json({ message: 'Failed to fetch data.' }, { status: 500 });
  }
}