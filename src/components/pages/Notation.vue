<template>
    <div>
        <div>
            <h1>{{ currentClassEvaluationId }}</h1>
            {{students}}
            <br><button @click="previousEleve">Élève précédent</button>
            <button @click="nextEleve">Élève suivant</button>
        </div>
    </div>
</template>

<script>
import DB from "../../Database.js";

export default {
    name: "Notation",
    props: {
        currentClassEvaluationId: {
            name: "currentClassEvaluationId",
            type: String,
            required: true
        },
    },
    data() {
        return {
        idEvaluation: this.currentClassEvaluationId,
        idClasse: "",
        students: Array,
        counterEleve: 0,
        }
    },

    methods: {
        async nextEleve() {
            this.counterEleve++;
            const res = await DB.getAllClasses();
            console.log(res[0]['students'][this.counterEleve]);
            this.students = res[0]['students'][this.counterEleve];
        },
        async previousEleve() {
            this.counterEleve--;
            const res = await DB.getAllClasses();
            console.log(res[0]['students'][this.counterEleve]);
            this.students = res[0]['students'][this.counterEleve];
        },
        eleve() {
            return this.id + this.counterEleve;
        },

    },

}
</script>

<style scoped>

</style>
