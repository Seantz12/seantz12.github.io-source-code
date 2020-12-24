<template>
  <b-card
    :title=info.name
    :img-src=info.image
    :img-alt=info.name
    img-top
  >
    <b-card-text>
        {{info.dateStarted}} - {{info.dateEnded}}
    </b-card-text>
    <b-card-text>
        {{info.description}}
    </b-card-text>
    <b-button @click="$bvModal.show(info.id)">More Info</b-button>

    <b-modal :id=info.id :title=info.name>
        <p v-for="(highlight, key) in info.highlights" :key=key> {{highlight}} </p>
    </b-modal>
  </b-card>
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
    text-align: center;
    margin-left: 5px;
}
</style>