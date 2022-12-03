import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import HeaderLandingPage from 'general/components/Header/HeaderLandingPage'
import FooterLandingPage from 'general/components/Footer/FooterLandingPage'
import AppResource from 'general/constants/AppResource';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

LandingPage.propTypes = {

};

function LandingPage(props) {


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };



    return (
        <div className='vh-100 d-flex flex-column justify-content-between'>
            <HeaderLandingPage />
            {/* headline */}
            <div style={{ backgroundImage: 'linear-gradient(180deg, #E0DEF7 0%, rgba(224, 222, 247, 0) 100%)' }} className='HeadLine row m-0 p-0'>
                <div className="col-12 col-lg-6 text-dark  p-0">
                    <div className="HeadLine_head p-0 pl-xxl-40 pr-xxl-6 pl-md-20 pt-md-20 pr-6 pl-6 pt-sm-12 ">

                        <h1 className="HeadLine_text font-weight-boldest text-lg-start ">Buy, rent, or sell your property easily</h1>
                        <p className="font-weight-bolder text-lg-start mt-5 mb-10">A great platform to buy, sell, or even rent your properties without any commisions.</p>

                        <div className="nav nav-tabs nav-fill justify-content-center justify-content-lg-start align-items-center position-relative" role="tablist">
                            <span style={{ maxWidth: '100px' }} className="HeadLine_btn bg-white nav-link m-0  d-flex justify-content-center align-items-center" >Rent</span>
                            <span style={{ maxWidth: '100px' }} className="HeadLine_btn bg-white nav-link m-0  d-flex justify-content-center align-items-center" >Buy</span>
                            <span style={{ maxWidth: '100px' }} className="HeadLine_btn bg-white nav-link m-0  d-flex justify-content-center align-items-center" >Sell</span>
                            <div className="HeadLine_Search_large d-none d-lg-flex justify-content-between align-items-center bg-white rounded-end rounded-bot">
                                <div className="text-start ps-5 pe-5 pt-4 pb-4">
                                    <p>Location</p>
                                    <p className="font-weight-boldest m-0">Barcelona, Spain</p>

                                </div>
                                <div className="text-start ps-5 pe-5 pt-4 pb-4">
                                    <p>When</p>
                                    <p className="font-weight-boldest m-0">Select Move-in Date <i className="fal fa-calendar-alt ps-2"></i></p>

                                </div>
                                <div className="text-start ps-5 pe-5 pt-4 pb-4">
                                    <button style={{ backgroundColor: '#7065F0' }} className="btn btn-primary ">Browse Properties</button>
                                </div>
                            </div>
                        </div>
                        <div className="d-lg-none d-flex justify-content-center align-items-center">
                            <form>
                                <div style={{ height: '80px', width: '300px' }} className="input-group bg-white d-flex justify-content-between align-items-center">
                                    <input type="text" className="form-control HeadLine_border" placeholder="Search location" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{ width: '48px', height: '48px', backgroundColor: '#7065F0', borderRadius: '8px' }} className='HeadLine_input border d-flex justify-content-center align-items-center me-3' ><i style={{ color: 'white' }} className="fas fa-search"></i></span>
                                </div>

                            </form>
                        </div>
                        <div className="pt-20 pt-lg-40 d-flex justify-content-lg-between justify-content-around align-items-start text-start">
                            <div className='col-sm-6'>
                                <img src={AppResource.images.socialIcon1}></img>
                                <p style={{ color: '#7065F0', fontSize: '24px' }} className="pt-5 font-weight-boldest">50k+ renters</p>
                                <p>believe in our service</p>
                            </div>
                            <div className='col-sm-6'>
                                <img src={AppResource.images.socialIcon2}></img>
                                <p style={{ color: '#7065F0', fontSize: '24px' }} className="pt-5 font-weight-boldest">10k+ properties</p>
                                <p>and house ready for occupancy</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="HeadLine_Right col-6 p-0 bg-image img-fluid">

                    <img src={AppResource.images.testimonial} className="HeadLine_Right_image"></img>

                    <img src={AppResource.images.trustpilot} className="position-absolute bottom-0 end-0"></img>

                </div>
            </div>
            {/* benefit */}
            <div className="Benefit m-0 py-lg-25 px-lg-40 py-md-20 px-md-20 px-8 py-16 row bg-white d-flex justify-content-center">
                <div className='col-md-4 col-12 Benefit_theme bg-image img-fluid pt-10 pl-lg-10 pl-lg-16 pl-8 pr-8 mb-10'>

                    <p style={{ fontSize: '32px' }} className="font-weight-boldest">The new way to find your new home</p>
                    <p className="">Find your dream place to live in with more than 10k+ properties listed.</p>

                    <button style={{ backgroundColor: '#100A55', color: 'white', borderRadius: '8px' }} className='px-4 py-2'>Browse Properties</button>
                    <img src={AppResource.images.maskGroup} className="Benefit_theme_image"></img>
                </div>
                <div className='col-md-4 col-12 p-0 pl-md-16 pt-lg-0 pr-4'>
                    <div className='pb-md-17 d-flex d-md-block justify-content-around align-items-center'>
                        <img src={AppResource.images.propertyInsurance} className="mr-5 pb-12 pb-md-0"></img>
                        <div className=''>
                            <p className="font-weight-boldest pt-7 pb-4 m-0 " style={{ fontSize: '24px' }}>Property Insurance</p>
                            <p className="m-0">We offer our customer property protection of liability coverage and insurance for their better life.</p>
                        </div>
                    </div>
                    <div className='d-flex d-md-block justify-content-around align-items-center'>
                        <img src={AppResource.images.bestCommissions} className="mr-5 pb-12 pb-md-0"></img>
                        <div className=''>
                            <p className="font-weight-boldest pt-7 pb-4 m-0 " style={{ fontSize: '24px' }}>Lowest Commission</p>
                            <p className="m-0">You no longer have to negotiate commissions and haggle with other agents it only cost 2%!</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12 p-0 pl-md-16 pt-lg-0 pr-4'>
                    <div className='pb-md-17 d-flex d-md-block justify-content-around align-items-center'>
                        <img style={{ heigth: '64px', width: '64px' }} src={AppResource.images.bestPrice} className="mr-5 pb-12 pb-md-0"></img>
                        <div className=''>
                            <p className="font-weight-boldest pt-7 pb-4 m-0 " style={{ fontSize: '24px' }}>Best Price</p>
                            <p className="m-0">Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.</p>
                        </div>
                    </div>
                    <div className='d-flex d-md-block justify-content-around align-items-center'>
                        <img src={AppResource.images.overallControl} className="mr-5 pb-12 pb-md-0"></img>
                        <div className=''>
                            <p className="font-weight-boldest pt-7 pb-4 m-0 " style={{ fontSize: '24px' }}>Overall Control</p>
                            <p className="m-0">Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* properties listing */}
            <div className='PropertiesListing px-lg-40 py-lg-25 px-md-10 py-md-10 px-7 py-7'>
                <div className='text-center'>
                    <p style={{ fontSize: '40px' }} className='font-weight-boldest '>Based on your location</p>
                    <p>Some of our picked properties near you location.</p>
                </div>
                <div className='d-md-flex justify-content-md-between align-items-center py-6' >
                    <div style={{ backgroundColor: '#E0DEF7', borderRadius: '8px', color: '#100A55', fontSize: '18px' }} className=' p-2 d-flex justify-content-between align-items-center mb-6'>
                        <div className='PropertiesListing_btn px-5 py-3 btn border-0 font-weight-boldest'><img className='pe-2 pb-1' src={AppResource.images.rentIcon}></img><span>Rent</span></div>
                        <div className='PropertiesListing_btn px-5 py-3 btn border-0 font-weight-boldest'><img className='pe-2 pb-1' src={AppResource.images.buyIcon}></img><span>Buy</span></div>
                        <div className='PropertiesListing_btn px-5 py-3 btn border-0 font-weight-boldest'><img className='pe-2 pb-1' src={AppResource.images.sellIcon}></img><span>Sell</span></div>
                    </div>
                    <div className=' position-relative mb-6'>
                        <input style={{ backgroundColor: '#F7F7FD', border: '2px solid #E0DEF7' }} type="text" className="form-control px-14 py-8" id="inputGroup" placeholder='Search...' />
                        <img src={AppResource.images.searchIcon} className='PropertiesListing_icon'></img>
                    </div>
                </div>
                {/* display properties  */}
                <div className='row d-none d-md-flex'>
                    <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Carousel className='d-flex d-md-none' responsive={responsive}>
                <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xxl-4 col-md-6 pb-5'>
                        <div className="card ">
                            <div className='position-relative'>

                            <img src={AppResource.images.properties1} className="card-img-top img-fluid" alt="" ></img>
                            <div className='PropertiesListing_mark'>
                                    <img className='img-fluid' src={AppResource.images.popularMark}></img>
                                    
                                </div>
                            </div>
                            <div className="card-body position-relative">
                            <p style={{ width: '48px', height: '48px', border: '1.5px solid #E0DEF7' }} className='PropertiesListing_favorite rounded-circle d-flex justify-content-center align-items-center'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>

                                <p><span style={{fontSize:'24px',color:'#7065F0'}} className='font-weight-boldest'>$2,095</span>/month </p>
                                <p style={{fontSize:'24px',color:'#000929'}} className='font-weight-boldest' >Palm Harbor</p>
                                <p className="card-text">2699 Green Valley, Highland Lake, FL</p>
                                <hr style={{border:'1px solid #E8E6F9'}}></hr>
                                <div className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img src={AppResource.images.bedroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>3 Beds</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.bathroom}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>2 Bathrooms</span>
                                        </div>
                                        <div>
                                        <img src={AppResource.images.area}></img>
                                            <span style={{fontSize:'14px'}} className='ps-1 font-weight-bolder'>5x7 m²</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>;

                {/* end */}
                <div className='d-flex justify-content-center align-items-center pt-10'>
                    <button className='btn btn-primary px-8 py-4' style={{ backgroundColor: '#100A55' }}>Browse more properties</button>
                </div>

            </div>
            {/* Tenant and landlord  */}
            <div className='Tenant p-0 m-0 px-6 py-12 px-lg-40 py-lg-25 row'>

                <div style={{ fontSize: '40px' }} className='col-12 col-md-6 d-flex justify-content-start align-items-center text-md-left text-center p-0 pr-md-15  pb-md-16 mb-6'>
                    <p className='font-weight-boldest text-white m-0 p-0'>We make it easy for <span style={{ color: '#7065F0' }}>tenants</span> and <span style={{ color: '#7065F0' }}>landlords.</span></p>
                </div>
                <div className='col-12 col-md-6 d-flex justify-content-end align-items-center text-md-left text-center p-0 pl-md-40 pb-md-16'>
                    <p className='text-white p-0 m-0'>Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
                </div>

                <Carousel className='d-none d-md-flex' responsive={responsive}>
                    <div style={{ backgroundColor: '#8581a8', borderRadius: '8px' }} className='text-white d-flex justify-content-start align-items-start m-5'>
                        <img className='d-flex justify-content-start align-items-start px-8 py-8' src={AppResource.images.virtualHomeTour}></img>
                        <div className='pr-6 py-8'>

                            <p className='font-weight-boldest' style={{ fontSize: '24px' }}>Virtual home tour</p>
                            <p className='m-0'>You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px' }} className='d-flex justify-content-start align-items-start m-5'>
                        <img className='d-flex justify-content-start align-items-start px-8 py-8' src={AppResource.images.findBestDeal}></img>
                        <div className='pr-6 py-8'>

                            <p className='font-weight-boldest' style={{ fontSize: '24px' }}>Find the best deal</p>
                            <p className='m-0'>Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#7065F0', borderRadius: '8px' }} className='text-white d-flex justify-content-start align-items-start m-5'>
                        <img className='d-flex justify-content-start align-items-start px-8 py-8' src={AppResource.images.getApply}></img>
                        <div className='pr-6 py-8'>

                            <p className='font-weight-boldest' style={{ fontSize: '24px' }}>Get ready to apply</p>
                            <p className='m-0'>Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!</p>
                        </div>
                    </div>
                </Carousel>;
                <div className='d-flex d-md-none row m-0 p-0'>
                    <div style={{ backgroundColor: '#8581a8', borderRadius: '8px' }} className='text-white justify-content-center align-items-center  mt-6 px-7 pb-7'>
                        <img className='pt-6 pb-4' src={AppResource.images.virtualHomeTour}></img>
                        <div className=''>

                            <p className='font-weight-boldest' style={{ fontSize: '24px' }}>Virtual home tour</p>
                            <p className='m-0'>You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px' }} className='justify-content-center align-items-center  mt-6 px-7 pb-7'>
                        <img className='pt-6 pb-4' src={AppResource.images.findBestDeal}></img>
                        <div className=''>

                            <p className='font-weight-boldest' style={{ fontSize: '24px' }}>Find the best deal</p>
                            <p className='m-0'>Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#7065F0', borderRadius: '8px' }} className='justify-content-center align-items-center text-white  mt-6 px-7 pb-7'>
                        <img className='pt-6 pb-4' src={AppResource.images.getApply}></img>
                        <div className=''>

                            <p className='font-weight-boldest' style={{ fontSize: '24px' }}>Get ready to apply</p>
                            <p className='m-0'>Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!</p>
                        </div>
                    </div>
                </div>

                <div className='row d-flex justify-content-center align-items-center m-0 p-0 pb-16 pt-16 px-md-10 text-center'>
                    <div className=' col-12 col-md-4 p-0 border-right-md pr-md-13 pl-md-12 pr-0'>
                        <p style={{ fontSize: '40px' }} className='text-white font-weight-boldest'>7.4%</p>
                        <p className='text-white'>Property Return Rate</p>
                    </div>
                    <hr style={{ width: '64px', border: '1px solid white' }} className='m-0 p-0 d-md-none mt-5 mb-5 bg-white'></hr>
                    <div className=' col-12 col-md-4 p-0 border-right-md pr-md-13 pl-md-12 pr-0'>
                        <p style={{ fontSize: '40px' }} className='text-white font-weight-boldest'>3,856</p>
                        <p className='text-white'>Property in Sell & Rent</p>
                    </div>
                    <hr style={{ width: '64px', border: '1px solid white' }} className='m-0 p-0 d-md-none mt-5 mb-5 bg-white'></hr>
                    <div className=' col-12 col-md-4 p-0 pr-md-13 pl-md-12 pr-0'>
                        <p style={{ fontSize: '40px' }} className='text-white font-weight-boldest'>2,540</p>
                        <p className='text-white'>Daily Completed Transactions</p>
                    </div>
                </div>
            </div>
            {/* CTA */}
            <div className="CTA text-center px-lg-40 py-lg-16 px-10 py-12">
                <div className=' px-0 px-xl-40 px-md-20'>

                    <p className="font-weight-boldest mb-2" style={{ fontSize: '24px', color: '#7065F0' }}>No Spam Promise</p>
                    <h1 className="font-weight-boldest mb-4" style={{ fontSize: '40px' }}>Are you a landlord?</h1>
                    <p className='pb-12'>Discover ways to increase your home's value and  get listed. No Spam.</p>
                    <div className='d-flex justify-content-center align-items-center px-xxl-30 px-xl-20 px-lg-10 p-0'>
                        <form className='position-relative vw-100'>
                            <input style={{ fontSize: '18px' }} type="text" className="form-control px-4 py-md-10 py-7" id="inputGroup" placeholder='Enter your email address' />
                            <span style={{ backgroundColor: '#7065F0', fontSize: '16px', color: 'white' }} className='CTA_largeForm d-none d-md-block btn px-10 py-3 font-weight-boldest'>Submit</span>

                            <span style={{ backgroundColor: '#7065F0', fontSize: '16px', color: 'white' }} className='CTA_smallForm d-block d-md-none btn px-10 py-3 font-weight-boldest mt-4'>Submit</span>
                        </form>
                    </div>
                    <p className='pt-6'>Join <span style={{ color: '#7065F0' }}>10,000+</span> other landlords in our estatery community.</p>
                </div>
            </div>

            <FooterLandingPage />
        </div>
    );

}

export default LandingPage;