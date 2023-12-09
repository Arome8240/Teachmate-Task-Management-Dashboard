<template>
    <div class="p-5 bg-[#121212] h-screen">

        <h1 class="text-2xl text-white text-center font-bold">Simple Task Management System</h1>

        <div class="flex space-x-3 p-5 justify-center">
            <button @click="filterTask('all')" :class="filterValue === 'all' ? 'bg-yellow-700 border-0' : ''"
                class="border text-white px-2 rounded-full hover:bg-yellow-700 hover:border-none">All</button>
            <button @click="filterTask('pending')" :class="filterValue === 'pending' ? 'bg-yellow-700 border-0' : ''"
                class="border text-white px-2 rounded-full hover:bg-yellow-700 hover:border-none">Pending</button>
            <button @click="filterTask('completed')" :class="filterValue === 'completed' ? 'bg-yellow-700 border-0' : ''"
                class="border text-white px-2 rounded-full hover:bg-yellow-700 hover:border-none">Completed</button>
            <button @click="filterTask('important')" :class="filterValue === 'important' ? 'bg-yellow-700 border-0' : ''"
                class="border text-white px-2 rounded-full hover:bg-yellow-700 hover:border-none">Important</button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <card v-for="(task, i) in tasks" @edit-task="editTask(i)" @delete-task="deleteTask(i)" :key="i" :task="task" />
            <AddCard @open-modal="openTask" />
        </div>

        <!--New Task Modal-->
        <div class="fixed inset-0 z-50 overflow-hidden" v-if="toggleModal">
            <div class="text-black flex justify-center items-center fixed overflow-x-hidden overflow-y-hidden z-40 inset-0">
                <div class="relative">
                    <div class="bg-[#1b1c1b] min-w-[400px] rounded-md p-3 z-50" @click.stop>
                        <div class="flex justify-end">
                            <button @click="closeTask">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-white/20" width="20" height="20"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41L9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12L7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z" />
                                </svg>
                            </button>
                        </div>
                        <h1 class="text-white text-2xl font-bold mt-5">Create A Task</h1>

                        <div class="mt-5 space-y-2">

                            <div>
                                <h1 class="text-white font-bold">Title</h1>
                                <input type="text" v-model="newTask.title" placeholder="Enter title here"
                                    class="bg-black outline-none text-white p-2 w-full rounded-md">
                            </div>

                            <div>
                                <h1 class="text-white font-bold">Description</h1>
                                <textarea type="text" placeholder="Enter title here" v-model="newTask.description"
                                    class="bg-black outline-none text-white p-2 w-full rounded-md resize-none"></textarea>
                            </div>

                            <div>
                                <h1 class="text-white font-bold">Date</h1>
                                <div class="flex bg-black items-center px-2">
                                    <input type="date" v-model="selectedDate"
                                        class="bg-transparent outline-none text-white p-2 w-full rounded-md">
                                    <span class="custom-calendar-icon">&#128197;</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-2 px-2 space-y-2">
                            <div class="w-full flex justify-between">
                                <h1 class="text-white">Toggle Important</h1> <input v-model="newTask.important"
                                    type="checkbox">
                            </div>
                            <div class="w-full flex justify-between">
                                <h1 class="text-white">Toggle Completed</h1> <input v-model="newTask.completed"
                                    type="checkbox">
                            </div>
                        </div>

                        <div class="justify-end flex mt-2">
                            <button v-if="updateVal" @click="updateTask(ind)"
                                class="bg-yellow-600 hover:bg-yellow-400 shadow-none p-2 text-white rounded-full">
                                Update Task
                            </button>
                            <button v-else @click="addTask"
                                class="bg-yellow-600 hover:bg-yellow-400 shadow-none p-2 text-white rounded-full">Add
                                Task</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inset-0 z-39 opacity-90 bg-black w-full absolute h-full"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore'
import { storeToRefs } from 'pinia'
const toast = useToast()

const taskStore = useTaskStore()

const { allTasks } = storeToRefs(taskStore)
const tasks = ref(allTasks.value)

const toggleModal = ref<Boolean>(false)
const ind = ref<Number>(0)
const updateVal = ref<Boolean>(false)
const filterValue = ref<String>('all')
const selectedDate = ref<Date>(new Date())

type newTaskType = {
    title: string,
    description: string,
    date: Date,
    completed: boolean,
    important: boolean
}

const newTask: Ref<newTaskType> = ref({
    title: '',
    description: '',
    date: new Date(selectedDate.value),
    completed: false,
    important: false,
});

const addTask = async () => {
    allTasks.value.push({ ...newTask.value })

    newTask.value = {
        title: '',
        description: '',
        date: new Date(),
        completed: false,
        important: false,
    };
    toggleModal.value = false
    toast.success('Task Added Succesfully')
}

const openTask = () => {
    toggleModal.value = true
}

const filterTask = (filterCriteria: string) => {
    filterValue.value = filterCriteria
    tasks.value = allTasks.value.filter((task: newTaskType) => {
        if (filterCriteria === 'all') {
            return true;
        } else if (filterCriteria === 'pending') {
            return !task.completed;
        } else if (filterCriteria === 'completed') {
            return task.completed;
        } else if (filterCriteria === 'important') {
            return task.important;
        }
        return true;
    });
};


const closeTask = () => {
    toggleModal.value = false
    updateVal.value = false

    newTask.value = {
        title: '',
        description: '',
        date: new Date(),
        completed: false,
        important: false,
    };
}

const editTask = (index: Number) => {
    newTask.value = allTasks.value[index]
    toggleModal.value = true
    updateVal.value = true
    ind.value = index
}

const deleteTask = (index: Number) => {
    allTasks.value.splice(index, 1)
    toast.error('Task Deleted')
}

const updateTask = (ind: Number) => {
    allTasks.value[ind] = { ...newTask.value }
    closeTask()
    toast.success('Task Updated Succesfully')
}
</script>