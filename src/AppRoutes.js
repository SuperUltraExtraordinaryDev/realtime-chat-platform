import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { NotFoundPage, DashboardPage } from "./pages";

import { PATH } from "./consts";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />

        <Route
          path={PATH.NOTFOUND}
          element={<Navigate to={PATH.DASHBOARD} />}
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
