//import icons
import { PencilLine } from 'phosphor-react';

//import css
import styles from './sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/devgustavogantois.png"/>
            <strong>Gustavo Gantois</strong>
            <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={17}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
