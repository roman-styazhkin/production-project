import {Suspense} from "react";
import {Route, Routes} from "react-router";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <Routes>
                {Object.values(routeConfig).map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;