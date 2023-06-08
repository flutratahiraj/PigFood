import Feedback from "../components/Feedback";
// import { useNavigate } from "react-router-dom";
import PigFood from "../components/PigFood";
import Faq from "../components/Faq";
import Benefit from "../components/Benefit";
import Navbar from "../components/Navbar";
// import HeaderMobile from "../components/HeaderMobile";

// interface LandingPageProps {
//   becomeButtonProps: BecomeButtonProps;
// }

function LandingPage() {
  return (
    <>
      <Navbar />
      {/* <HeaderMobile /> */}
      <PigFood />
      <Benefit />
      <Feedback />
      <Faq />
    </>
  );
}

export default LandingPage;
