import alertsRoutes from './alerts';
import statusRoutes from './status';
import {Request, Response} from 'express';

const home = {
  path: '/',
  method: 'get',
  handler: async (req: Request, res: Response) => {
    res.send('You have landed at the API root, there are no services here.');
  }
};

export default [home, ...alertsRoutes, ...statusRoutes];
