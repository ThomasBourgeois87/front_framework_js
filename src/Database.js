export default {
    async addClass(className, students)
    {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise( (resolve) => {
            // webstorage save
            this.getAllExams()
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

    async getAllExams()
    {
        return new Promise((resolve) => {
            if (localStorage.getItem("classes") === null) {
                resolve([]);
            }
            resolve(JSON.parse(localStorage.getItem("classes")));
        });
    },

    async addExam(examName)
    {
        return new Promise( (resolve) => {
            this.getAllExams()
                .then(async (evaluations) => {

                    let id = 0;
                    if(evaluations === null) {
                        evaluations = [];
                    }

                    let object = {
                        id: id,
                        examName: examName,
                    }
                    evaluations.push(object);
                    await localStorage.setItem('exams', examName);
                    resolve(object);
                });
        });
    },

    async addEvalToDb(db, evaluation) {
        return new Promise((resolve) => {
            let request = db.transaction(['evaluation'],'readwrite')
                .objectStore('evaluation')
                .add(evaluation);

            request.onsuccess = function() {
                resolve();
            };
        });
    },
    async getEvaluationFromDb(db) {
        return new Promise((resolve) => {
            db.transaction(['evaluation'],'readwrite')
                .objectStore('evaluation')
                .getAll().onsuccess = function(event) {
                resolve(event.target.result);
            };
        });
    },
    getDb() {
        return new Promise((resolve) => {
            let request = indexedDB.open('evaluation', 1);
            request.onsuccess = function() {
                resolve(request.result);
            };
        });
    },

}
