import './App.css';
import React from "react";
import { AppRoutes} from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const App: React.FC = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

