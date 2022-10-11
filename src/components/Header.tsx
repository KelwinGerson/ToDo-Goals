import styles from './Header.module.css'
import todoLogo from '../assets/todo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="Logotipo do site" />
        </header>
    )
}