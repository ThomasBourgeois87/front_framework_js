<template>
    <div>
        <div>
            <h1>Gérer les évaluation</h1>
            <h2>Ajouter une classe</h2>
            <form @submit="submitEvaluation">
                <div>
                    <label>Nom de l'evaluation</label>
                    <input required type="text" v-model="name" placeholder="Javelot">
                </div>
                <input type="submit" value="Créer l'évaluation" @submit.prevent="submitEvaluation">
            </form>
        </div>
    </div>
</template>

<script>
import DB from "../../Database.js";

export default {
    name: "NewEvaluation",
    props:{},

    data() {
        return {
            title: "Evaluation",
            evaluations: [],
            evaluationToAdd: {
                name: "",
            }
        }
    },

    computed: {
        showCondition: function() {
            return this.evaluationToAdd.name !== ""
        }
    },
    async created() {
        this.db = await DB.getDb();
        this.evaluations = await DB.getEvaluationFromDb(this.db);
    },
    methods: {
        async submitEvaluation() {
            if(this.evaluationToAdd.name !== "") {
                let evaluation = {
                    name: this.evaluationToAdd.name
                };

                await DB.addEvalToDb(this.db, evaluation);
                this.evaluations = await DB.getEvaluationFromDb(this.db);
                this.evaluationToAdd.name = "";
            }
        },
    },
}
</script>

<style scoped>
</style>
