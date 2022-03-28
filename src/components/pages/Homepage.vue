<template>
    <div>
        <div>
            <h1>Toutes vos evaluations</h1>
            <div>
                <div class="card" v-for="(control, index) in classeEvaluation" :key="control">
                    <h3>{{control.name}}</h3>
                    <h6 v-if="control.finish === true">Terminé</h6>
                    <h4 v-if="control.finish === false">Non terminé</h4>
                    <a @click.prevent="goToEvaluation(index)">Aller à la notation</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Homepage',
    props: {
        classeEvaluation: {
            name: "classeEvaluation",
            type: Array,
            required: true,
        }
    },
    methods: {
        goToEvaluation(idControl) {
            this.$emit('newCurrentClassEvaluationId', idControl)
            window.location.href = "/#/evaluation_mode";
        }
    }
}
</script>
