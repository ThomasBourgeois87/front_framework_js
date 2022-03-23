<template>
    <div class="">
        <h1>Gérer les classes</h1>
        <div>
            <h2>Ajouter une classe</h2>
            <form @submit="loadTextFromFile">
                <input type="text" v-model="name" placeholder="Nom de la classe">
                <input type="file" accept=".csv" />
                <input type="submit" value="Créer" @submit="loadTextFromFile">
            </form>
        </div>
        <div>
            <h2>Vos classes</h2>
            <div>
                <ul>
                    <li v-for="(classe, index) in classes" :key="classe">
                        <h3>{{ classe.className }} - {{ index }}</h3>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import DB from "../../Database.js";

export default {
    name: "NewClass",
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
            classesTmp: [],
        };
    },
    methods: {
        loadTextFromFile(event) {
            console.log(event);
            let reader = new FileReader();
            reader.onload = async e => {
                let file = e.target.result;

                this.classesTmp = file.split("\n").map(line => {
                    let [lastname, firstname] = line.split(",");
                    return {
                        lastname,
                        firstname,
                    };
                });
                let object = await DB.addClass(this.name, this.classesTmp);
                this.$emit('childData', object);
            };
            reader.readAsText(event.target[1].files[0]);
        },
    }
}
</script>


<style scoped>
</style>
