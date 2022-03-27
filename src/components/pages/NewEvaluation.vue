<template>
    <div class="">
        <div>
            <h1>Les évaluations</h1>
            <h2>Ajouter un modèle d'évaluation</h2>
            <form @submit.prevent="saveEvaluation">
                <div>
                    <label for="name">Nom de l'évaluation</label>
                    <input id="name" required type="text" v-model="name" placeholder="Contrôle théorème de Thalès">
                </div>
                <div v-for="(criteria, index) in criterias" :key="criteria">
                    <label>Critère n° {{ index + 1 }}</label>
                    <input v-model="criteria.name" :name="`criterias[${index}][name]`" type="text" class="form-control"
                           placeholder="Tracer la droite">
                    <button @click="deleteCriteria(index) ">Supprimer le critère</button>
                </div>
                <button @click="addCriteria " type="button" class="addElementButton">Ajouter un critère</button>
                <input type="submit" value="Ajouter l'évaluation">
            </form>
        </div>
        <div v-if="evaluations.length !== 0">
            <h2>Vos modèles d'évaluations</h2>
            <div>
                <ul>
                    <li v-for="(evaluation, index) in evaluations" :key="evaluation">
                        <h3>{{ evaluation.evaluation.name }} - {{ index }}</h3>
                        <form @submit.prevent="associateEvaluationToClasse">
                            <select>
                                <option v-for="(classe, index) in classes" :key="classe" :id="index">
                                    {{ classe.className }}
                                </option>
                            </select>
                            <input type="hidden" :value="index">
                            <br>
                            <button class="addElementButton" type="submit">Associer le modèle à une classe</button>
                        </form>
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
        addCriteria() {
            this.criterias.push({name: ""})
        },
        deleteCriteria(index) {
            this.criterias.splice(index, 1);
        },
        async saveEvaluation(event) {
            const object = {
                name: event.target[0].value,
                criterias: this.criterias
            };
            const sended = await DB.saveEvaluation(object);
            this.$emit('newEval', sended);
        },
        async associateEvaluationToClasse(data) {
            console.log("exe")
            // const object = {
            //     className: this.classes[data.target[0].selectedOptions[0].id].className,
            //     students: this.classes[data.target[0].selectedOptions[0].id].students,
            //     criterias: this.evaluations[data.target[1].value]
            // }
            const classe = this.classes[data.target[0].selectedOptions[0].id].students;
            const criterias = this.evaluations[data.target[1].value].evaluation.criterias;
            const res = await DB.associateEvaluationToClasse(classe, criterias);
            this.$emit('classeEvaluation', res);
            //window.location.href = "/";
        }
    },
}
</script>

<style scoped>

</style>
