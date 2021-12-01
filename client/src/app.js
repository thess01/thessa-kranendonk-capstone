import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home"
import PageFooter from "./components/PageFooter/PageFooter";
import PageHeader from "./components/PageHeader/PageHeader";
import SingleBeerPage from "./pages/SingleBeerPage/SingleBeerPage";
import Upload from "./pages/Upload/Upload";
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
document.title = "Brews & Bites";

const App = () => {
  return (
    <>
      {/* <PageHeader /> */}
      <main className="main-content">
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/beers/:id" component={SingleBeerPage} />

          <Route path='/beers/:searchQuery' component={Home}/>

          <Route path="/current" component={Upload} />

          <Route path="/signup" component={SignUp} />

          <Route path="/login" component={LogIn} />

        </Switch>
      </main>
      {/* <PageFooter /> */}
    </>
  );
};
// }

export default App;
