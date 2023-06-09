import CarouselCard from "../components/CarouselCard";
import Navbar from "../components/Navbar";
import Scoreboard from "../components/Scoreboard";
// import HMLoggedIn from "../components/HeaderMobileLoggedIn";

function HomePage() {
  return (
    <>
      <Navbar />
      {/* <HMLoggedIn /> */}
      <div style={{ backgroundColor: "#FFE3F0" }}>
        <Scoreboard />
        <CarouselCard title="Shrimp o Mania" category="shrimp" />
        <CarouselCard title="Burger Bonanza" category="burger" />
        {/* popular categories */}
        <h1>Insert icon carusel</h1>
        <h1>Insert popular categories / pic</h1>
        <CarouselCard title="Pizza Poolaza" category="pizza" />
      </div>
    </>
  );
}

export default HomePage;
