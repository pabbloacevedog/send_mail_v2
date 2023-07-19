<template>
<div class="w-full max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="image" alt=""/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">  {{ name }}</h5>
        <span class="text-lg text-gray-500 dark:text-gray-400"> {{ species }}</span>
        <span class="text-lg text-gray-500 dark:text-gray-400"> {{ location }}</span>
        <span class="text-lg text-gray-500 dark:text-gray-400"> {{ status }}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">accept</a>
        </div>
    </div>
</div>

</template>
<script lang="ts" setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
})

</script>