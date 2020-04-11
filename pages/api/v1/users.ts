import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import getUsers from '../../../util/mongo';

const saltRounds = 10;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Fail on wrong HTTP method
  if (req.method !== 'POST') {
    res.status(405).send(null);
    return;
  }
  // Fail on wrong parameters
  const name = req.body.name ?? '';
  const password = req.body.password ?? '';
  if (name.length === 0 || password.length === 0) {
    res.status(400).send(null);
    return;
  }
  // Fail on already existing user
  const users = await getUsers();
  if ((await users.find({ name }).toArray()).length !== 0) {
    res.status(400).send(null);
    return;
  }

  // Otherwise, salt, hash & insert
  const hash = await bcrypt.hash(password, saltRounds);
  await users.insertOne({ name, hash });
  // Return representation of created user (without password hash)
  res.status(200).json({ name });
};
