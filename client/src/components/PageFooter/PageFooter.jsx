import {Link} from "react-router-dom";
import footer from "../../assets/images/footer.png";
import instagram from "../../assets/images/instagram.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import './PageFooter.scss'

const PageFooter = () => {
    return (
    <footer className="footer">
        {/* <img className="footer__background" src={footer} alt="footer" /> */}
        <div className="footer__wrapper-left">
                <Link className="footer__link" to="/">Beers</Link>
                <Link className="footer__link" to="/">Careers</Link>
                <Link className="footer__link" to="/">Contact</Link>
                <Link className="footer__link" to="/">About Us</Link>
                <Link className="footer__link" to="/upload">Upload</Link>
                <Link className="footer__link" to="/login">Login</Link>
              
        </div>
        <div className="footer__wrapper-right">
            <h2 className="footer__header">Follow Us</h2>
        <div className="footer__link-wrapper">
            <Link to="/"><img className="footer__social-media" src={instagram} /></Link>
            <Link to="/"><img className="footer__social-media" src={facebook} /></Link>
            <Link to="/"><img className="footer__social-media" src={twitter} /></Link>
        </div>
        </div>
    </footer>
    )
}

export default PageFooter;