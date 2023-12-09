<template>
  <div @click="openModal" class="border border-white border-dotted rounded-md flex justify-center items-center cursor-pointer text-white inset-0 hover:bg-white hover:bg-opacity-5 transition-all ease-in-out">
    <span class="text-3xl">+</span>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits()

const openModal = () => {
    emit('open-modal')
}
</script>