import React from 'react';
import HeroSection from './Home_Page/HeroSection';
import HomeAbout from './Home_Page/HomeAbout';
import HomeServices from './Home_Page/HomeServices';
import HomeProject from './Home_Page/HomeProject';
import HomeTestimonial from './Home_Page/HomeTestimonial';
import HomeNeed from './Home_Page/HomeNeed';
import Footer from '../Footer';


function Home() {
    return (
        <div>
        <HeroSection/>
        <HomeAbout/>
        <HomeServices/>
       <HomeProject/>
       <HomeTestimonial/>
       <HomeNeed/>
       <Footer/>

        </div>
    )
}

export default Home
