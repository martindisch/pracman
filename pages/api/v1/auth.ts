import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const username = req.body.username ?? '';
    const password = req.body.password ?? '';
    if (username.length > 0 && password.length > 0) {
      res.status(200).json({ username, password });
    } else {
      res.status(400).send('Invalid username or password');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
};
