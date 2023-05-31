import CarouselCard from "../components/CarouselCard";

function HomePage() {
  return (
    <>
    <div style={{backgroundColor:"#FFE3F0"}}>
      <h1>HomePage (insert  navbar & score board)</h1>
      <CarouselCard title="Shrimp o Mania" category="shrimp"/>
      <CarouselCard title="Burger Bonanza" category="burger"/>
      {/* popular categories */}
      <h1>Insert icon carusel</h1>
      <h1>Insert popular categories / pic</h1>
      <CarouselCard title="Pizza Poolaza" category="pizza"/>
    </div>
    </>
  );
}

export default HomePage;
