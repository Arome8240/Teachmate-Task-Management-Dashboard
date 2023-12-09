<template>
    <div class="bg-[#121212] h-screen flex fixed">
        <div class="w-1/4 bg-[#1b1c1b]">
            <div class="flex flex-col items-center p-5">
                <img src="/avatar.png" width="100" alt="">
                <h1 class="text-white font-bold text-xl">Dev Arome</h1>
            </div>

            <div class="space-y-1">
                <NuxtLink v-for="(link,i) in links" :key="i" :to="link.path" :class="route.fullPath == link.path ? 'border-r-4 border-r-yellow-400 bg-[#2a2b2a]' : ''" class="flex space-x-2 text-white p-4">
                    <div v-html="link.icon"></div>
                    <span class="font-bold">{{ link.name }}</span>
                </NuxtLink>
            </div>
        </div>
        <div class="w-3/4">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

type link = {
    name: string,
    path: string,
    icon: string
}

const links: link[] = [
    {
        name: 'Home',
        path: '/',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="font-bold" width="20" height="20" viewBox="0 0 15 15"><path fill="currentColor" d="m7.5.5l.325-.38a.5.5 0 0 0-.65 0L7.5.5Zm-7 6l-.325-.38L0 6.27v.23h.5Zm5 8v.5a.5.5 0 0 0 .5-.5h-.5Zm4 0H9a.5.5 0 0 0 .5.5v-.5Zm5-8h.5v-.23l-.175-.15l-.325.38ZM1.5 15h4v-1h-4v1Zm13.325-8.88l-7-6l-.65.76l7 6l.65-.76Zm-7.65-6l-7 6l.65.76l7-6l-.65-.76ZM6 14.5v-3H5v3h1Zm3-3v3h1v-3H9Zm.5 3.5h4v-1h-4v1Zm5.5-1.5v-7h-1v7h1Zm-15-7v7h1v-7H0ZM7.5 10A1.5 1.5 0 0 1 9 11.5h1A2.5 2.5 0 0 0 7.5 9v1Zm0-1A2.5 2.5 0 0 0 5 11.5h1A1.5 1.5 0 0 1 7.5 10V9Zm6 6a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v1Zm-12-1a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 15v-1Z" /></svg>'
    },
    {
        name: 'Pending',
        path: '/pending',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17 22q-2.075 0-3.537-1.463T12 17q0-2.075 1.463-3.537T17 12q2.075 0 3.538 1.463T22 17q0 2.075-1.463 3.538T17 22Zm1.675-2.625l.7-.7L17.5 16.8V14h-1v3.2l2.175 2.175ZM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.175q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5v6.25q-.45-.325-.95-.55T19 10.3V5h-2v3H7V5H5v14h5.3q.175.55.4 1.05t.55.95H5Zm7-16q.425 0 .713-.288T13 4q0-.425-.288-.712T12 3q-.425 0-.712.288T11 4q0 .425.288.713T12 5Z"/></svg>'
    },
    {
        name: 'Important',
        path: '/important',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><path fill="currentColor" d="M4.283 2.98a1.735 1.735 0 1 1 3.434 0l-.576 4.03a1.153 1.153 0 0 1-2.282 0l-.576-4.03ZM7 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"/></svg>'
    },
    {
        name: 'Completed',
        path: '/completed',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37zm603 685l-136-136l-659 659l-275-275l-136 136l411 411l795-795z"/></svg>'
    }
]

</script>