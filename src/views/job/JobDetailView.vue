<template>
    <main>
        <h1>Job Details Page</h1>
        <div>You job is {{ job.title }}</div>
        <p>{{job.description}}</p>
    </main>
</template>

<script>

export default {
    props: ['id'],
    data() {
        return {
            job: null,
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
            .then((response) => response.json())
            .then((data) => {
                this.job = data
            })
            .catch((error) => {
                console.error('Error:', error)
            });
    }
}
</script>

<style></style>
