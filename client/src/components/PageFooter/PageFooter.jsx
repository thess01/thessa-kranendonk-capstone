const PageFooter = () => {
    <footer className="footer">
        <div className="footer__wrapper-left">
                <Link to="/">Beers</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Contact</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Upload</Link>
                <Link to="/">Login</Link>
                <Link to="/">FAQ</Link>
        </div>
        <div className="footer__wrapper-right">
        <Link to="/"><img className="footer__social-media" src="" /></Link>
        <Link to="/"><img className="footer__social-media" src="" /></Link>
        <Link to="/"><img className="footer__social-media" src="" /></Link>
        </div>
    </footer>
}

export default PageFooter;