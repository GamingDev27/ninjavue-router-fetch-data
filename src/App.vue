<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    RouterLink,
    RouterView,
    HelloWorld,
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
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink :to="{ name: 'job' }">Jobs</RouterLink>
      </nav>
      <div class="inline-flex rounded-lg shadow-md overflow-hidden border border-gray-300">
        <button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:ring focus:ring-blue-300"
        @click="redirect">
          Redirect
        </button>
        <button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 border-l border-gray-300 focus:ring focus:ring-blue-300"
        @click="back">
          Back
        </button>
        <button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 border-l border-gray-300 focus:ring focus:ring-blue-300"
        @click="forward">
          Forward
        </button>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
