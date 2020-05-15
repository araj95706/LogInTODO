const MongoClient = require("mongodb").MongoClient;
const MONGO_URL = "mongodb://localhost:27017";

async function write(user) {
  const client = await MongoClient.connect(MONGO_URL);
  const database = client.db("database");
  const Users = database.collection("Users");
  let query = { name: user.name };

  let found = true;
  await Users.find(query)
    .toArray()
    .then((usert) => {
      if (!usert[0]) {
        found = false;
        Users.insertOne(user);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return found;
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
