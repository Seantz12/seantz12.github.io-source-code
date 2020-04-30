<template>
    <div>
        <div class="row">
            <!--TODO: Add images-->
            <div class="pro-work">
                Professionaly Worked with:
                <ul>
                    <li v-for="(tool, key) in professionalExperience" :key="key"> 
                        {{tool}} 
                    </li>
                </ul>
            </div>
            <div class="proficient">
                Proficient in:
                <ul>
                    <li v-for="(tool, key) in proficient" :key="key"> 
                        {{tool}} 
                    </li>
                </ul>
            </div>
            <div class="learning">
                Currently learning:
                <ul>
                    <li v-for="(tool, key) in learning" :key="key"> 
                        {{tool}} 
                    </li>
                </ul>
            </div>
        </div>
        <WorkInfo/>
    </div>
</template>

<script>
import WorkInfo from '../components/WorkInfo.vue';

export default {
    name: "detailsTest",
    components: {
        WorkInfo
    },
    data: function() {
        return {
            professionalExperience: ['Git', 'Python', 'Django', 'Javascript', 'Node.js', 'React.js', 'MySQL', 'SQLite'],
            proficient: ['C/C++', 'Java', 'Bash'],
            learning: ['Rust', 'Lua/Love2d', 'Vue.js']
        };
    }
}
</script>
<style scoped>
.row {
    display: flex;
}
.row div {
    display:inline-block;
    width: 33%;
    text-align: center;
    /* margin: 30px; */
}
</style>