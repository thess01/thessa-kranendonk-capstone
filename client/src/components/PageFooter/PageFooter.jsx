import { NavLink} from "react-router-dom";
import instagram from "../../assets/images/instagram.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import './PageFooter.scss'

const PageFooter = () => {
    return (
    <footer className="footer">
        <div className="footer__wrapper-left">
                <NavLink  to="/" exact className={(isActive) => "footer__link" +(isActive ? "--active" : "")}>Beers</NavLink>
                <NavLink  to="/careers" exact className={(isActive) => "footer__link" +(isActive ? "--active" : "")}>Careers</NavLink>
                <NavLink  to="/contact" exact className={(isActive) => "footer__link" +(isActive ? "--active" : "")}>Contact</NavLink>
                <NavLink  to="/aboutus" exact className={(isActive) => "footer__link" +(isActive ? "--active" : "")}>About Us</NavLink>
                <NavLink  to="/upload" exact className={(isActive) => "footer__link" +(isActive ? "--active" : "")}>Upload</NavLink>
                <NavLink  to="/login" exact className={(isActive) => "footer__link" +(isActive ? "--active" : "")}>Login</NavLink>
                <NavLink  to="/search" exact className={(isActive) => "footer__link" +(isActive ? "--active" : "")}>Search</NavLink>
              
        </div>
        <div className="footer__wrapper-right">
            <h2 className="footer__header">Follow Us</h2>
        <div className="footer_<NavLink-wrapper">
            <NavLink to="/"><img className="footer__social-media" src={instagram} alt="Instagram"/></NavLink>
            <NavLink to="/"><img className="footer__social-media" src={facebook} alt="Facebook"/></NavLink>
            <NavLink to="/"><img className="footer__social-media" src={twitter} alt="Twitter"/></NavLink>
        </div>
        </div>
    </footer>
    )
}

export default PageFooter;