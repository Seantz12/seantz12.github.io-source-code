<template>
    <div>
        <!-- add image -->
        <p>{{info.name}}</p>
        <p>{{info.description}}</p>
    </div>
</template>

<script>
export default {
    name: "project",
    data: function () {
        return { 

        };
    },
    props: ['info']
}
</script>

<style scoped>

</style>