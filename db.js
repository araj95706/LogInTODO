const MongoClient = require("mongodb").MongoClient;
const MONGO_URL = "mongodb://localhost:27017";

async function write(user) {
  const client = MongoClient.connect(MONGO_URL);
  const database = client.db("database");
  const Users = database.collection("Users");

  let x = await Users.findOne({ name: user.name })
    .then(() => {
      console.log("succes");
    })
    .catch(() => {
      console.log("failure");
    });
}

async function read(user) {
  const client = await MongoClient.connect(MONGO_URL); 
  const database = client.db("database");
  const Users = database.collection("Users");

  let query = { name: user.name, password: user.password };
  await Users.findOne(query)
    .then(() => {
      console.log("user exist");
    })
    .catch((err) => {
      console.log("success");
    });
}

module.exports = {
  write,
  read,
};
