<template>
    <div>
        <div>
            <h1>{{ this.classeEvaluation[this.currentClassEvaluationId].name }}</h1>
            <h3 class="student">{{ students.studentName }}</h3>
            <div v-for="student in students.notation" :key="student.criteriaName" class="crit">
                <h3>{{ student.criteriaName }}</h3>
                <label>{{ student.value }}</label>
                <input type="range" min="0" max="100" :value="student.value" @change="emitInput">
            </div>
            <div>
                <button v-if="counterStudents > 1" class="btn" @click="previousEleve">Élève précédent</button>
                <button v-if="counterStudents < this.classeEvaluation[this.currentClassEvaluationId].eval.length"
                        class="btn" @click="nextEleve">Élève suivant
                </button>
            </div>
            <div>
                <button @click="finish" class="btn">Terminer l'évaluation et exporter</button>
            </div>
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
        classeEvaluation: {
            name: "classeEvaluation",
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            students: Array,
            counterStudents: 0,
            value: 0,
            defaultvalue: this.students
        }
    },

    beforeMount() {
        this.nextEleve();
    },

    methods: {
        emitInput () {
            console.log(this.students)
            // this.value = value
            // this.input = event.target.value
            // this.$emit('input', this.input)
        },

        async nextEleve() {
            const allEvluationsAndClassAssociation = await DB.getAllEvluationsAndClassAssociation();
            if (this.counterStudents >= allEvluationsAndClassAssociation[this.currentClassEvaluationId]['eval'].length) {
                this.counterStudents = allEvluationsAndClassAssociation['eval'].length - 1;
            } else {
                this.counterStudents++;
                this.students = allEvluationsAndClassAssociation[this.currentClassEvaluationId]['eval'][this.counterStudents];

            }
        },
        async previousEleve() {
            const allEvluationsAndClassAssociation = await DB.getAllEvluationsAndClassAssociation();
            if (this.counterStudents <= 0) {
                this.counterStudents = 0;
            } else {
                --this.counterStudents;
                this.students = allEvluationsAndClassAssociation[this.currentClassEvaluationId]['eval'][this.counterStudents];
            }
        },

        async updateDB(evaluation){
            await DB.saveEvaluation(evaluation)
        },

        async finish() {
            console.log("finish");
            const allEvluationsAndClassAssociation = await DB.getAllEvluationsAndClassAssociation();
            await DB.endEvaluation(allEvluationsAndClassAssociation[this.currentClassEvaluationId].id);
            window.location.href = "/";
        }
    },

    watch: {
        value (v) {
            this.input = v
        }
    }

}
</script>

<style scoped>
.crit {
    display: flex;
    flex-direction: column;
    justify-content: start;
}

.student {
    margin-bottom: 2rem;
}
</style>
