<template>
    <div class="project">
        <div v-if="info.align == 'right'" style='text-align: left'>
            <img :src="info.imagePath"/>
        </div>
        <div :style='textStyle'>
            <p>{{info.name}}</p>
            <p>{{info.description}}</p>
        </div>
        <div v-if="info.align == 'left'" style='text-align: right'>
            <img :src="info.imagePath"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "project",
    computed: {
        textStyle() {
            return 'text-align: ' + this.info.align + '; margin-' + this.info.align + ': 5px;';
        },
    },
    data: function () {
        return { 
        };
    },
    props: ['info']
}
</script>

<style scoped>
.project {
    display: flex;
    width: 100%;
}
.project img {
    max-height: 33%;
    max-width: 33%;
}
</style>