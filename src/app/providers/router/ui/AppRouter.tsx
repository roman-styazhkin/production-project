import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";
const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(RouteConfig).map(({element, path}) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
export default AppRouter;