<template>
    <div>
        <div>
            <h1>Toutes vos evaluations</h1>
            <div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Homepage',
    props: {
    },
    methods: {
        changePage(page) {
            console.log(page);
            this.$emit('idEval', page);
            //window.location.href = "/#/evaluation_mode";
        }
    }
}
</script>
