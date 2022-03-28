<template>
    <div>
        <div>
            <h1>{{ currentClassEvaluationId }}</h1>
            {{students.firstname}} {{students.lastname}}
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
            const allClasse = await DB.getAllClasses();
            if (this.counterEleve >= allClasse[0]['students'].length) {
                this.counterEleve = allClasse[0]['students'].length - 1;
            } else {
                console.log(allClasse[0]['students'][this.counterEleve]);
                console.log(this.counterEleve);
                this.students = allClasse[0]['students'][this.counterEleve];
                this.counterEleve++;
            }
        },
        async previousEleve() {
            const allClasse = await DB.getAllClasses();
            if (this.counterEleve <= -1) {
                this.counterEleve = 0;
            } else {
                console.log(allClasse[0]['students'][this.counterEleve]);
                console.log(this.counterEleve);
                this.students = allClasse[0]['students'][this.counterEleve];
                this.counterEleve--;
            }
        },
    },

}
</script>

<style scoped>

</style>
