import './main.css';
import CarouselBox from '../CarouselBox/CarouselBox';

const Main = () => {
    return(
        <div id="main-navigation" className="main">
            {/* <div className="main-information">
                <div className="main-text">
                    <div className="star">★★★★★</div>
                    <h1>Strony | Aplikacji internetowe</h1>
                    <p className="main-p-info">Responsywna strona | aplikacja internetowa to idealny sposób aby zaprezentować siebie lub swoją firmę w internecie.</p>
                    <div className="button">
                    <a href="/konsultation">Umów konsultacje</a>
        </div>
            </div>
                <div className="main-img">
                    <img className="business main-animation" src="/img/busines meting.jpg" alt="" />
                    <img className="meting main-animation" src="/img/meting.jpg" alt="" />
                    <img className="tablet main-animation" src="/img/tablet.jpg" alt="" />
                </div>
            </div> */}
            <CarouselBox/>
        </div>
    )
}

export default Main;