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
            className="w-full mx-auto">
            <div className='footer bottom-2 mt-20 w-full'>
                <div className='px-20 w-1/2 mx-auto'>
                    <span className="footer-title uppercase">Services</span>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='px-20  w-1/2 mx-auto'>
                    <span className="footer-title uppercase">Our Health</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='px-20  w-1/2 mx-auto'>
                    <span className="footer-title uppercase">Our Address</span>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <a className="link link-hover">Terms of use</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>

        </footer>
    );
};

export default Footer;