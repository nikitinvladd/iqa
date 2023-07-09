import './footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-information">
                <div className="contact-us">
                    <h1>Wykorzystaj swoją cyfrową przewagę dzięki IQA</h1>
                    <a className='nav-link btn' href="/konsultation"><li className='nav-btn'>Umów konsultacje</li></a>
                </div>
                <div className="services"><h1>USŁUGI</h1>
                <ul><li><a href="iqamedia.com">STRONY INTERNETOWE</a></li>
                    <li><a href="iqamedia.com">APLIKACJE INTERNETOWE</a></li>
                    <li><a href="iqamedia.com">BOTY</a></li>
                    <li><a href="iqamedia.com">REKLAMA</a></li>
                </ul></div>
                <div className="policies"><h1>POLITYKA</h1>
                <ul><li><a href="iqamedia.com">COOKIE POLICY</a></li>
                    <li><a href="iqamedia.com">PRIVACY POLICY</a></li>
                </ul></div>
                <div className="company"><h1>FIRMA</h1>
                <ul><li><a href="/about">O NAS</a></li>
                    <li><a href="iqamedia.com">INDUSTRIES</a></li>
                </ul></div>
            </div>
            <div className="reserved"><div className="line"></div><p>© 2023 IQA Systems, Inc. All Rights Reserved.</p></div>
        </div>
    )
}

export default Footer;