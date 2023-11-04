import './what-we-do.css';

const WhatWeDo = () => {
return(
    <div id="whatwedo-navigation" className="information">
        <div className="info-text">
            <p>O F E R T A</p>
            <h1>Czym się zajmujemy?</h1>
            <p className="info-p">Esteśmy mlodą doswiadczoną firmą software engineering. Juz jesteśmy gotowi zrealizować twoj project! Czekamy na ciebie i twoje koncepcje!</p>
        </div>
        <div className="information-card">
            <ul>
                <li>
                <div className="card-information">
                <img src="/img/desktop-solid.svg" alt="" />
                    <h1>Strony | Aplikacji Internetowe</h1>
                    <p>Twoja wizytówka w sieci - profesjonalne strony internetowe dla Twojego biznesu.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                <div className="card-information">
                <img src="/img/cart.svg" alt="" />
                    <h1>Sklepy Internetowe</h1>
                    <p>Zrealizuj swoje marzenia cyfrowo.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                <div className="card-information">
                <img src="/img/adversting.svg" alt="" />
                    <h1>Facebook Ads</h1>
                    <p>Zrób wybuchową aktywność z naszą firmą.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                <div className="card-information">
                <img src="/img/security.svg" alt="" />
                    <h1>Opieka nad stroną | aplikacją</h1>
                    <p>Gwarantujemy bezpieczenswo i opieke nad twoim projektem.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                <div className="card-information">
                <img src="/img/steps.svg" alt="" />
                    <h1>Pozycjonowanie</h1>
                    <p>Zrobimy twoj projekt wygodnym do klientów, adaptywnym, do urzywania.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                <div className="card-information">
                <img src="/img/steps.svg" alt="" />
                    <h1>Software Engineering</h1>
                    <p>Zrealizuj swoje pomysly w cyfrowy swiat.</p>
                </div>
                </li>
            </ul>
        </div>
    </div>
)
}

export default WhatWeDo;
