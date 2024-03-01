import React from 'react';
import styles from './Home.module.css'
import styles_g from '../../components/styles/Global.module.css'
// import NavBar from '../../components/navBar/NavBar'
import home_mg from '../../../public/home_img.jpg'
export default function Home() {
    return (
        <div>
            {/* <NavBar/> */}
            <div className={styles.img_bg}>
            </div>
            <h1>Добро пожаловать!</h1>
        </div>
    );
};