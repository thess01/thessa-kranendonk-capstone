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
    selectedBeerComments: null,
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

  getBeerById = (id) => {
    axios.get(`/api/beers/${id}/comments`)
    .then((response) => {
      this.setState({
        selectedBeerComments: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  addComment = (e) => {
    e.preventDefault();

    let newComment = {
      comment: e.target.comment.value,
      userName: e.target.name.value,
      beer_id: this.props.match.params.id

    };

    let beerId = this.props.match.params.id;
    axios.post(`/api/beers/${beerId}`, newComment)
    .then((response) => {

      let beerId = this.props.match.params.id;
      this.getBeerById(beerId);

    })
    .catch((error) => {
      console.log("Can't post comment")
    })
    e.target.comment.value = "";
  }


  render() {
    const { selectedBeer, selectedBeerComments} = this.state;


    if (this.state.selectedBeer === null) {
      return (
        <div>
          <h1 className="loading">Loading beers...</h1>
        </div>
      );
    }


    

    return (
      <>
        <BeerDetails 
        beer={selectedBeer} />

        {selectedBeer.dishes.map((dish) => (
            <FoodSection key={dish.id}
            dish={dish.dish}
            cuisine={dish.cuisine}
            beerType={dish.beerType} />
        ))} 
        

        <CommentsForm addComment={this.addComment}/>
        
        
        {/* {selectedBeerComments &&  */}
      {selectedBeerComments.map((comment) => (
            <CommentsList 
            key={comment.id}
            comment={comment.comment}
            name={comment.userName}
            timestamp={comment.updated_at}/>
        ))}
        
    </>
    );
  }
}


export default SingleBeerPage;