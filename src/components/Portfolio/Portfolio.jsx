import "./Portfolio.css";

function Portfolio () {
    return (
        <div className="portfolio">
            <h3 className="portfolio__header">Портфолио</h3>
            <div className="portfolio__container">
                <a href="https://github.com/AlexeyKudr/how-to-learn" className="portfolio__links" target="_blank" rel="noreferrer">
                    <p className="portfolio__link">Статичный сайт</p>
                    <div className="portfolio__arrow" />
                </a>
                <a href="https://github.com/AlexeyKudr/russian-travel" className="portfolio__links" target="_blank" rel="noreferrer">
                    <p className="portfolio__link">Адаптивный сайт</p>
                    <div className="portfolio__arrow" />
                </a>
                <a href="https://github.com/AlexeyKudr/react-mesto-api-full-gha" className="portfolio__links" target="_blank" rel="noreferrer">
                    <p className="portfolio__link">Одностраничное приложение</p>
                    <div className="portfolio__arrow" />
                </a>
            </div>
        </div>
    );
};

export default Portfolio;
