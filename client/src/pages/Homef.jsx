import React from 'react';
import Navbarf from '../components/Navbarf';
import HeroSection from '../components/hero';
import CategorySlider from '../components/CategorySlider';
import InvestorsSection from '../components/InvestorsSection';
import ExploreStartups from '../components/ExploreStartups';

const Home = () => {
  return (
    <>
      <Navbarf />
      <HeroSection />
      <CategorySlider />
      <InvestorsSection />
      <InvestorsSection hideHeading={true}/>
      <ExploreStartups />
    </>
  );
};

export default Home;
