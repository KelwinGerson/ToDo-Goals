import styles from '../components/NewTask.module.css'

export function NewTask () {
    return (
        <article>
            <form className={styles.boxNewTask} action="">
                    <textarea className={styles.textAreaTask}
                        name="" 
                        placeholder="Adicione uma nova tarefa..."
                        value=''
                        // required                    
                    />
                <footer>
                    <button className={styles.buttonCreate} type="submit">
                        Criar
                    </button>
                </footer>
            </form>
        </article>
    )
}