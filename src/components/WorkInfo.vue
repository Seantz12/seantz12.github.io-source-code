<template>
    <div>
        <h2>{{info.name}}</h2>
        <p>{{info.dateStarted}} - {{info.dateEnded}}</p>
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