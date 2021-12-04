import "./FoodSection.scss";

const FoodSection = ({foods}) => {
  return (
      <section className="food-section">
     {foods.map(food =>
    <li className="food-section__list" key={food.id}>
    <div className="food-section__background">
      <img className="food-section__image" src={food.food_image} alt={food.dish}/>
    
      <div className="food-section__main">
    
        <p className="food-section__dish-entry">{food.dish}</p>
        <p className="food-section__description-entry">{food.cuisine}</p>
      
      </div>
      </div>

        
    </li>

     )}
</section>
  );
};

export default FoodSection;