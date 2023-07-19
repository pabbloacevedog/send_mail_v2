<template>
    <div class="w-full max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-10">
        <h2 class="mb-4 text-white">Form Mail</h2>
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="image" alt=""/>
        <form @submit.prevent="send_mail">
            <div class="mb-4">
                <input v-model="properties.name" type="text" class="shadow border rounded py-2 px-3 text-gray-700 leading-tight"
                    placeholder="name" />
            </div>
            <div class="mb-4">
                <input v-model="properties.species" type="text" class="shadow border rounded py-2 px-3 text-gray-700 leading-tight"
                    placeholder="gender" />
            </div>
            <div class="mb-4">
                <input v-model="properties.status" type="text" class="shadow border rounded py-2 px-3 text-gray-700 leading-tight"
                    placeholder="status" />
            </div>
            <div class="mb-4">
                <input v-model="properties.location" type="text" class="shadow border rounded py-2 px-3 text-gray-700 leading-tight"
                    placeholder="image" />
            </div>
            <button type="submit"
                    class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <svg class="w-3 h-3 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 20 16">
                        <path
                            d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path
                            d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Send Mail
                </button>
        </form>
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
let properties = props
const query = gql`
  query mail(
		$email: String!
		$name: String!
		$wallet: String!
		$instagram: String!
		$facebook: String!
		$img: String!
		$close_relative: String!
		$relationship: String!
		$city: String!
		$country: String!
		$phone: String!
		$whatsapp: String!
		$password: String!
	) {
		mail(
			email: $email
			name: $name
			wallet: $wallet
			instagram: $instagram
			facebook: $facebook
			relative: $relative
			relationship: $relationship
			city: $city
			country: $country
			phone: $phone
			whatsapp: $whatsapp
			password: $password
		) {
			send: send
		}
	}
`
const variables = {
  name: 'John Doe',
  email: 'jd@example.com'
}

const send_mail = () => {
    const { mutate } = useQuery(query, { properties })
    console.log(mutate)
}
</script>
  
<style></style>