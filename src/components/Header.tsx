import styles from './Header.module.css'
import logo from '../assets/logo.svg';

export function Header() {
    return (
        // article specifies independent, self-contained content
        <article className={styles.headerContainer}>
            {/* negrito */}
            <strong className={styles.header}>
                <img src={logo} alt="Logotipo Todo" />
                {/* span element which is used to color a part of a text */}
                <p>to<span>do</span></p>
            </strong>
        </article>
    )
}