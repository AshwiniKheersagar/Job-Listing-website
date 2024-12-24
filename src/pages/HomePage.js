import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListing from '../components/JobListing';
import ViewAllJob from '../components/ViewAllJob';

const HomePage = () => {
  return(
    <>
       <Hero />
       <HomeCards />
       <JobListing isHome={true} />
       <ViewAllJob />

    </>

  ); 
    
  
}

export default HomePage;