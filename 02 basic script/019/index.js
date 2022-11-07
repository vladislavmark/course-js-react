function first() {
    setTimeout(function () {
        console.log('1');
    }, 1000);
}

function second() {
    console.log('2');
}

first();
second();


function learnJS(lang, callback) {
    console.log(lang);

    callback();
}

function done() {
    console.log('lerned');
}

learnJS('java', done);



const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const { age } = plan;
        const { languages } = plan.skills;

        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function (lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;

    },
};

function showProgrammingLangs(plan) {
    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        console.log(`Язык ${key} изучен на ${programmingLangs[key]}\n`);
    }
}
showProgrammingLangs(personalPlanPeter);




function showExperience(plan) {
    const { exp } = plan.skills;
    console.log(exp);
}
showExperience(personalPlanPeter);