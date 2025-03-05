<template>
    <main>
        <h1>Jobs</h1>
        <div v-for="job in jobs" :key="job.id">
            <h2>{{ job.title }}</h2>
        </div>
    </main>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: 'Frontend Developer',
          company: 'Google',
          location: 'Mountain View, CA',
          type: 'Full Time',
          description: 'We are looking for a Frontend Developer to join our team.',
          requirements: '3+ years of experience with React, Vue, or Angular.',
          apply: 'Please send your resume to',
        },
        {
          id: 2,
          title: 'Backend Developer',
          company: 'Microsoft',
          location: 'Mountain View, CA',
          type: 'Full Time',
          description: 'We are looking for a Backend Developer to join our team.',
          requirements: '3+ years of experience with Python, Php, or Node.',
          apply: 'Please send your resume to',
        },
        {
          id: 3,
          title: 'Fullstack Developer',
          company: 'AWS',
          location: 'Mountain View, CA',
          type: 'Full Time',
          description: 'We are looking for a Fullstack Developer to join our team.',
          requirements: '3+ years of experience with Python, Php, or Node.',
          apply: 'Please send your resume to',
        },
      ],
    }
  },
}
</script>

<style></style>
