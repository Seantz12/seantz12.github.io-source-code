<template>
<b-card
    :title=info.name
    :img-src=info.imagePath
    :img-alt=info.name
    img-top
>
    <b-card-text>
        {{info.description}}
    </b-card-text>
    <b-button size="sm" class="mb-2" :href=info.url>
      <b-icon icon="github" aria-hidden="true"></b-icon> Github Repo
    </b-button>
</b-card>
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