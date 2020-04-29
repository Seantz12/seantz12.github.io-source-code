<template>
    <div>
        <a :id="this.anchor"/>
        <slot></slot>
        <a href="#top"> go back to top </a>
    </div>
</template>

<script>
export default {
    name: "introduction",
    props: ['anchor']
}
</script>
<style scoped>

</style>