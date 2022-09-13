import React from 'react';
import Experiences from '../Experiences/Experiences';
import Faq from '../Faq/Faq';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <div className=''>
                <Navbar />
                <Banner />
            </div>
            <Services />
            <Experiences />
            <Features />
            <Faq />
            <Testimonial />
            <div><Contact /></div>
            <div className=' bg-footer py-10'><Footer /></div>
        </div>
    );
};

export default Home;