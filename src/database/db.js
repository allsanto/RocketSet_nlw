const Database = require('sqlite-async') // importar o modulo que vou usar

function execute(db) { // Criando as Tabelas do Banco de Dados
    // Criar as tabelas do banco de dados.
    // Todo 'proffy' tem aula'class' e toda aula tem dia da semana'class_schedule'
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute) // Abrir o banco de dados - .then(execute), Executa a função que eu quero