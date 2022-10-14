import { Plus, Scroll } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from '../components/NewTask.module.css'
import { LiskTask } from './ListTask'

export function NewTask() {

    const [tasks, setTasks] = useState([
        'Finish this project!'
    ])

    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event?.preventDefault()
        setTasks([...tasks, newTask]);
        setNewTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    function deleteTask (taskToDelete: string) {
        const commentsWithoutDeleteOne = tasks.filter(comment => {
            return comment != taskToDelete;
        })
        setComments(commentsWithoutDeleteOne)
    }

    return (
        <article>
            <header className={styles.infoHeader}>
                <div className={styles.taskCreated}>
                    Tarefas criadas 0
                </div>
                <div className={styles.taskDone}>
                    Concluídas 0
                </div>
            </header>
            {/*                 
                THIS IS APPER IF DON'T EXIST WITHOUT TASK
                <Scroll size={50} />
                <div className={styles.pendentTask}>
                    Você ainda não tem tarefas cadastradas
                </div>
                <div className={styles.pendentTask}>
                    Crie tarefas e organize seus itens a fazer
                </div> */}

            {/* CREATE A NEW TASK */}
            <form onSubmit={handleCreateNewTask} className={styles.boxNewTask}>
                <textarea className={styles.textAreaTask}
                    name='task'
                    placeholder="Adicione uma nova tarefa..."
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    // required text on comment box
                    required
                />
                {/** BOTÃO */}
                <footer>
                    <button className={styles.buttonCreate} type='submit' value='send'>
                        <Plus size={20} />
                        Criar
                    </button>
                </footer>
            </form>
            
            {/* TASK LIST */}
            <div className={styles.taskList}>
                {tasks.map(task => {
                    return (
                        <LiskTask
                            key={task}
                            content={task} 
                            onDeleteTask={deleteTask}
                        />
                    )
                })}
            </div>
        </article>
    )
}

function setComments(commentsWithoutDeleteOne: string[]) {
    throw new Error('Function not implemented.')
}
