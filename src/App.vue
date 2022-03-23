<script>
import Home from './components/pages/Homepage.vue'
import NewEvaluation from './components/pages/NewEvaluation.vue'
import NewClass from './components/pages/NewClass.vue'
import NotFound from './components/pages/NotFound.vue'
import Navbar from "./components/Navbar.vue";
import DB from "./Database.js";

// Routing
const routes = {
    '/': Home,
    '/new_evaluation': NewEvaluation,
    '/class': NewClass,
}

export default {
    components: {Navbar},
    data() {
        return {
            currentPath: window.location.hash,
            classes: [],
            evaluations: [],
        }

    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] || NotFound
        },
    },
    methods: {
        childData(data) {
            this.classes.push(data);
        }
    },
    async beforeMount() {
        this.classes = await DB.getAllClasses();
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
    <component @childData="childData($event)" :is="currentView" v-bind:classes="this.classes" v-bind:evaluations="this.evaluations"/>
</template>

<style>
@import "./assets/styles/style.scss";
</style>
