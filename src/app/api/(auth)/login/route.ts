import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export async function POST(req: NextApiRequest, res: NextApiResponse) {


  try {
    const data = JSON.parse(req.body);

    // Validate the data here (optional)

    // Connect to MongoDB
    const client = new MongoClient(process.env.MONGODB_URI as string);
    await client.connect();

    // Access your MongoDB collection and insert the data
    const db = client.db();
    const collection = db.collection('user');
    const result = await collection.insertOne(data);

    await client.close();

    // Return a success response
    return res.status(201).json({ message: 'Registration successful', insertedId: result.insertedId });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
