<template>
    <div class="">
        <h1>Nouvelle classe</h1>
        <input type="file" accept=".csv" @change="loadTextFromFile"/>
    </div>
</template>

<script>
export default {
    name: "NewClass",
    data() {
        return {
            fileContent: [],
        };
    },
    methods: {
        loadTextFromFile(file) {
            let reader = new FileReader();
            reader.onload = e => {
                let file = e.target.result;

               this.fileContent = file.split("\n").map(line => {
                   let [lastname, firstname] = line.split(",");
                   return {
                       lastname,
                       firstname,
                   };
               });


            };
            reader.readAsText(file.target.files[0]);

        }
    }
}
</script>


<style scoped>
</style>
