import React from 'react';
import AboutSection from './AboutPage/AboutSection';
import HomeNeed from './Home_Page/HomeNeed';
import Footer from '../Footer';
import SkillAndExperirence from './AboutPage/SkillAndExperirence'

function About() {
    return (
        <>
           <AboutSection/>
           <SkillAndExperirence/>
           <HomeNeed/>
           <Footer/>
        </>
    )
}

export default About
