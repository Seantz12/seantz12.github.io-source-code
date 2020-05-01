<template>
<div>
    <!-- <h1> Details </h1> -->
    <div class="root">
        <div class="work">
            <h1> Work Experience </h1>
            <WorkInfo v-for="(info, key) in workExperiences" :info="info" :key="key"/>
        </div>
        <div class="knowledge">
            <h1> Languages </h1>
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

    </div>
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
            learning: ['Rust', 'Lua/Love2d', 'Vue.js'],
            workExperiences: [
                {
                    name: "Polar",
                    location: "Toronto, Ontario",
                    description: "Software Developer/Tester Reliability and Auto",
                    dateStarted: "January 2019",
                    dateEnded: "June 2019",
                    highlights: ["Used Jinja2 and Selenium libraries to develop automated tests for a large website", 
                                 "Combined Django with SimpleHTTPServer to automate testing unique situations that were client specific",
                                 "Documented and communicated feedback with developers in an effective manner",
                                 "Continued working remotely after coop placement to ensure quality was maintained"]
                },
                {
                    name: "360Insights",
                    location: "Whitby, Ontario",
                    description: "Full Stack Developer",
                    dateStarted: "September 2019",
                    dateEnded: "December 2019",
                    highlights: ["Developed additional features to help the end user use 360Insights' platform",
                                 "Worked with Node.js and Rabbit.mq to communicate changes between two sites seamlessly",
                                 "Overhauled and refactored an entire website to use an updated version of React"]
                },
                {
                    name: "MCAP",
                    location: "Waterloo, Ontario",
                    description: "Junior Systems Administrator",
                    dateStarted: "May 2018",
                    dateEnded: "August 2018",
                    highlights: ["Scripted and automated daily tasks to make workflow more efficient",
                                 "Communicated feedback effectively with users about technical issues and concerns",
                                 "Demonstrated initiative to take on additional projects"]
                }
            ]
        };
    }
}
</script>
<style scoped>
.root {
    display: flex;
}
.work {
    width: 75%;
}
.knowledge {
    width: 25%;
    /* display: flex; */
}
.knowledge div {
    /* display:inline-block; */
    text-align: center;
    border-style: none none solid solid;
    /* margin: 30px; */
}
.knowledge .pro-work {
    border-style: solid none solid solid;
}
.knowledge ul {
    text-align: left;
    /* margin: 0px; */
}
</style>