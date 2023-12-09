<template>
  <div class="bg-[#2a2b2a] text-white rounded-md p-3 space-y-3">

    <h1>{{ task.title }}</h1>

    <span>{{ task.description }}</span>

    <div>23/10/2023</div>

    <div class="flex justify-between">

      <div class="flex items-center space-x-2">
        <div v-if="task.completed" class="bg-green-500 rounded-full p-1">
          Completed
        </div>
        <div v-else class="bg-orange-500 rounded-full p-1">
          Pending
        </div>
        <div v-if="task.important" class="bg-red-500 rounded-full flex items-center justify-center text-white h-5 w-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12"><path fill="currentColor" d="M4.283 2.98a1.735 1.735 0 1 1 3.434 0l-.576 4.03a1.153 1.153 0 0 1-2.282 0l-.576-4.03Zm2.444-.142a.735.735 0 1 0-1.454 0l.576 4.03a.153.153 0 0 0 .303 0l.575-4.03ZM6 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"/></svg>
        </div>
      </div>

      <div class="flex">
        <button class="text-blue-400" @click="editTask">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z" />
            <path fill="currentColor"
              d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z" />
          </svg>
        </button>
        <button class="text-red-500" @click="deleteTask">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M7.615 20q-.67 0-1.143-.472Q6 19.056 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463h-8.77ZM17 6H7v12.385q0 .269.173.442t.442.173h8.77q.23 0 .423-.192q.192-.193.192-.423V6ZM9.808 17h1V8h-1v9Zm3.384 0h1V8h-1v9ZM7 6v13V6Z" />
          </svg>
        </button>
      </div>

    </div>

</div></template>

<script setup lang="ts">
defineProps(['task'])

const emit = defineEmits()

const editTask = () => {
  emit('edit-task')
}

const deleteTask = () => {
  emit('delete-task')
}
</script>