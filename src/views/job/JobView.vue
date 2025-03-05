<template>
  <main>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'job-detail', params: { id: job.id } }"
        ><h2>{{ job.title }}</h2></router-link
      >
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then((response) => response.json())
      .then((data) => {
        this.jobs = data
      })
      .catch((error) => {
        console.error('Error:', error)
      });
  }
}
</script>

<style></style>
