import React from 'react';
import styles from './NavBar.module.css'
import styles_g from '../styles/Global.module.css'
import Logo from '../../assets/images/logo.png'
import { useNavigate, useLocation } from 'react-router-dom'


export default function NavBar() {
    const nav = useNavigate()
    const loc = useLocation();

  const handleNav = (path) => {
    nav(path);
  };

  const isActive = (path) => {
    return location.pathname === path ? styles.active : '';
  };
    return (
        <nav className={styles.navbar}>
            <div className={styles_g.container}>
                <ul className={styles.navbar__list}>
                    <li className={`${styles.navbar__item}`} onClick={() => handleNav('/')} ><img src={Logo} alt="" /></li>
                    <li className={`${styles.navbar__item} ${isActive('/')}`} onClick={() => nav('/')} >Главная</li>
                    <li className={`${styles.navbar__item} ${isActive('/blog/')}`} onClick={() => nav('/blog/')} >Блог</li>
                    <li className={`${styles.navbar__item} ${isActive('/calc/')}`} onClick={() => nav('/calc/')} >Калькулятор</li>
                    <li className={`${styles.navbar__item} ${isActive('/count/')}`} onClick={() => nav('/count/')} >Счётчик</li>
                    <li className={`${styles.navbar__item} ${isActive('/weather/')}`} onClick={() => nav('/weather/')} >Погода</li>
                    <li className={`${styles.navbar__item} ${isActive('/note/')}`} onClick={() => nav('/note/')} >Заметки</li>
                    {/* <li className={`${styles.navbar__item} ${isActive('/walletconver/')}`} onClick={() => nav('/walletconver/')} >Конвертер валют</li> */}
                </ul>
            </div>
        </nav>
    );
};