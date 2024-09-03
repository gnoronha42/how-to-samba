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
        { key: '1', label: <Link  to="/" onClick={() => document.getElementById('why-we-do')?.scrollIntoView({ behavior: 'smooth' })}>{t('why_we_do')}</Link> },
        { key: '2', label: <Link  to="/" onClick={() => document.getElementById('things-we-do')?.scrollIntoView({ behavior: 'smooth' })}>{t('the_things_we_do')}</Link> },
        { key: '3', label: <Link  to="/"  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>{t('says_a_lot')}</Link> },
        { key: '4', label: <Link to="/" onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}>{t('about_us')}</Link> },
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