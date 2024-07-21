import styles from './header.module.css';

import IgniteLogo from '../assets/Ignite-logo.svg';

export function Header() {
     
    return ( 
        <header className={styles.header}>
            <img src={IgniteLogo} alt="" />
            <h2>Ignite Feed</h2>
        </header>
    );
}
