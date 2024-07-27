import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../views/AppLayout";
import { ROUTE_CONSTANTS } from "../resources/routes";
import { HomePage } from "../views/HomePage";
import { LoginPage } from "../views/LoginPage";
import { SignupPage } from "../views/SignupPage";
import { PageNotFound } from "../views/PageNotFound";
import { Apartments } from "../views/Apartments";


export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={ <AppLayout/> } >
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
        <Route path={ROUTE_CONSTANTS.LOGIN} element={<LoginPage />} />
        <Route path={ROUTE_CONSTANTS.SIGNUP} element={<SignupPage />} />
        <Route path={ROUTE_CONSTANTS.APARTMENTS}>
          <Route index element={<Apartments/>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
