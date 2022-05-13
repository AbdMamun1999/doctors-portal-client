import React from 'react';
import Info from './Info';
import Service from './Service';
import Banner from './Banner';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info>s</Info>
           <Service></Service>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
           <ContactUs></ContactUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;