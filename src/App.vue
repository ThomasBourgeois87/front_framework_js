<script>
import Home from './components/Homepage.vue'
import NewEvaluation from './components/NewEvaluation.vue'
import NewClass from './components/NewClass.vue'
import NotFound from './components/NotFound.vue'

// Routing
const routes = {
  '/': Home,
  '/new_evaluation': NewEvaluation,
  '/new_class': NewClass,
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<template>
  <a href="/">Home</a> |
  <a href="#/new_evaluation">Nouvelle évaluation</a> |
  <a href="#/new_class">Nouvelle classe</a> |
  <a href="#/non-existent-path">Page 404</a>
  <component :is="currentView" />
</template>
