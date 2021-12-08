import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import "./Home.scss";
import BeerCardList from "../../components/BeerCardList/BeerCardList";
import About from "../../components/About/About";


class Home extends Component {
  state = {
    beers: [],
    errorLoading: false
  };


  componentDidMount() {
    axios
      .get("/api/beers")
      .then((response) => {
        this.setState({
          beers: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {
    const { beers } = this.state;

    if (!this.state.beers) {
      return (
        <div>
          <h1 className="loading">Loading beers...</h1>
        </div>
      );
    }

    return (
      <>
        <About />
        <BeerCardList beers={beers} />
    </>
    );
  }
}

export default Home;