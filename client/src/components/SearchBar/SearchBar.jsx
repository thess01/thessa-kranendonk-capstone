import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BeerCardList from "../BeerCardList/BeerCardList";
import "./SearchBar.scss";

class Search extends Component {
  state = {
    query: '',
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchBeers(this.state.query) 
  }

  componentDidMount() {
    const query = this.props.match.params.searchQuery;

    if (query) {
      this.searchBeers(query);
    }
  }

  componentDidUpdate(prevProps) {
    const query = this.props.match.params.searchQuery;
    const prevQuery = prevProps.match.params.searchQuery;
    console.log(prevQuery)
    console.log(prevProps)
    
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
          name="query"
          type="text"
          value={this.state.query}
          onChange={this.handleQueryChange}
        />
        <button onClick={this.handleSubmit} className="search__button">
          Search
        </button>
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
