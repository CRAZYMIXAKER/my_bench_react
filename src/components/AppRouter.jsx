import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    path={route.path}
                    exact={route.exact}
                    element={route.element}
                    key={route.path}
                />
            )}
            <Route path="/*" element={<Navigate to="/error"/>}/>
        </Routes>
    );
};

export default AppRouter;