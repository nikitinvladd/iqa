import { changeLanguage } from 'i18next';
import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../main/main.css';

const Header = () => {
    const [menu_class, setMenuClass] = useState("nav-menu");
    const [burger_class, setBurgerClass] = useState("hamburger");
    const [openMenu, setOpen] = useState(false);

    const updateMenu = () => {
        if(!openMenu) {
            setBurgerClass("hamburger active");
            setMenuClass("nav-menu active");
        }else {
            setBurgerClass("hamburger");
            setMenuClass("nav-menu");
        }
        setOpen(!openMenu)
    }
    return(
        <div className="header">
                        <nav className='nav'>
                <div className="logo"><a href="/"><img src="/img/logo.png" alt="" /></a>
                <ul className="nav-menu-main">
                    <li><a className='nav-link' href="/">Home</a></li>
                    <li><a className='nav-link' href="/offer">Oferta</a>
                        <ul>
                            <li><a className='nav-link' href="/webapp">Aplikacje Internetowe</a></li>
                            <li><a className='nav-link' href="/websites">Strony Internetowe</a></li>
                            <li><a className='nav-link' href="/bots">Boty</a></li>
                            <li><a className='nav-link' href="/ads">Reklama</a></li>
                            <li><a className='nav-link' href="/">Sekretna Formula Sukcesu</a></li>
                        </ul>
                    </li>
                    <li><a className='nav-link' href="/about">O nas</a></li></ul></div>
                <ul className={menu_class}>
                    <li><a className='nav-link' href="/">Home</a></li>
                    <li><a className='nav-link' href="/offer">Oferta</a>
                        <ul>
                            <li><a className='nav-link' href="/webapp">Aplikacje Internetowe</a></li>
                            <li><a className='nav-link' href="/websites">Strony Internetowe</a></li>
                            <li><a className='nav-link' href="/bots">Boty</a></li>
                            <li><a className='nav-link' href="/ads">Reklama</a></li>
                            <li><a className='nav-link' href="/">Software Engeniering</a></li>
                        </ul>
                    </li>
                    <li><a className='nav-link' href="/about">O nas</a></li>
                    <a className='nav-link btn' href="/konsultation"><li className='nav-btn'>Umów konsultacje</li></a>
                </ul>
                <div className="nav-button-dropdown">
                <a className='nav-link btn' href="/konsultation"><li className='nav-btn'>Umów konsultacje</li></a>
                    <DropdownButton onClick={() => changeLanguage("pl")} id="dropdown" title="PL">
                    <Dropdown.Item onClick={() => changeLanguage("en")}>EN</Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage("ru")}>RU</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div onClick={updateMenu}className={burger_class}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    )
}

export default Header;