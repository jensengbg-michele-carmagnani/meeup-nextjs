import React, { Fragment } from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDatial";
import { MongoClient, ObjectId } from "mongodb";


function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{ props.meetupData.title }</title>
        <meta name="description" content={props.meetupData.description}></meta>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}
export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://michele:63ZjnRttdaxOFRoi@cluster0.3xonm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meeupsCollection = db.collection("meetups");
  const meetups = await meeupsCollection.find({}, { _id: 1 }).toArray();
  client;

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://michele:63ZjnRttdaxOFRoi@cluster0.3xonm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meeupsCollection = db.collection("meetups");
  const selectedMeetup = await meeupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  // const selectedMeetup = await apiSelected(meetupId)
  // console.log(selectedMeetup)

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetails;
