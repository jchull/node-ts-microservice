import {Request, Response} from 'express';

export default [
  {
    path: '/alerts',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.send('No Alerts');
    }
  }
];
