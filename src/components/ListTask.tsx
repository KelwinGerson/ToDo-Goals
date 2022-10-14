import styles from './ListTask.module.css'
import { CheckCircle, ThumbsUp, Trash } from 'phosphor-react'

interface ListTaskProps {
    content: string;
    onDeleteTaks: (taks: string) => void;
}

export function LiskTask({content, onDeleteTaks} : ListTaskProps) {

    function handleDeleteComment () {
        onDeleteTaks(content)
    }

    return (
        <div className={styles.task} >
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <button className={styles.button} onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={15} color="#6495ED" />
                    </button>
                    <button className={styles.button}>
                        <CheckCircle size={15} color="#6495ED" />
                    </button>
                </div>
            </div>
            <p>{content}</p>
        </div>
    )
}