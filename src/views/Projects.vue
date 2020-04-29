<template>
    <div class="projects">
        {{projects.project1}}
    </div>
</template>

<script>
export default {
    name: "projects",
    data: function () {
        return { 
            projects: {
                project1: "asd"
            }
        };
    }
}
</script>

<style scoped>
.projects {
    display: flex;
}
</style>