import './navbar.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../../locale/i18next";

const Profile = () => {
    const { i18n } = useTranslation();
    const { language } = i18n;

    return (
        <div className="navbar">
            <Link to="/" className="navbar_logo"></Link>

            <ul className="navbar_language">

                <li className="navbar_language-item">
                    <Link to="#" className={`navbar_language-link ${language.includes('pt') ? '-selected' : ''}`} onClick={() => i18n.changeLanguage("pt")}>PT</Link>
                </li>
                <li className="navbar_language-item">
                    <Link to="#" className={`navbar_language-link ${language.includes('es') ? '-selected' : ''}`} onClick={() => i18n.changeLanguage("es")}>ES</Link>
                </li>
                <li className="navbar_language-item">
                    <Link to="#" className={`navbar_language-link ${language.includes('en') ? '-selected' : ''}`} onClick={() => i18n.changeLanguage("en")}>EN</Link>
                </li>
                <li className="navbar_language-item">
                    <Link to="#" className={`navbar_language-link ${language.includes('tr') ? '-selected' : ''}`} onClick={() => i18n.changeLanguage("tr")}>TR</Link>
                </li>
                <li className="navbar_language-item">
                    <Link to="#" className={`navbar_language-link ${language.includes('ar') ? '-selected' : ''}`} onClick={() => i18n.changeLanguage("ar")}>AR</Link>
                </li>
            </ul>

        </div>
    );
}

export default Profile;
