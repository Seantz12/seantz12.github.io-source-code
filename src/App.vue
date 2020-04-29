<template>
  <div id="app">
    <Navbar :navLinks="navLinks"/>
    <Section anchor="introduction">
      <Introduction />
    </Section>
    <Section anchor="details">
      <Details />
    </Section>
    <Section anchor="projects">
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
  margin-top: 60px;
}
</style>
