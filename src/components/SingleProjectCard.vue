<template>
  <div
        class="block max-w-full p-6 my-2 bg-white border border-gray-200 border-l-5 rounded-l-sm shadow-sm hover:cursor-pointer"
        :class="{
          'border-l-green-500': project.status == 1,
          'border-l-red-500': project.status == 0,
        }"
         @click="showDetails = !showDetails"
      > 
        <div class="text-slate-700 font-medium flex justify-between items-center">

            {{ project.name }}
            <span class="flex gap-x-5 text-gray-500">
            <delete-icon @click="deleteSingleProj" class="active:text-gray-800 hover:cursor-pointer" />
            <edit-icon  @click="$router.push({name: 'project-edit', params: {id: project.id}})" class="active:text-gray-800 hover:cursor-pointer" />
            <check-icon
                @click="toggleStatus"
                :class="{ 'text-green-500': project.status == 1 }"
                class="active:text-green-500 hover:cursor-pointer font-extrabold"
            />
            <button @click="toggleStatus">check</button>
            </span>
        </div>
        <p v-if="showDetails" class="text-slate-400 text">{{ project.description }}</p>
      </div>
</template>

<script>
import DeleteIcon from 'vue-material-design-icons/Delete.vue'
import EditIcon from 'vue-material-design-icons/Pencil.vue'
import CheckIcon from 'vue-material-design-icons/Check.vue'

export default {
    props: ['project'],
    emits: ['deleteProject','completeProject'],
    components: {
        DeleteIcon,
        EditIcon,
        CheckIcon,
    },
    data() {
        return {
            activeButton: 'view-all',
            showDetails: false,
        }
    },
    methods: {
        deleteSingleProj() {
            fetch('http://localhost:3000/projects/'+this.project.id, {
            method: 'DELETE',})
            .catch((error) => {
                console.error('Error:', error)
            })
            this.$emit('deleteProject', this.project)
        },
        toggleStatus() {
            fetch('http://localhost:3000/projects/'+this.project.id, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({status: !this.project.status})
                })
                .catch((error) => {
                    console.error('Error:', error)
                })
                this.$emit('deleteProject', this.project)
        },
    }
}
</script>

<style>

</style>