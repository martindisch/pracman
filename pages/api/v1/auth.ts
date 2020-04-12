import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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
  const [user] = result;
  if (!(await bcrypt.compare(password, user.hash))) {
    res.status(400).send(null);
    return;
  }
  // Fail on missing secret variable
  const secret = process.env.JWT_SECRET;
  if (typeof secret !== 'string') {
    console.error(
      'Environment variable JWT_SECRET not set: unable to authenticate users'
    );
    res.status(500).send(null);
    return;
  }

  // If we're here, all's well and we can go ahead signing
  const signOptions = {
    issuer: 'pracman',
    subject: user.name,
    expiresIn: '4w',
  };
  const token = jwt.sign({ rights: user.rights }, secret, signOptions);
  res.status(200).send(token);
};
