<template>
    <div :style='style'>
        <!-- add image -->
        <p>{{info.name}}</p>
        <p>{{info.description}}</p>
    </div>
</template>

<script>
export default {
    name: "project",
    computed: {
        style() {
            return 'text-align: ' + this.info.align + '; margin-' + this.info.align + ': 5px;';
        }
    },
    data: function () {
        return { 

        };
    },
    props: ['info']
}
</script>

<style scoped>
</style>