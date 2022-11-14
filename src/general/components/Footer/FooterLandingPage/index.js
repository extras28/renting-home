import React from 'react';
import AppResource from 'general/constants/AppResource';
import AppButton from 'general/components/AppButton';
import PropTypes from 'prop-types';
import './style.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

FooterLandingPage.propTypes = {

};

function FooterLandingPage(props) {

    return (
        <div className="h-100 FooterLandingPage">

            <div className=" row w-100 d-flex justify-content-end align-items-start m-0 p-0 px-16 py-8">
                
                <div className="col-12 col-lg-3 d-flex justify-content-start align-items-start mt-4">
                    <img className="" src={AppResource.images.houseIcon} alt=""></img>
                    <span style={{ color: '#100A55', fontSize: '24px' }} className='font-weight-boldest '>Home Renting</span>
                </div>
    
                <div className="pt-5 col-6 col-md-4 col-lg-3">
                    <a className="text-dark font-weight-boldest" href="#">SELL A HOME</a>
                    <ul className='list-unstyled'>
                        <li><a className="text-dark" href="#">Request an offer</a></li>
                        <li><a className="text-dark" href="#">Pricing</a></li>
                        <li><a className="text-dark" href="#">Reviews</a></li>
                        <li><a className="text-dark" href="#">Stories</a></li>
                    </ul>
    
                </div>
                <div className="pt-5 col-6 col-md-4 col-lg-3">
                    <a className="text-dark font-weight-boldest" href="#">BUY, RENT AND SELL</a>
                    <ul className='list-unstyled'>
                        <li><a className="text-dark" href="#">Buy and sell properties</a></li>
                        <li><a className="text-dark" href="#">Rent home</a></li>
                        <li><a className="text-dark" href="#">Builder trade-up</a></li>
                    </ul>
                </div>
                <div className="pt-5 col-6 col-md-4 col-lg-3">
                    <a className="text-dark font-weight-boldest" href="#">ABOUT</a>
                    <ul className='list-unstyled'>
                        <li><a className="text-dark" href="#">Company</a></li>
                        <li><a className="text-dark" href="#">How it works</a></li>
                        <li><a className="text-dark" href="#">Contact</a></li>
                        <li><a className="text-dark" href="#">Investors</a></li>
                    </ul>
                </div>
                <div className="pt-5 col-6 col-md-4 col-lg-3">
                    <a className="text-dark font-weight-boldest" href="#">BUY A HOME</a>
                    <ul className='list-unstyled'>
                        <li><a className="text-dark" href="#">Buy</a></li>
                        <li><a className="text-dark" href="#">Finance</a></li>
                    </ul>
                </div>
                <div className="pt-5 col-6 col-md-4 col-lg-3">
                    <a className="text-dark font-weight-boldest" href="#">TERMS & PRIVACY</a>
                    <ul className='list-unstyled'>
                        <li><a className="text-dark" href="#">Trust & Safety</a></li>
                        <li><a className="text-dark" href="#">Terms of Service</a></li>
                        <li><a className="text-dark" href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="pt-5 col-6 col-md-4 col-lg-3">
                    <a className="text-dark font-weight-boldest" href="#">RESOURCES</a>
                    <ul className='list-unstyled'>
                        <li><a className="text-dark" href="#">Blog</a></li>
                        <li><a className="text-dark" href="#">Guides</a></li>
                        <li><a className="text-dark" href="#">FAQ</a></li>
                        <li><a className="text-dark" href="#">Help Center</a></li>
    
                    </ul>
                </div>
            </div>
                <hr className="m-0" style={{border:'0.5px solid #7065F0'}}/>
                <div className='row d-flex justify-content-between align-items-center m-0 py-6 px-6'>
                    <div className="d-flex justify-content-center align-items-center justify-content-md-start mb-4 mt-4 col-12 col-md-6 " style={{fontSize:'16px'}}>©2021 Estatery. All rights reserved</div>
                    <div className="d-flex justify-content-center justify-content-md-end align-items-center mb-4 mt-4 col-12 col-md-6 ">
                    <a href="#" className=' me-5'><i style={{fontSize:'20px'}} className="FooterLandingPage_btn fab fa-facebook-f"></i></a>
                    <a href="#" className=' me-5'><i style={{fontSize:'20px'}} className="FooterLandingPage_btn fab fa-instagram"></i></a>
                    <a href="#" className=' me-5'><i style={{fontSize:'20px'}} className="FooterLandingPage_btn fab fa-twitter"></i></a>
                    <a href="#" className=' '><i style={{fontSize:'20px'}} className="FooterLandingPage_btn fab fa-linkedin"></i></a>
                    </div>
                </div>
        </div>
    )
}

export default FooterLandingPage;