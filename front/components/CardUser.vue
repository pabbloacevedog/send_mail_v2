<template>
    <li class="pt-1 pb-1 sm:pt-4">
        <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" :src="image" alt="Thomas image">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{ name }}
                </p>
            </div>
            <div v-if="status==='Alive'" class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <button type="button"
                    class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    @click="send_mail(props)">
                    <svg class="w-3 h-3 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 20 16">
                        <path
                            d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path
                            d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Send Mail
                </button>
            </div>
            <div v-else class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <button type="button"
                    class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click="view_mail(props)">
                    <svg class="w-3 h-3 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 20 16">
                        <path
                            d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path
                            d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    View Mail
                </button>
            </div>
        </div>
    </li>
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
    },
    send_mail: {
        type: Function,
        required: true,
    },
    view_mail: {
        type: Function,
        required: true,
    }
})
</script>
