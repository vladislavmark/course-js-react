let students = {
    js: [{
        name: 'Jonh',
        progress: 100,
    }, {
        name: 'ivan',
        progress: 60,
    }],
    html: {
        basic: [{
            name: 'peter',
            progress: 20,
        }, {
            name: 'ann',
            progress: 18,
        }],
        pro: [{
            name: 'sam',
            progress: 10,
        }],

        semi: [{
            name: 'test',
            progress: 100,
        }]
    },
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

// console.log(getTotalProgressByIteration(students));


function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];

    } else {
        let total = [0, 0];

        for (let subDate of Object.values(data)) {
            const subDateArr = getTotalProgressByRecursion(subDate);
            total[0] += subDateArr[0];
            total[1] += subDateArr[1];
        }
        return total;

    }
}

const result = getTotalProgressByRecursion(students)

console.log(result[0]/result[1]);