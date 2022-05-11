import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            class=" p-10">
            <div className='footer bottom-2'>
                <div className='px-20'>
                    <span class="footer-title uppercase">Services</span>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div className='px-20'>
                    <span class="footer-title uppercase">Our Health</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div className='px-20'>
                    <span class="footer-title uppercase">Our Address</span>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                    <a class="link link-hover">Terms of use</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>

        </footer>
    );
};

export default Footer;