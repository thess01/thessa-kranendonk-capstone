import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BeerCardList from "../BeerCardList/BeerCardList";
import "./SearchBar.scss";

class Search extends Component {
  state = {
    query: "",
    beers: [],
    errorLoading: false,
  };

  handleQueryChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  searchBeers = (query) => {
    axios
      .get(`/api/beers/search/${query}`)
      .then((response) => {
          console.log(response.data)
        this.setState({
          errorLoading: false,
          query: query,
          beers: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          errorLoading: true,
        });
      });
  };

  componentDidMount() {
    const query = this.props.match.params.searchQuery;

    if (query) {
      this.searchBeers(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const query = this.state.query;
    const prevQuery = prevState.query;

    
    if (query !== prevQuery) {
      this.searchBeers(query);
    }
  }

  render() {
    return (
      <section className="search">
        <h2 className="search__title">Search for beers</h2>
        <input
          placeholder="Search for..."
          className="search__input"
          type="text"
          value={this.state.query}
          onChange={this.handleQueryChange}
        />
        <Link className="search__button" to={`/search/${this.state.query}`}>
          Search
        </Link>
        <div className="search__beers-container">
          {this.state.query ? 
          (
            <BeerCardList beers={this.state.beers} />
          ) : (
            <p className="search__message">Enter your search term above</p>
          )}
          {this.state.errorLoading && (
            <p className="search__error">There was an error loading your search results</p>
          )}
        </div>
      </section>
    );
  }
}

export default Search;
