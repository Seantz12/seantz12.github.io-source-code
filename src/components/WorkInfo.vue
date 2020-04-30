<template>
    <div>
        <p>{{info.name}}</p>
        <p>{{info.dateStarted}}</p>
        <p>{{info.dateEnded}}</p>
        <p>{{info.description}}</p>
        <ul>
            <li v-for="(highlight, key) in info.highlights" :key="key">
                {{highlight}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "workInfo",
    data: function () {
        return { 

        };
    },
    props: ['info']
}
</script>

<style scoped>
div {
    text-align: left;
    margin-left: 5px;
}
</style>