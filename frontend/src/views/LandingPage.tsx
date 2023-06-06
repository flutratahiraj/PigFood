import Feedback from "../components/Feedback";
import PigFood from "../components/PigFood";
import Faq from "../components/Faq";
import Benefit from "../components/Benefit";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <PigFood />,
      <Benefit />
      <Feedback />
      <Faq />
    </>
  );
}

export default LandingPage;
