<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView,
  },
  methods: {
    redirect() {
      this.$router.push('/about')
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    },
  },
}
</script>

<template>
  <header>
    <div class="wrapper w-80 mx-auto pt-12">
      <nav class="flex justify-evenly items-center  py-4">
        <RouterLink to="/" class="text-stone-500 text-xl ">Projects</RouterLink>
        <RouterLink :to="{name: 'project-add'}" class="text-stone-500 text-xl ">Add a New project</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #FAF9F6;
  width: 100%;
  height: 100vh;
}

.router-link-active {
  border-bottom: 4px solid #34D399;
}
</style>
