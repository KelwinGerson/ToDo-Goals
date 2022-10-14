import styles from './TaskBox.module.css'

export function TaskBox(){
    return(
        <article className={styles.fullBox}>
            <header className={styles.infoHeader}>
                <div className={styles.taskCreated}>Tarefas criadas 0</div>
                <div className={styles.taskDone}>Concluídas 0</div>
            </header>
                <div className={styles.boxTask}>
                        <div>
                            <img className={styles.pendentTaskImg} src="src/assets/Clipboard.png" alt="" />
                            <div className={styles.pendentTask}>
                            Você ainda não tem tarefas cadastradas
                            </div>
                            <div className={styles.pendentTask}>
                            Crie tarefas e organize seus itens a fazer
                            </div>
                        </div>
                </div>
        </article>
    )
}