<template>
    <div class="navbar">
        <p v-for="(link, key) in navLinks" :key="key">
            {{key}}: {{link}}
        </p>
        <!-- <ul id="navlinks">
            <li v-for="(link, key) in navLinks" :key="key">
                {{key}}
            </li>
        </ul> -->
    </div>
</template>

<script>
export default {
    name: "navbar",
    data: function () {
        return { 
            navLinks: {
                introduction: "#introduction",
                something: "#something"
            }
        };
    }
}
</script>