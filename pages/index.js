import MeetupList from "../components/meetups/MeetupList";
import Layout from '../components/layout/Layout'
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:"https://picsum.photos/id/870/200/300",
    description: "This is a second meetups",
  },

  {
    id: "m1",
    title: "A second Meetup",
    image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    description: "This is a second meetups",
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}
export default HomePage;
