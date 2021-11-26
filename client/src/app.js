import { Route, Switch } from "react-router-dom";
import "./App.scss";
import PageFooter from "./components/PageFooter/PageFooter";
import PageHeader from "./components/PageHeader/PageHeader";
document.title = "Brews & Bites";

const App = () => {
  return (
    <>
      <PageHeader />
      <main className="main-content">
        <Switch>
          <Route path="/" exact component={} />

          <Route path="/beers/:beerId" component={} />

          <Route path="/upload" component={} />

        </Switch>
      </main>
      <PageFooter />
    </>
  );
};
// }

export default App;
