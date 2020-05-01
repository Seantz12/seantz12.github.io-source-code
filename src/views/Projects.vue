<template>
    <div class="projects">
        <h1> Projects </h1>
        <Project v-for="(project, key) in projects" :key="key" :info="project"/>
        <!-- {{projects.project1}} -->
    </div>
</template>

<script>
import Project from '../components/Project.vue';
import chip8 from '../assets/chip8.png';
import nyaa from '../assets/nyaa.png';
import sad from '../assets/swords at dawn.png';
import toti from '../assets/typing of the invaders.png';

export default {
    name: "projects",
    components: {
        Project
    },
    data: function () {
        return { 
            projects: [
                {
                    name: "Rusty CHIP8",
                    description: "A CHIP8 emulator written in Rust. Features the ability to load in ROMS and the ability to play any CHIP8 game.",
                    imagePath: chip8,
                    align: "left"
                },
                {
                    name: "Swords at Dawn",
                    description: "A fighting game written in Lua designed to have an emphasis on proper spacing, as one hit means death.",
                    imagePath: sad,
                    align: "right"
                },
                {
                    name: "Typing of the Invaders",
                    description: "A combination of Typing of the Dead and Space Invaders! Written purely in Vanilla Javascript for a one day hackathon",
                    imagePath: toti,
                    align: "left"
                },
                {
                    name: "Nyaa Web scraper",
                    description: "A web scraper targeted at Nyaa that also allows users to select a file to download and opens it in Transmission. Written in Python2 using BS4 and urwid2 libraries",
                    imagePath: nyaa,
                    align: "right"
                },
            ]
        };
    }
}
</script>

<style scoped>
h1 {
    margin-top: 0px;
}
</style>