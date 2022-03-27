export default {
    async addClass(className, students)
    {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise( (resolve) => {
            // webstorage save
            this.getAllClasses()
                .then(async (classes) => {

                    let id = 0;
                    if(classes === null) {
                        classes = [];
                    }

                    let object = {
                        id: id,
                        className: className,
                        students: students
                    }
                    classes.push(object);
                    await localStorage.setItem('classes', JSON.stringify(classes));
                    resolve(object);
                });
        });
    },

    async getAllClasses()
    {
        return new Promise((resolve) => {
            if (localStorage.getItem("classes") === null) {
                resolve([]);
            }
            resolve(JSON.parse(localStorage.getItem("classes")));
        });
    },

    async saveEvaluation(evaluation)
    {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise( (resolve) => {
            // webstorage save
            this.getAllEvaluations()
                .then(async (evaluations) => {

                    let id = 0;
                    if(evaluations === null) {
                        evaluations = [];
                    }

                    let object = {
                        id: id,
                        evaluation: evaluation
                    }
                    evaluations.push(object);
                    await localStorage.setItem('evaluations', JSON.stringify(evaluations));
                    resolve(object);
                });
        });
    },

    async getAllEvaluations()
    {
        return new Promise((resolve) => {
            if (localStorage.getItem("evaluations") === null) {
                resolve([]);
            }
            console.log(JSON.parse(localStorage.getItem("evaluations")));
            resolve(JSON.parse(localStorage.getItem("evaluations")));
        });
    },
}
