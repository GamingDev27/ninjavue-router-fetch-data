<script>
import ProjectCard from '@/components/SingleProjectCard.vue'

export default {
  data() {
    return {
      activeButton: 'view-all',
      projects: [],
    }
  },
  components: {
    ProjectCard,
  },
  methods: {
    filterAll() {
      this.activeButton = 'view-all'
    },
    filterComplete() {
      this.activeButton = 'completed'
    },
    filterOngoing() {
      this.activeButton = 'ongoing'
    },
    deleteProj(project) {
      this.projects = this.projects.filter((proj) => proj.id !== project.id)
    },
    completeProj(project) {
      // project.status = !project.status
    },
  },
  computed: {
    filteredProjects() {
      if (this.activeButton == 'view-all') {
        return this.projects
      } else if (this.activeButton == 'completed') {
        return this.projects.filter((project) => project.status == 1)
      } else if (this.activeButton == 'ongoing') {
        return this.projects.filter((project) => project.status == 0)
      }
    },
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((response) => response.json())
      .then((data) => {
        this.projects = data
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  },
}
</script>

<template>
  <main class="">
    <div class="mx-auto flex w-full max-w-2xl justify-start pt-8">
      <button
        class="text-md px-5 text-stone-500 hover:cursor-pointer"
        :class="{ 'font-bold': activeButton == 'view-all' }"
        @click="filterAll"
      >
        VIEW ALL
      </button>
      <button
        class="text-md px-5 text-stone-500 hover:cursor-pointer"
        :class="{ 'font-bold': activeButton == 'completed' }"
        @click="filterComplete"
      >
        COMPLETED
      </button>
      <button
        class="text-md px-5 text-stone-500 hover:cursor-pointer"
        :class="{ 'font-bold': activeButton == 'ongoing' }"
        @click="filterOngoing"
      >
        ONGOING
      </button>
    </div>
    <div class="mx-auto w-full max-w-2xl" v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <ProjectCard
          :project="project"
          @deleteProject="deleteProj"
          @completeProject="completeProj"
        />
      </div>
    </div>
  </main>
</template>
