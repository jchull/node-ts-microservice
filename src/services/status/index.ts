import {Request, Response} from 'express';

const routes = [
  {
    path: '/status',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.send('Service is up');
    }
  }
];

export default [...routes];
