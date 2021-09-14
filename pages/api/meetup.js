// import { MongoClient, ObjectId } from "mongodb";
// const apiSelected = async (meetupId) => {
//   const client = await MongoClient.connect(
//     "mongodb+srv://michele:63ZjnRttdaxOFRoi@cluster0.3xonm.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db = client.db();
//   const meeupsCollection = db.collection("meetups");
//   const selectedMeetup = await meeupsCollection.findOne({
//     _id: ObjectId(meetupId),
//   });
//   res.send(selectedMeetup)
// };
// export default apiSelected;
