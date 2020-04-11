import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import getUsers from '../../../util/mongo';

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
  // Fail on missing user
  const users = await getUsers();
  const result = await users.find({ name }).toArray();
  if (result.length === 0) {
    res.status(400).send(null);
    return;
  }
  // Fail on hash mismatch
  const user = result[0];
  if (!(await bcrypt.compare(password, user.hash))) {
    res.status(400).send(null);
    return;
  }

  // Otherwise we're good (we'd return an issued JWT)
  res.status(200).send('success');
};
