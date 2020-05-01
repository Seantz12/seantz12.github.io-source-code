<template>
  <div id="app">
    <Navbar :navLinks="navLinks"/>
    <Section class="intro" anchor="introduction">
      <Introduction />
    </Section>
    <Section class="details" anchor="details">
      <Details />
    </Section>
    <Section class="projects" anchor="projects">
      <Projects />
    </Section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Section from './views/Section.vue'
import Introduction from './views/Introduction.vue'
import Details from './views/Details.vue'
import Projects from './views/Projects.vue'

export default {
  name: 'App',
  data: function () {
    return {
      navLinks: {
        intro: "#introduction",
        details: "#details",
        projects: "#projects"
      }
    };
  },
  components: {
    Navbar,
    Section,
    Introduction,
    Details,
    Projects
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: 0px;
  /* background-color: white; */
}

body {
  background-color: white;
  margin: 0px;
}

body::-webkit-scrollbar {
  display: none;
}

.intro {
  width: 100%;
  background-color: lightblue;
}

.details {
  width: 100%;
  background-color: lightgreen;
}

.projects {
  width: 100%;
  background-color: lightyellow;
}
</style>
