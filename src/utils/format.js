const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


// Funcionalidades
/*
function pageLanding(req, res) {
    return res.render(__dirname + "/views/index.html") // '(__dirname)' - 
}
function pageStudy(req, res) {
    return res.render(__dirname + "/views/study.html")
}
function pageGiveClasses(req, res) {
    return res.render(__dirname + "/views/give-classes.html")
}
*/
// Funcionalidades
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes) // Number retorna em formado de numero
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}