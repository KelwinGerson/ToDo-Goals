import { v4 as uuidv4 } from 'uuid';

interface tasksProps {
    id: number,
    title: string,
    isComplete: boolean
}

const tasks = [
    {
        id: uuidv4(),
        title: 'Finish the chanllenge',
        isComplete: true
    },
    {
        id: uuidv4(),
        title: 'Travel from Cosmópolis',
        isComplete: true
    },
    {
        id: uuidv4(),
        title: 'Analista Jr Santander',
        isComplete: true
    }    
]