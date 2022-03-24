import React from "react";
import BackHomeSection from "../components/BackHome/backHome";
import { homeData } from "../components/MainSection/Data";
import MainSection from "../components/MainSection/mainSection";
import Footer from "../components/Footer/footer";

const Home = () => {
  return (
    <>
      <BackHomeSection />
      {homeData?.map(element => <MainSection {...element}/>)}
      <Footer />
    </>
  );
};

export default Home;
