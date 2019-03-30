import {Request, Response} from 'express';

export default [
  {
    path: '/status',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.send('Service is up');
    }
  }
];
