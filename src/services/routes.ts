import {Request, Response} from 'express';

export default [
  {
    path: '/',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.send('You have landed at the API root, there are no services here.');
    }
  }
];
