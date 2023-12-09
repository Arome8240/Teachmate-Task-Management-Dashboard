import { defineStore } from 'pinia';

type Task = {
    title: string,
    description: string,
    completed: boolean,
    important: boolean,
    date: Date
}

interface TaskStoreState {
    tasks: Task[];
}

export let useTaskStore = defineStore('taskStore', {
    state: (): TaskStoreState => ({
        allTasks: [],
        log: '2'
    }),
});

