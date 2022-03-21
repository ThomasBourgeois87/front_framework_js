<script>
import Home from './components/pages/Homepage.vue'
import NewEvaluation from './components/pages/NewEvaluation.vue'
import NewClass from './components/pages/NewClass.vue'
import NotFound from './components/pages/NotFound.vue'
import Navbar from "./components/Navbar.vue";

// Routing
const routes = {
    '/': Home,
    '/new_evaluation': NewEvaluation,
    '/new_class': NewClass,
}

export default {
    components: {Navbar},
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] || NotFound
        },
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    }
}
</script>

<template>
    <navbar></navbar>
    <component :is="currentView"/>
</template>

<style>
@import "./assets/styles/style.scss";
</style>
