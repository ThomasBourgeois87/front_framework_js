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
}
