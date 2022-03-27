<template>
    <div class="">
        <div>
            <h1>Les évaluations</h1>
            <h2>Ajouter une évaluation</h2>
            <form @submit.prevent="saveEvaluation">
                <div>
                    <label for="name">Nom de l'évaluation</label>
                    <input id="name" required type="text" v-model="name" placeholder="Contrôle théorème de Thalès">
                </div>
                <div v-for="(criteria, index) in criterias" :key="criteria">
                    <label>Critère n° {{ index + 1 }}</label>
                    <input v-model="criteria.name" :name="`criterias[${index}][name]`" type="text" class="form-control" placeholder="Tracer la droite">
                    <button @click="deleteCriteria(index) ">Supprimer le critère</button>
                </div>
                <button @click="addCriteria " type="button" class="addElementButton">Ajouter un critère</button>
                <input type="submit" value="Ajouter l'évaluation" @submit.prevent="saveEvaluation">
            </form>
        </div>
        <div v-if="evaluations.length !== 0">
            <h2>Vos classes</h2>
            <div>
                <ul>
                    <li v-for="(evaluation, index) in evaluations" :key="evaluation">
                        <h3>{{ evaluation.evaluation.name }} - {{ index }}</h3>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import DB from "../../Database.js";

export default {
    name: "NewEvaluation",
    props: {
        classes: {
            name: "classes",
            type: Array,
            required: true
        },
        evaluations: {
            name: "evaluations",
            type: Array,
            required: true
        },
    },
    data() {
        return {
            criterias: [
                {name: ""}
            ],
        }
    },
    methods: {
        addCriteria(data) {
            this.criterias.push({name: ""})
        },
        deleteCriteria(index) {
            this.criterias.splice(index, 1);
        },
        async saveEvaluation(event) {
            const crit = this.criterias;
            console.log(crit)
            const object =
                {
                    name: event.target[0].value,
                    criterias: this.criterias
                };
            console.log(object)
            const sended = await DB.saveEvaluation(object);
            this.$emit('newEval', sended);
        }
    },
}
</script>

<style scoped>

</style>
