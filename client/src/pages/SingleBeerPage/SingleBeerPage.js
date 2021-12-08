import BeerDetails from "../../components/BeerDetails/BeerDetails";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsList from "../../components/CommentsList/CommentsList";
import FoodSection from "../../components/FoodSection/FoodSection";
import { Component } from "react";
import axios from "axios";
import "./SingleBeerPage.scss";

class SingleBeerPage extends Component {
  state = {
    selectedBeer: null,
    errorLoading: false,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/beers/${id}`)
      .then((res) => {
        this.setState({
          selectedBeer: res.data,
          errorLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorLoading: true,
        });
      });
  }

  getBeerById = (id) => {
    axios
      .get(`/api/beers/${id}`)
      .then((response) => {
        this.setState({
          selectedBeer: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorLoading: true,
        });
      });
  };

  addComment = (e) => {
    e.preventDefault();

    let newComment = {
      comment: e.target.comment.value,
      userName: e.target.name.value,
      beer_id: this.props.match.params.id,
    };

    let beerId = this.props.match.params.id;
    axios
      .post(`/api/beers/${beerId}`, newComment)
      .then((response) => {
        let beerId = this.props.match.params.id;
        this.getBeerById(beerId);
      })
      .catch((error) => {
        console.log("Can't post comment");
      });
    e.target.comment.value = "";
  };

  handleDeleteComment = (commentId) => {
    let beer_id = this.props.match.params.id;
    axios.delete(`/api/beers/${beer_id}/comments/${commentId}`).then(() => {
      this.getBeerById(beer_id);
    });
  };

  
  handleEditBeer = (id) => {
    let beer_id = this.props.match.params.id;
    axios.put(`api/beers/${beer_id}/edit`)
    .then(response => {
      this.getBeerById(beer_id);
    })
  }

  render() {
    const { selectedBeer } = this.state;

    if (!this.state.selectedBeer) {
      return (
        <div>
          <h1 className="loading">Loading beers...</h1>
        </div>
      );
    }

    return (
      <>
        <BeerDetails beer={selectedBeer} handleEditBeer={this.handleEditBeer} />
        <FoodSection foods={this.state.selectedBeer.dishes} />
        <CommentsForm addComment={this.addComment} />

        <div className="single-beer-page__container">

          {this.state.selectedBeer.comments ? (
            <CommentsList
              comments={this.state.selectedBeer.comments}
              handleDeleteComment={this.handleDeleteComment}
            />
          ) : (
            <p>Leave a comment</p>
          )}
          {this.state.errorLoading && <p>No comments yet</p>}
        </div>
      </>
    );
  }
}

export default SingleBeerPage;
