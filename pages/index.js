import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";


// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A first Meetup",
//     image: "https://picsum.photos/seed/picsum/200/300",
//     description: "This is a second meetups",
//   },

//   {
//     id: "m2",
//     title: "A second Meetup",
//     image: "https://picsum.photos/seed/picsum/200/300",
//     description: "This is a second meetups",
//   },
// ];

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://michele:63ZjnRttdaxOFRoi@cluster0.3xonm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meeupsCollection = db.collection("meetups");
  const meetups = await meeupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id:meetup._id.toString()
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
