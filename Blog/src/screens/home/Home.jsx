import React from 'react';
import styles from './Home.module.css'
import styles_g from '../../components/styles/Global.module.css'
import NavBar from '../../components/navBar/NavBar'

export default function Home() {
    return (
        <div>
            <NavBar/>
            <h1>This is Home component</h1>
        </div>
    );
};