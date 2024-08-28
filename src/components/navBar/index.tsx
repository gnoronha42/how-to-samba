import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaFlagUsa, FaFlag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar: React.FC = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const languageMenu = (
        <Menu>
            <Menu.Item key="en" onClick={() => changeLanguage('en')}>
                <FaFlagUsa style={{ marginRight: 8 }} /> English
            </Menu.Item>
            <Menu.Item key="pt" onClick={() => changeLanguage('pt')}>
                <FaFlag style={{ marginRight: 8 }} /> Português
            </Menu.Item>
        </Menu>
    );

    const items = [
        { key: '1', label: <a href="#why-we-do">{t('why_we_do')}</a> },
        { key: '2', label: <a href="#things-we-do">{t('the_things_we_do')}</a> },
        { key: '3', label: <a href="#about-us">{t('about_us')}</a> },
        { key: '4', label: <a href="#portfolio">{t('says_a_lot')}</a> },
        { key: '5', label: (
            <Dropdown overlay={languageMenu} className="language-switch">
                <Button>
                    <FaFlagUsa style={{ marginRight: 8 }} /> {t('language')}
                </Button>
            </Dropdown>
        )},
    ];

    return (
        <Menu mode="horizontal"  className="custom-menu" style={{background: 'transparent'}} items={items} />
    );
};

export default NavBar;