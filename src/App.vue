<script>
import Home from './components/pages/Homepage.vue'
import NewEvaluation from './components/pages/NewEvaluation.vue'
import NewClass from './components/pages/NewClass.vue'
import Notation from './components/pages/Notation.vue'
import NotFound from './components/pages/NotFound.vue'
import Navbar from "./components/Navbar.vue";
import DB from "./Database.js";

// Routing
const routes = {
    '/': Home,
    '/new_evaluation': NewEvaluation,
    '/class': NewClass,
    '/evaluation_mode': Notation,
}

export default {
    components: {Navbar},
    data() {
        return {
            currentPath: window.location.hash,
            classes: [],
            evaluations: [],
            classeEvaluation: [],
        }

    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] || NotFound
        },
    },
    methods: {
        newClass(data) {
            this.classes.push(data);
        },
        newEval(data) {
            this.evaluations.push(data);
        },
        newClassEvaluation(data) {
            this.classEvaluations.push(data);
        },
        idEval(data) {
            this.currentClassEvaluationId = data;
        },
    },
    async beforeMount() {
        this.classes = await DB.getAllClasses();
        this.evaluations = await DB.getAllEvaluations();
        this.classeEvaluation = await DB.getAllEvluationsAndClassAssociation();
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
    <component class="page" @newClasse="newClass($event)"
               @newEval="newEval($event)"
               @newClassEval="newClassEvaluation($event)"
               @idEval="idEval($event)"
               @classeEvaluation="classeEvaluation($event)"
               :is="currentView"
               v-bind:classes="this.classes"
               v-bind:evaluations="this.evaluations"
               v-bind:classeEvaluation="this.classeEvaluation" />
</template>

<style>
@import "./assets/styles/style.scss";
</style>
