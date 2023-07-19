<template>
<div class="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-slate-900 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">List Users</h5>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <CardUser   v-for="{ id, name, image, status, species, location } in data.characters.results" :key="id" :id="id"
            :name="name" :image="image" :status="status" :species="species" :location="location.name" :send_mail="send_mail" :view_mail="view_mail"/>

        </ul>
   </div>
</div>
</template>
<script lang="ts" setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    send_mail: {
        type: Function,
        required: true
    },
    view_mail: {
        type: Function,
        required: true
    }
})
</script>