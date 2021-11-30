import "./FoodSection.scss";

const FoodSection = (props) => {
  return (
      <>
     
    <li className="food-section" key={props.id}>
      <p className="food-section__dish">{props.dish}</p>
        <p className="food-section__description">{props.cuisine}</p>
    </li>

    
</>
  );
};

export default FoodSection;