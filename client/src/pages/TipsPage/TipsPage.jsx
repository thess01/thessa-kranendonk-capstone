import "./TipsPage.scss";
import image1 from '../../assets/images/tips5.jpg'
import image2 from '../../assets/images/tips2.jpg'
import image3 from '../../assets/images/tips3.jpg'
import image4 from '../../assets/images/tips1.jpg'
import image5 from '../../assets/images/tips4.jpg'
import Slide from 'react-reveal/Slide';

const TipsPage = () => {
  return (
    <section className="tips">
      <h1 className="tips__header">Beer And Food Pairings</h1>
      <h3 className="tips__title">
        There are three main things to keep in mind when pairing beer with food.
        Those are the 3 C’s: Cut, Complement and Contrast.
      </h3>
     
      <div className="tips__container">
      <Slide left>
        <div className="tips__wrapper">
          <img className="tips__image" src={image1} alt="Beer and food pairings"/>
          <div className="tips__inner-wrapper">
            <h3 className="tips__semi-header">CUT</h3>
            <p className="tips__3CS">
              This one does just what it says; allows beer to cut through an intense
              flavour. Opposing intensities such as a rich, creamy cheese with a
              hoppy, bitter beer work well together, as the bitterness will cut the
              creaminess from the cheese, making both extremes more approachable. Try
              Mad Tom with a variety of cheeses, ranging from soft to hard, sweet to
              tangy, and you’ll see what we mean.
            </p>
          </div>
        </div>
        </Slide>

        <Slide right>
        <div className="tips__wrapper-reverse">
          <img className="tips__image-reverse" src={image2} alt="Beer and food pairings"/>
          <div className="tips__inner-wrapper-reverse">
            <h3 className="tips__semi-header">COMPLEMENT</h3>
            <p className="tips__3CS">
              This pairing allows similar flavours to complement and add to each
              other. Got a chocolate stout? Pair it with some chocolate cake. Same
              goes for that hint of toffee you get from some of our roasted malts,
              enhancing and complementing a carmelized roast chicken perfectly. Give
              our Double Chocolate Cranberry Stout a try with some chocolate chip
              cookies or brownies, and be ready for a mega load of flavour.
            </p>
          </div>
        </div>
        </Slide>

        <Slide left>
        <div className="tips__wrapper">
          <img className="tips__image" src={image5} alt="Beer and food pairings"/>
          <div className="tips__inner-wrapper">
            <h3 className="tips__semi-header">CONTRAST</h3>
            <p className="tips__3CS">
              Opposites attract; this age old rule also applies to beer. Some of our
              favourite flavour combinations prove this: salty and sweet, sweet and
              sour, and hoppy and spicy. Pair the bitterness of Mad Tom with a spicy
              curry that can stand up to the intense hop profile. With strong flavour
              profiles, you want to contrast so neither the beer nor the food gets
              lost.
            </p>
          </div>
        </div>
        </Slide>

        <Slide right>
        <div className="tips__wrapper-reverse">
          <img className="tips__image-reverse" src={image4} alt="Beer and food pairings"/>
          <div className="tips__inner-wrapper-reverse">
            <h3 className="tips__semi-header">LIGHT BEERS</h3>
            <p className="tips__3CS">
              Lighter ales for lighter meals. Just as you choose certain wines to go
              with certain foods, the same principle applies with beer. Lighter-style
              beers enhance lighter meals like seafood, chicken, salads, casseroles
              and pastas. Ales, on the other hand show more body and malty sweetness,
              so they tend to complement foods that are roasted, broiled or barbecued.
              Even chicken or turkey will benefit from light ales when they’re
              roasted.
            </p>
          </div>
        </div>
        </Slide>

        <Slide left>
        <div className="tips__wrapper">
          <img className="tips__image" src={image3} alt="Beer and food pairings"/>
          <div className="tips__inner-wrapper">
            <h3 className="tips__semi-header">HAVIER BEERS</h3>
            <p className="tips__3CS">
              Heavier ales for red meats and game. Just as you choose certain wines to
              go with certain foods, the same principle applies with beer.
              Lighter-style beers enhance lighter meals like seafood, chicken, salads,
              casseroles and pastas. Ales, on the other hand show more body and malty
              sweetness, so they tend to complement foods that are roasted, broiled or
              barbecued. Even chicken or turkey will benefit from light ales when
              they’re roasted.
            </p>
          </div>
      </div>
      </Slide>
      </div>
    </section>
  );
};

export default TipsPage;
