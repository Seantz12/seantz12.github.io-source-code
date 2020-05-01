<template>
    <div class="navbar">
        <ul class="nav-list">
            <li class="nav-item" v-for="(link, key) in this.navLinks" :key="key">
                <a :class="['nav-link', key == selected ? 'selected' : '']" 
                   :href="link"
                   @click="selectKey(key)">
                    {{key}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "navbar",
    data: function () {
        return { 
            selected: "intro"
        };
    },
    methods: {
        selectKey: function(key) {
            this.selected = key;
        }
    },
    props: ['navLinks']
}
</script>

<style scoped>
.navbar {
    /* width: 100%; */
    position: fixed;
    top: 0;
    right: 0;
    text-align: right;
    margin-top: 0px;
}

.nav-list {
    margin-top: 0px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: rgba(62, 67, 74, .5);
}

/* .selected {
    color: white;
    background-color: green;
} */

.nav-item {
    padding-top: 5px;
    padding-bottom: 5px;
    list-style: none;
}

.nav-link {
    padding: 15px;
    color: black;
    margin-left: -25px;
    /* background-color: black; */
    /* text-align: right; */
}
.nav-link:hover {
    color: white;
    background-color: black;
    /* text-align: right; */
}
</style>