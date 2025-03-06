<template>
  <main>
    <div class="m-auto w-1/2 rounded-lg border border-neutral-200 bg-neutral-100 p-8 shadow-md">
      <form @submit.prevent="createProject">
          <label for="name" class="block text-stone-500 mb-2">TITLE</label>
          <input type="text" name="name" id="name" class="p-2 mb-8 border-b-2 border-b-gray-300 focus:outline-gray-200 focus:bg-gray-200 focus:ring-0 w-full" v-model="name"/>
          <label for="description" class="block text-stone-500 mb-2">DETAILS</label>
          <textarea name="description" id="description" class="p-2 rounded-md border border-gray-300 focus:outline-gray-300 focus:bg-gray-200 focus:ring-0 w-full" rows="5" v-model="description"/>
          <div class="flex justify-center ">
            <input type="submit" class="bg-green-700 text-white px-4 py-2 mt-8 rounded-md hover:bg-green-500" value="Create Project">
          </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
    }
  },
  methods: {
    createProject() {
      fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.name,
          description: this.description,
          status: 0
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    },
  },
  mounted() {
    fetch('http://localhost:3000/projects/' + this.id)
      .then((response) => response.json())
      .then((data) => {
        this.project = data
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  },
}
</script>

<style></style>
