import { Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AllPath from "./AllPath";

const AppRoutes = () => {
  const routes = AllPath();

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to={"/HotelDetails"} replace />} />
          {routes.map((route) => {
            return (
              <Route
                key={route.label}
                path={route.to}
                element={<route.Component />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
