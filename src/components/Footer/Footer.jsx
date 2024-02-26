import "./Footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const hiddenFooter = ["/", "/movies", "/saved-movies"].includes(location.pathname);

    if (!hiddenFooter) {
        return null;
    }
    return (
        <div className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__info">
                <p className="footer__year">© 2024</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru/">
                        Яндекс.Практикум
                    </a>
                    <a className="footer__link" href="https://github.com/">
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
