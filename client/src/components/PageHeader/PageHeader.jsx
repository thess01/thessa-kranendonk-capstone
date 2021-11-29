import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/Logo_1.png";
import "./PageHeader.scss";

const PageHeader = () => {
    return (
        <header className="pageheader">
            <div className="pageheader-wrapper">
                <Link to="/"><img className="pageheader-logo" src={logo} alt="Brews And Bites" /></Link>
                <ul className="pageheader__list">
                    <li className="pageheader__list-item">
                        <NavLink to="/" exact className={(isActive) => "pageheader__link" + (isActive ? "--active" : "")}>
                            Beers
                        </NavLink>
                    </li>


                    <li className="pageheader__list-item">
                        <NavLink to="/upload" exact className={(isActive) => "pageheader__link" + (isActive ? "--active" : "")}>
                            Upload
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