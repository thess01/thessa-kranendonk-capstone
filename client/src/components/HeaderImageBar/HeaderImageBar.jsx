import "./HeaderImageBar.scss";
import video from '../../assets/videos/beer37.mp4'


const HeaderImageBar = () => {
  return (

     <>
    
    <div className="image__video">
    <video className="video" autoPlay loop muted>
   <  source src={video} type="video/mp4" />
    </video>

    </div>
      </>
    
  );
};

export default HeaderImageBar;