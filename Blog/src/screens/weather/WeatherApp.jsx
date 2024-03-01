import React from 'react';
import styles from './WeatherApp.module.css'
import styles_g from '../../components/styles/Global.module.css'
// import NavBar from '../../components/navBar/NavBar';
import { useSelector } from "react-redux";
import City from './City';
import Weather from './Weather';

export default function WeatherApp() {
    const cityName = useSelector((state) => state.city.name);
    return (
        <div>
            {/* <NavBar /> */}
            <div className={`${styles_g.container} ${styles.main}`}>
                <City />
                {cityName && <Weather />}
            </div>
        </div>
    );
};