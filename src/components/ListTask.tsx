import styles from './ListTask.module.css'
import { CheckCircle, Trash } from 'phosphor-react'
import { Checkbox } from 'pretty-checkbox-react';


interface ListTaskProps {
    //id = content 
    id: string;
    content: string;
    isCompleted: boolean;
    onDeleteTask: (task: string) => void;
    onChangeIsComplete: (task: string) => void;
}

export function ListTask({id, isCompleted, content, onDeleteTask, onChangeIsComplete} : ListTaskProps) {

    function handleDeleteComment () {
        onDeleteTask(content);
    }

    function handleChangeIsComplete() {
        onChangeIsComplete(content);
    }

    return (
        <div>
            <ul>
                <li key={content} className={styles.todos}>
                    <div className={styles.tasks}>

                        <input 
                            title='checkbox'
                            type="checkbox"
                            id={content}
                            onClick={handleChangeIsComplete}
                        />

                        <label>
                            <p>{content}</p>
                        </label>

                        <button
                            type='button'
                            title='delete'
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24} />                        
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}