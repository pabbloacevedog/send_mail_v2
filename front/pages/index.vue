<template>
    <div class="flex flex-wrap">
        <div class="w-1/3 p-2 text-center bg-slate-950">
            <ListUsers  :data="data" :send_mail="send_mail" :view_mail="view_mail"/>
        </div>
        <div class="w-2/3 p-2 text-center bg-slate-950">
            <div v-if="send">
                <FormMail :name="datos.name" :image="datos.image" :status="datos.status" :species="datos.species" :location="datos.location" :id="datos.id"/>
            </div>
            <div v-else-if="view">
                <ViewMail :name="datos.name" :image="datos.image" :status="datos.status" :species="datos.species" :location="datos.location"  :id="datos.id"/>
            </div>
            <div v-else>
                <h1 class="text-xl font-bold leading-none text-gray-900 dark:text-white">no user selected</h1>
            </div>
            <!-- <CharacterCard v-for="{ id, name, image, status, species, location } in data.characters.results" :key="id" :id="id"
            :name="name" :image="image" :status="status" :species="species" :location="location.name" /> -->
        </div>
        
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let send = ref(false)
let view = ref(false)
type CharactersResults = {
    characters: {
        results: {
            id: string,
            name: string,
            image: string,
            status: string,
            species: string,
            location: {
                name: string
            }
        }[]
    }
}

const query = gql`
  query getCharacters {
    characters {
      results {
        name
        image
        status
        id
        species
        location {
          name
        }
      }
    }
  }
  `
const { data } = await useAsyncQuery<CharactersResults>(query)


let datos = ref({
    id: '',
    name: '',
    image: '',
    status: '',
    species: '',
    location: ''
})
const send_mail = (props: any) => {
    send.value = true
    view.value = false
    console.log("send_mail")
    console.log(send.value)
    const { id, name, image, status, species, location } = props
    datos.value = {
        id: id,
        name: name,
        image: image,
        status: status,
        species: species,
        location: location
    }

    console.log(data)
}
const view_mail = (props: any) => {
    view.value = true
    send.value = false
    console.log("view_mail")
    console.log(view.value)
    const { id, name, image, status, species, location } = props
    datos.value = {
        id: id,
        name: name,
        image: image,
        status: status,
        species: species,
        location: location
    }

}
console.log(data.value)
</script>