import BeerCard from "../../components/BeerCard/BeerCard";
import { Component } from "react";
import axios from "axios";
import "./Home.scss";

class Home extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get("/api/beers")
      .then((response) => {
        console.log(response.data)
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

    if (this.state.beers === null) {
      return (
        <div>
          <h1 className="loading">Loading beers...</h1>
        </div>
      );
    }

    return (
      <>
        <BeerCard beers={beers} />
    </>
    );
  }
}

export default Home;