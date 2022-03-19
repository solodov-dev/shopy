import MainMenu from "features/routes/components/routes";
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "ui/components/header";
import routes from "features/routes/constants/routes";
import "../styles/App.css";

function App() {
  return (
    <Router>
      <Header>
        <MainMenu />
      </Header>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
