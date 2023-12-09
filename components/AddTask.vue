<template>
    <div class="fixed inset-0 z-50 overflow-hidden" v-if="toggleModal">
        <div class="text-black flex justify-center items-center fixed overflow-x-hidden overflow-y-hidden z-40 inset-0">
            <div class="relative">
                <div class="bg-[#1b1c1b] min-w-[400px] rounded-md p-3 z-50" @click.stop>
                    <div class="flex justify-end">
                        <button @click="closeModal">
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
                            <input type="text" v-model="title" placeholder="Enter title here"
                                class="bg-black outline-none text-white p-2 w-full rounded-md">
                        </div>

                        <div>
                            <h1 class="text-white font-bold">Description</h1>
                            <textarea type="text" placeholder="Enter title here"
                                class="bg-black outline-none text-white p-2 w-full rounded-md resize-none"></textarea>
                        </div>

                        <div>
                            <h1 class="text-white font-bold">Title</h1>
                            <div class="flex bg-black items-center px-2">
                                <input type="date" placeholder=""
                                    class="bg-transparent outline-none text-white p-2 w-full rounded-md">
                                <span class="custom-calendar-icon">&#128197;</span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-2 px-2 space-y-2">
                        <div class="w-full flex justify-between">
                            <h1 class="text-white">Toggle Completed</h1> <input type="checkbox">
                        </div>
                        <div class="w-full flex justify-between">
                            <h1 class="text-white">Toggle Completed</h1> <input type="checkbox">
                        </div>
                    </div>

                    <div class="justify-end flex mt-2">
                        <button class="bg-yellow-600 hover:bg-yellow-400 shadow-none p-2 text-white rounded-full">Add
                            Task</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="inset-0 z-39 opacity-90 bg-black w-full absolute h-full"></div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    toggleModal: Boolean,
    title: String
})

const emit = defineEmits()

const closeModal = () => {
    emit('close-modal')
}
</script>