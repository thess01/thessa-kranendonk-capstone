import "./HeaderImageBar.scss";
import HeaderImage from '../../assets/images/beer_2.jpg'


const HeaderImageBar = () => {
  return (

     <>
    <img className="image-bar" src={HeaderImage} alt="Brews And Bites" />
    <h1 className="image-bar__header"></h1>
      </>
    
  );
};

export default HeaderImageBar;