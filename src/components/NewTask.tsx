import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from '../components/NewTask.module.css'
import { LiskTask } from './ListTask'

export function NewTask () {

    const [tasks, setTasks] = useState([
        ''
    ])

    const [newTask, setNewTask ] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event?.preventDefault()
        setTasks([...tasks, newTask]);
        setNewTask('');
    }

    function handleNewTaskChange (event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    return (
        <article>
            <form onSubmit={handleCreateNewTask} className={styles.boxNewTask} action="">
                    <textarea className={styles.textAreaTask}
                        name='task'
                        placeholder="Adicione uma nova tarefa..."
                        value={newTask}
                        onChange={handleNewTaskChange}
                        onInvalid={handleNewTaskInvalid}
                        required
                    />
                <footer>
                    <button className={styles.buttonCreate} type='submit' >
                        <img src="src/assets/Layer 2.png" alt="" />
                        Criar
                    </button>
                </footer>
            </form>

            <div className={styles.taskList}>
                {tasks.map(task => {
                    return (
                        <LiskTask
                            key={task}
                            content={task} onDeleteTaks={function (taks: string): void {
                                throw new Error('Function not implemented.')
                            } }                        
                        />
                    )
                })}
            </div>
        </article>
    )
}