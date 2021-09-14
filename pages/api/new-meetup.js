// /api/new-meetup
// only POST /apy/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://michele:63ZjnRttdaxOFRoi@cluster0.3xonm.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meeupsCollection = db.collection("meetups");
    const result = await meeupsCollection.insertOne(data);
    console.log(result);
    client.close()
    res.status(201).json({message:'Meetup inserted!'});
  }
}
export default handler;
