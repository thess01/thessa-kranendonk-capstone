import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import "./Home.scss";
import BeerCardList from "../../components/BeerCardList/BeerCardList";
import SearchBar from "../../components/SearchBar/SearchBar";

class Home extends Component {
  state = {
    beers: [],
    errorLoading: false
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
        {/* <SearchBar /> */}
        <BeerCardList beers={beers} />
    </>
    );
  }
}

export default Home;