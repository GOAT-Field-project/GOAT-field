// import Hero from "../Components/homepage/Hero";
// export default function HomePage() {
//   return (
//     <>



//     </>
//   );
// }


import styled from "styled-components";
import Offers from "../components/Offers";
import FeaturedCities from "../components/FeaturedCities";
import HomeNavbar from "../Components/HomeNavBar";
import CitySlider from "../Components/CitySlider";

const Container = styled.div`
  /* border: 1px solid blue; */
  margin: 20px 150px;

  @media screen and (max-width: 1200px) {
    margin: 20px 30px;
  }

  @media screen and (max-width: 675px) {
    margin: 20px;
  }
`;

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <Container>
        <Offers />
        <FeaturedCities />
        <CitySlider />
      </Container>
    </>
  );
};

export default Home;
