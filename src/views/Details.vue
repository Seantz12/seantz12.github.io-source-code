<template>
<div>
    <!-- <h1> Details </h1> -->
    <div class="root">
        <h1> Work Experience </h1>
        <b-card-group deck>
            <WorkInfo v-for="(info, key) in workExperiences" :info="info" :key="key"/>
        </b-card-group>
        <!-- <div class="knowledge">
            <h1> Languages </h1>
            TODO: Add images
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
 -->
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
            professionalExperience: ['Git', 'Python', 'Django', 'Javascript', 'Node.js', 'React.js', 'MySQL', 'SQLite', 'C++', 'Unreal Engine 4'],
            proficient: ['C', 'Java', 'Bash', 'C#'],
            learning: ['Rust', 'Lua/Love2d', 'Vue.js'],
            workExperiences: [
                {
                    name: "Behaviour Interactive",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Behaviour_Interactive_logo.svg/1200px-Behaviour_Interactive_logo.svg.png",
                    id: "bhvr",
                    location: "Monteral, Quebec",
                    description: "Game Programmer",
                    dateStarted: "June 2020",
                    dateEnded: "August 2020",
                    highlights: ["Worked with Unreal Engine 4 to implement useful tools",
                                 "Provided solutions with C++ for customer requested features in game",
                                 "Added additional features to a growing node.js backend"]
                },
                {
                    name: "360Insights",
                    image: "https://static1.squarespace.com/static/588259e5893fc087ee049fb8/t/5c1fa84e40ec9abd16b86ffd/1545578575822/360insights.png?format=1500w",
                    id: "360",
                    location: "Whitby, Ontario",
                    description: "Full Stack Developer",
                    dateStarted: "September 2019",
                    dateEnded: "December 2019",
                    highlights: ["Developed additional features to help the end user use 360Insights' platform",
                                 "Worked with Node.js and Rabbit.mq to communicate changes between two sites seamlessly",
                                 "Overhauled and refactored an entire website to use an updated version of React"]
                },
                {
                    name: "Polar",
                    image: "https://m32connect.com/wp-content/uploads/2019/02/polar-2.jpg",
                    id: "polar",
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
                    name: "MCAP",
                    image: "https://www.yourmortgageyourchoice.ca/wp-content/uploads/sites/95/2017/06/MCAP-Logo.jpg",
                    id: "mcap",
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
    text-align: center;
}
</style>