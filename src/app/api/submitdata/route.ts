import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

interface SubmissionData {
    [key: string]: string;
}

export async function POST(req: NextRequest) {
    const { getUser, isAuthenticated } = getKindeServerSession();

    if (!isAuthenticated()) {
        return new Response("Unauthorized", { status: 401 });
    }

    const user = await getUser();

    const data: SubmissionData = await req.json();

    if (Object.keys(data).length === 0) {
        return NextResponse.json({ message: 'Invalid input. Please fill all the fields correctly.' }, { status: 422 });
    }

    const client = new MongoClient(process.env.MONGODB_URI as string);

    try {
        await client.connect();
        const db = client.db();
        const collection = db.collection('votes');

        const existingSubmission = await collection.findOne({ user: user.id });

        if (existingSubmission||user===null) {
            return NextResponse.json({ message: 'Only one submission allowed.' }, { status: 409 });
        }

        const submissionWithUser = {
            ...data,
            user: user.id,
        };

        await collection.insertOne(submissionWithUser);

        client.close();

        return NextResponse.json({ message: 'Stored successfully!' }, { status: 201 });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return NextResponse.json({ message: 'Storing subscription failed.' }, { status: 500 });
    }
}
