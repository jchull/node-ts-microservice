import {Request, Response} from 'express';

const HOME_ROUTE = {
  path: '/',
  method: 'get',
  handler: async (req: Request, res: Response) => {
    res.send('You have landed at the API root, there are no services here.');
  }
};

export default [HOME_ROUTE];
