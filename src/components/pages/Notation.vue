<template>
    <div>
        <div>
            <h1>{{ currentClassEvaluationId }}</h1>
            <button>Élève précédent</button>
            <button>Élève suivant</button>
        </div>
    </div>
</template>

<script>
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

    },

}
</script>

<style scoped>

</style>
