import { Link } from "react-router-dom";
import BeerCard from "../../components/BeerCard/BeerCard";
import { Component } from "react";
import axios from "axios";
import "./Home.scss";

class Home extends Component {
  state = {
    query: '',
    beers: [],
    errorLoading: false
  };

  handleQueryChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  getBeerType = (query) => {
    axios
      .get("/api/beers")
      .then((response) => {
          let beers = response.data;
          let beerByType = beers.filter(beer => beer.beerType === query)
          console.log(beerByType)
          this.setState({
              beers: beerByType,
              query: query,
              errorLoading: false
          })
        })
      .catch((error) => {
        this.setState({
          errorLoading: true,
        });
      });
  };

  // handleSearch = (query) => {
    
  //   let beerByType = this.state.beers;

  //   beerByType.filter(beer => beer.beerType === query)
  //   this.setState({
  //       beers: beerByType
  //   })
  // }

  // getBeerByType = (query) => {

  //   let beers = this.state.beers;

  //   return beers.find(beer => beer.beerType === query)
  // }


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

  componentDidUpdate(prevProps) {
    const query = this.props.match.params.query;
    const prevQuery = prevProps.match.params.query;

    // Only get new movies if the query has changed since last setState occurred!
    if (query !== prevQuery) {
        this.getBeerType(query)
    
  }
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
      <section className="search">
        <h2 className="search__header">Search for beers</h2>
        <input
          className="search__input"
          type="text"
          placeholder="Search for..."
          value={this.state.query}
          onChange={this.handleQueryChange}
          />
          {/* <Link className="search__button" to={`/${this.state.query}`}>
          Search
        </Link> */}
        <button onClick={this.getBeerType}>Search</button>
      </section>

      <div className="search__beers-container">
        {this.state.query ? (
          <BeerCard beers={this.state.beers} />
        ) : (
          <p>Please enter a search term above</p>
        )}
        {this.state.errorLoading && (
          <p>There was an error loading search results</p>
        )}
      </div>
        <BeerCard beers={beers} />
    </>
    );
  }
}

export default Home;