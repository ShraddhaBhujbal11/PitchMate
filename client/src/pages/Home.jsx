import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/hero';
import CategorySlider from '../components/CategorySlider';
import FoundersSection from '../components/FoundersSection';
import ExploreStartups from '../components/ExploreStartups';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySlider />
      <FoundersSection />
      <FoundersSection hideHeading={true}/>
      <ExploreStartups />
    </>
  );
};

export default Home;
