async function connectToDatabase(user, password) {
    if (user == "naruto" && password == "uzumaki") {
        console.log("Conexão estabelecida");
    } else {
        console.log("erro");
    }
}

export default connectToDatabase;
