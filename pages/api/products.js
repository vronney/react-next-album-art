import { MongoClient } from "mongodb";

async function getProducts() {
  const uri = process.env.MONGODB_CONNECTION_STRING;
  const dbName = process.env.MONGODB_DB_NAME;
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const collection = client.db(dbName).collection("Albums");

  const albums = await collection.find({}).toArray();

  client.close();

  return albums;
}

export default async function handler(req, res) {
  const albums = await getProducts();

  res.status(200).json(albums);
}
