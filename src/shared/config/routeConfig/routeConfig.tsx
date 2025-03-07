import { RouteProps } from 'react-router';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoutes {
    MAIN= 'main',
    ABOUT= 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths[AppRoutes.MAIN],
    element: <HomePage />,
  },

  [AppRoutes.ABOUT]: {
    path: RoutePaths[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
};
