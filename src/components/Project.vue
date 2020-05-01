<template>
    <div class="project">
        <div class="image" v-if="info.align == 'right'" style='text-align: left'>
            <a :href="info.url">
                <img :src="info.imagePath"/>
            </a>
        </div>
        <div class="text-parent" :style='textStyle'>
            <div class="text">
                <h2>{{info.name}}</h2>
                <p>{{info.description}}</p>
                <a :href="info.url">Github Repo</a>
            </div>
        </div>
        <div class="image" v-if="info.align == 'left'" style='text-align: right'>
            <a :href="info.url">
                <img :src="info.imagePath"/>
            </a>
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
    justify-content: space-between;
    width: 100%;
    border-style: none none solid none;
}
.project img {
    max-width: 100%;
    max-height: 100%;
    margin-top: 5px;
    /* height: 100%; */
}

.image {
    width: 50%;
    margin-bottom: 0px;
}
</style>