<template>
    <div>
        <div>
            <h1>Gérer les classes</h1>
            <h2>Ajouter une classe</h2>
            <form @submit.prevent="loadTextFromFile">
                <div>
                    <label>Nom de la classe</label>
                    <input required type="text" v-model="name" placeholder="3ème B">
                </div>
                <div>
                    <label for="file">Importer vos élèves</label>
                    <input id="file" required type="file" accept=".csv"/>
                </div>
                <input type="submit" value="Ajouter la classe" @submit.prevent="loadTextFromFile">
            </form>
        </div>
        <div v-if="classes.length !== 0">
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
                this.$emit('newClasse', object);
            };
            reader.readAsText(event.target[1].files[0]);
        },
    }
}
</script>


<style scoped>

</style>
