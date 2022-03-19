import MainMenu from "features/routes/components/mainMenu";
import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "ui/components/header";
import "../styles/App.css";
import Logo from "ui/components/logo";
import Pages from "features/routes/components/appRoutes";

function App() {
  return (
    <Router>
      <Header>
        <Logo />
        <MainMenu />
      </Header>
      <Suspense fallback="fallback">
        <Pages />
      </Suspense>
    </Router>
  );
}

export default App;
