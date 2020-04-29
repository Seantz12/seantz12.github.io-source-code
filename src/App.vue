<template>
  <div id="app">
    <Navbar :navLinks="navLinks"/>
    <Section class="first" anchor="introduction">
      <Introduction />
    </Section>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <Section anchor="details">
      <Details />
    </Section>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <Section anchor="projects">
      <Projects />
    </Section>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>
    <p>emualte scroll</p>

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
}

body {
  background-color: #4276c9;
}

body::-webkit-scrollbar {
  display: none;
}

.first {
  margin-top: 80px;
}
</style>
