import {Request, Response} from 'express';

const routes = [{
  path: '/alerts',
  method: 'get',
  handler: async (req: Request, res: Response) => {
    res.send('No Alerts');
  }
}];

export default [...routes];
