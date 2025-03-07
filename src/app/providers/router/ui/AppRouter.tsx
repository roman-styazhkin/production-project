import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/Loader';

const AppRouter = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {Object.values(routeConfig).map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
