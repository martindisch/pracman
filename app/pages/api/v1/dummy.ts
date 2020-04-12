import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Fail on wrong HTTP method
  if (req.method !== 'GET') {
    res.status(405).send(null);
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
  // Fail on invalid token
  const token = req.cookies.token;
  try {
    const payload = jwt.verify(token, secret);
    // If it checks out, return the token payload as a dummy body
    res.status(200).json(payload);
  } catch (err) {
    res.status(401).send(null);
  }
};
