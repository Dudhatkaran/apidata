const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

mongooes.connect("mongodb+srv://karanvd2002:karan1234@cluster000.me3p6tx.mongodb.net/data", {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connection Done');
}).catch((error) => {
    console.log(error);
})