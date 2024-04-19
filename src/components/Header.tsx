import styles from './Header.module.css'

import igniteLogo from '../assets/Ignite simbol.svg'

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <img src={igniteLogo} alt="Logotipo do Ignite"/>
        </header>
    );
}