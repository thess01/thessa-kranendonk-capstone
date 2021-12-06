import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home"
import PageFooter from "./components/PageFooter/PageFooter";
import PageHeader from "./components/PageHeader/PageHeader";
import HeaderImageBar from "./components/HeaderImageBar/HeaderImageBar";
import SingleBeerPage from "./pages/SingleBeerPage/SingleBeerPage";
import SearchBar from './components/SearchBar/SearchBar'
import Upload from "./pages/Upload/Upload";
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import LogOut from "./components/LogOut/LogOut";
import EventPage from "./pages/EventPage/EventPage";
document.title = "Brews & Bites";

const App = () => {
  return (
    <>
      <PageHeader />
      <HeaderImageBar />
      <LogOut />
      <main className="main-content">
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/beers/:id" exact component={SingleBeerPage} />

          <Route path='/search' exact component={SearchBar}/>

          <Route path='/search/:searchQuery' exact component={SearchBar}/>

          <Route path="/upload" component={Upload} />

          <Route path="/signup" component={SignUp} />

          <Route path="/login" component={LogIn} />

          <Route path="/events" exact component={EventPage} />

        </Switch>
        <PageFooter />
      </main>
      
    </>
  );
};
// }

export default App;
