import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Animation from "../BeerAnimation/BeerAnimation";
import LogOut from "../LogOut/LogOut";
import "./PageHeader.scss";

const PageHeader = () => {

    

    return (
        <header className="pageheader">
            <div className="pageheader__wrapper">
                <Link className="pageheader__logo" to="/"><Animation /></Link>
                <ul className="pageheader__list">
                    <li className="pageheader__list-item">
                     
                        <NavLink to="/" exact className={(isActive) => "pageheader__link" + (isActive ? "--active" : "")}>
                            Beers
                        </NavLink>
                    </li>
                    <li className="pageheader__list-item">
                        <NavLink to="/search" exact className={(isActive) => "pageheader__link" + (isActive ? "--active" : "")}>
                            Search
                        </NavLink>
                    </li>


                    <li className="pageheader__list-item">
                        <NavLink to="/upload" exact className={(isActive) => "pageheader__link" + (isActive ? "--active" : "")}>
                            Upload
                        </NavLink>
                    </li>
                    <li className="pageheader__list-item">
                        <NavLink to="/events" exact className={(isActive) => "pageheader__link" + (isActive ? "--active" : "")}>
                            Events
                        </NavLink>
                    </li>

                    <li className="pageheader__list-item">
                        <NavLink to="/pairing-tips" exact className={(isActive) => "pageheader__link" + (isActive ? "--active" : "")}>
                            Tips
                        </NavLink>
                    </li>

                    <li className="pageheader__list-item">
                        <NavLink to="/login" exact className={(isActive) => "pageheader__link" + (isActive ? "--active" : "")}>
                            Login
                        </NavLink>
                    </li>
                </ul>
           
            </div>
        </header>
    )
}

export default PageHeader;