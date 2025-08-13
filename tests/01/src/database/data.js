async function connectToDatabase(user, password) {
    if (user == process.env.USER_DATABASE && password == process.env.PASSWORD_DATABASE) {
        console.log("Conexão estabelecida");
    } else {
        console.log("erro");
    }
}

export default connectToDatabase;
