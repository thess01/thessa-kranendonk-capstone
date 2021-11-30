import "./FoodSection.scss";

const FoodSection = (props) => {
  return (
      <>
     
    <li className="food-section" key={props.id}>
      <p className="food-section__dish">Dish {props.dish}</p>
        <p className="food-section__description">Cuisine {props.cuisine}</p>
    </li>

    
</>
  );
};

export default FoodSection;