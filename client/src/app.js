import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home"
import PageFooter from "./components/PageFooter/PageFooter";
import PageHeader from "./components/PageHeader/PageHeader";
import SingleBeerPage from "./pages/SingleBeerPage/SingleBeerPage";
document.title = "Brews & Bites";

const App = () => {
  return (
    <>
      {/* <PageHeader /> */}
      <main className="main-content">
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/beers/:id" component={SingleBeerPage} />

          {/* <Route path="/upload" component={} /> */}

        </Switch>
      </main>
      {/* <PageFooter /> */}
    </>
  );
};
// }

export default App;
