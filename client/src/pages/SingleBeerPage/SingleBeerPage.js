import BeerDetails from "../../components/BeerDetails/BeerDetails";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import { Component } from "react";
import axios from "axios";
import "./SingleBeerPage.scss";

class SingleBeerPage extends Component {
  state = {
    selectedBeer: null,
    selectedBeerComments: null
  };

  componentDidMount() {
      const id = this.props.match.params.id;
    Promise.all([
      axios.get(`/api/beers/${id}`),
      axios.get(`/api/beers/${id}/comments`)
    ])
      .then(([res1, res2]) => {
       
        this.setState({
          selectedBeer: res1.data,
          selectedBeerComments: res2.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addComment = (e) => {
    e.preventDefault();

    let newComment = {
      comment: e.target.comment.value,
      userName: e.target.name.value
    };

    let beerId = this.props.match.params.id;
    axios.post(`/api/beers/${beerId}`, newComment)
    .then((response) => {
        this.setState({
          selectedBeerComments: response.data,
        })
    })
  }


  render() {
    const { selectedBeer, selectedBeerComments } = this.state;

    if (this.state.selectedBeer === null) {
      return (
        <div>
          <h1 className="loading">Loading beers...</h1>
        </div>
      );
    }

    return (
      <>
        <BeerDetails beer={selectedBeer} />
        <CommentsForm 
        // comment={selectedBeerComments}
        addComment={this.addComment}/>
        
    </>
    );
  }
}

export default SingleBeerPage;