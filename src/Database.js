import {ExportToCsv} from 'export-to-csv';
export default {

    makeid() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    },

    async addClass(className, students) {
        return new Promise((resolve) => {
            this.getAllClasses()
                .then(async (classes) => {

                    if (classes === null) {
                        classes = [];
                    }

                    let object = {
                        id: this.makeid(),
                        className: className,
                        students: students
                    }
                    classes.push(object);
                    await localStorage.setItem('classes', JSON.stringify(classes));
                    resolve(object);
                });
        });
    },

    async getAllClasses() {
        return new Promise((resolve) => {
            if (localStorage.getItem("classes") === null) {
                resolve([]);
            }
            resolve(JSON.parse(localStorage.getItem("classes")));
        });
    },

    async saveEvaluation(evaluation) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise((resolve) => {
            // webstorage save
            this.getAllEvaluations()
                .then(async (evaluations) => {

                    if (evaluations === null) {
                        evaluations = [];
                    }

                    let object = {
                        id: this.makeid(),
                        evaluation: evaluation
                    }
                    evaluations.push(object);
                    await localStorage.setItem('evaluations', JSON.stringify(evaluations));
                    resolve(object);
                });
        });
    },

    async getAllEvaluations() {
        return new Promise((resolve) => {
            if (localStorage.getItem("evaluations") === null) {
                resolve([]);
            }
            resolve(JSON.parse(localStorage.getItem("evaluations")));
        });
    },

    async associateEvaluationToClasse(classe, criterias) {
        return new Promise((resolve) => {
            this.getAllEvluationsAndClassAssociation()
                .then(async (allContent) => {
                    let finalObject = {
                        id: this.makeid(),
                        name: "Evaluation du " + new Date().toLocaleDateString(),
                        eval: [],
                        finish: false
                    };
                    classe.forEach(student => {
                        const object = {
                            studentName: student.lastname + " " + student.firstname,
                            notation: []
                        }
                        criterias.forEach(criteria => {
                            object.notation.push({
                                criteriaName: criteria.name,
                                value: 0
                            })
                        })
                        finalObject.eval.push(object);
                    });
                    console.log(allContent)
                    allContent.push(finalObject);
                    await localStorage.setItem('classeEvaluation', JSON.stringify(allContent));
                    resolve(finalObject);
                });
        });
    },

    async getAllEvluationsAndClassAssociation() {
        return new Promise((resolve) => {
            if (localStorage.getItem("classeEvaluation") === null) {
                resolve([]);
            }
            resolve(JSON.parse(localStorage.getItem("classeEvaluation")));
        });
    },

    async endEvaluation(id) {
        return new Promise((resolve) => {
            this.getAllEvluationsAndClassAssociation()
                .then(async (allContent) => {
                    console.log(allContent)
                    allContent.forEach(element => {
                        if (element.id === id) {
                            element.finish = true;
                        }
                    });
                    await localStorage.setItem('classeEvaluation', JSON.stringify(allContent));

                    const options = {
                        fieldSeparator: ',',
                        quoteStrings: '"',
                        decimalSeparator: '.',
                        showLabels: true,
                        showTitle: true,
                        title: 'My Awesome CSV',
                        useTextFile: false,
                        useBom: true,
                        useKeysAsHeaders: true,
                    };

                    const csvExporter = new ExportToCsv(options);

                    csvExporter.generateCsv(allContent);

                    resolve(allContent);
                });
        });

    },

}
