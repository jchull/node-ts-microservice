import routes from './routes';
import alertsRoutes from './alerts';
import statusRoutes from './status';

export default [...routes, ...alertsRoutes, ...statusRoutes];
