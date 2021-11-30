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
    selectedBeerComments: [],
    foods: []
  };

  componentDidMount() {
      const id = this.props.match.params.id;
    Promise.all([
      axios.get(`/api/beers/${id}`),
      axios.get(`/api/beers/${id}/comments`),
      axios.get(`/api/beers/foods`)
    ])
      .then(([res1, res2, res3]) => {
      //  console.log(res3.data)
        this.setState({
          selectedBeer: res1.data,
          selectedBeerComments: res2.data,
          foods: res3.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // componentDidUpdate(prevProps) {
  //   const beerId = this.props.match.params.id;
  //   const prevBeerId = prevProps.match.params.id;

  //   if (this.props.selectedBeerComments.length !== prevProps.selectedBeerComments.length) {
  //     this.getBeerCommentsById(beerId);
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // }
  // getBeerCommentsById = (id) => {
  //   axios
  //     .get(`/api/beers/` + id)
  //     .then((response) => {
  //       this.setState({
  //         selectedBeerComments: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


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
        this.setState({
          selectedBeerComments: response.data,
        })
    })
  }

  // findFoods = (food) => {
  //   return food.beerType === this.state.selectedBeer.beerType;

  // }

  render() {
    const { selectedBeer, selectedBeerComments , foods} = this.state;

    // let foods = this.state.foods;
    // if (selectedBeer) {
    //   foods = this.state.foods.filter((food) => {
    //     return food.beerType === selectedBeer.beerType;
    //   });
    // }

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
{/* 
        {foods.map((food) => (
            <FoodSection key={food.id}
            dish={food.dish}
            cuisine={food.cuisine}
            beerType={food.beerType} />
        ))} */}
        

        <CommentsForm addComment={this.addComment}/>
        
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