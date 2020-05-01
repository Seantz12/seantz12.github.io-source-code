<template>
    <div class="wrap">
        <a :id="this.anchor"/>
        <slot></slot>
        <!-- <a href="#top"> go back to top </a> -->
        <hr/>
    </div>
</template>

<script>
export default {
    name: "introduction",
    props: ['anchor']
}
</script>
<style scoped>
hr {
    margin-bottom: 0px;
}
</style>