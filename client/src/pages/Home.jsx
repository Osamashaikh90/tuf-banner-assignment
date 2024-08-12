// import React from 'react'
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Perks from '../components/Perks';
const Home = () => {

  const data = {
    timer: 82800,
    description: "Elevate Your Learning Journey with TUF+ Course \n\n Curated learning, approach-wise solutions, personalized \n roadmaps, expert doubt assistance, and more!",
    heading: "TakeUForward",
    link:" https://takeuforward.org/plus",
  };

  return (
    <>
        <Hero />
        <Banner  data={data}/>
        <Perks />
    </>
  )
}

export default Home