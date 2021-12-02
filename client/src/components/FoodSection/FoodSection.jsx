import "./FoodSection.scss";

const FoodSection = (props) => {
  return (
      <>
     
    <li className="food-section" key={props.id}>
    <div className="food-section__background"></div>
    <div className="food-section__main">
      <div className="food-section__name-wrapper">
        <p className="food-section__dish">Dish</p>
        <p className="food-section__description">Cuisine</p>
      </div>
      <div className="food-section__info-wrapper">
        <p className="food-section__dish-entry">{props.dish}</p>
        <p className="food-section__description-entry">{props.cuisine}</p>
      </div>
      </div>

        
    </li>

    
</>
  );
};

export default FoodSection;