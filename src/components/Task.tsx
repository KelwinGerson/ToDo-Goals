import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

// props of task
interface TodosProps {
    id: string;
    title: string;
    isCompleted: Boolean;
    onChangeIsComplete: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function Task({id, isCompleted, title, onDeleteTask, onChangeIsComplete} : TodosProps) {

    function handleDeleteComment () {
        onDeleteTask(id);
    }

    function handleChangeIsComplete() {
        onChangeIsComplete(id);
    }

    return (
        <div>
            { /* <ul> → unordered list */}
            <ul>
                {/* <li> → a list item */}
                <li key={id} className={styles.todos}>
                    <div className={styles.tasks}>
                        {/* box for write task */}
                        <input 
                            title='checkbox'
                            type="checkbox"
                            id={id}
                            onClick={handleChangeIsComplete}
                        />

                        <label>
                            <p>{title}</p>
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