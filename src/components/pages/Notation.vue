<template>
    <div>
        <div>
            <h1>{{ currentClassEvaluationId }}</h1>
            {{students.studentName}} {{students.notation}}
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
        counterStudents: 0,
        }
    },

    methods: {
        async nextEleve() {
            const allEvluationsAndClassAssociation = await DB.getAllEvluationsAndClassAssociation();
            if (this.counterStudents >= allEvluationsAndClassAssociation['eval'].length) {
                this.counterStudents = allEvluationsAndClassAssociation['eval'].length - 1;
            } else {
                console.log(allEvluationsAndClassAssociation['eval'][this.counterStudents]);
                console.log(this.counterStudents);
                this.students = allEvluationsAndClassAssociation['eval'][this.counterStudents];
                this.counterStudents++;

            }
        },
        async previousEleve() {
            const allEvluationsAndClassAssociation = await DB.getAllEvluationsAndClassAssociation();
            console.log(allEvluationsAndClassAssociation);
            if (this.counterStudents <= -1) {
                this.counterStudents = 0;
            } else {
                console.log(allEvluationsAndClassAssociation['eval'][this.counterStudents]);
                console.log(this.counterStudents);
                this.students = allEvluationsAndClassAssociation['eval'][this.counterStudents];
                this.counterStudents--;
            }
        },
    },

}
</script>

<style scoped>

</style>
