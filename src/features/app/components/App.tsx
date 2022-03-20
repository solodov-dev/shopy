import MainMenu from "features/routes/components/mainMenu";
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "ui/components/header";
import Logo from "ui/components/logo";
import Pages from "features/routes/components/pages";
import Loader from "ui/components/loader";

function App() {
  return (
    <Router>
      <Header>
        <Logo />
        <MainMenu />
      </Header>
      <Suspense fallback={<Loader/>}>
        <Pages />
      </Suspense>
    </Router>
  );
}

export default App;
