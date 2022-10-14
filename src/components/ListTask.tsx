import styles from './ListTask.module.css'
import { CheckCircle, Trash } from 'phosphor-react'
import { Checkbox } from 'pretty-checkbox-react';

interface ListTaskProps {
    content: string;
    onDeleteTask: (task: string) => void;
}

export function LiskTask({content, onDeleteTask} : ListTaskProps) {

    function handleDeleteComment () {
        onDeleteTask(content)
    }

    return (
        <div className={styles.task} >
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <button className={styles.buttonDelete} onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={15} color="#6495ED" />
                        {/* 2º option */}
                        <Checkbox shape="round" icon={<i className="mdi mdi-check" />}></Checkbox>                    
                    </button>
                    <button className={styles.buttonCheck}>
                        <CheckCircle size={15} color="#6495ED" />
                    </button>
                </div>
            </div>
            <p>{content}</p>
        </div>
    )
}