import React from 'react';
import AppResource from 'general/constants/AppResource';
import AppButton from 'general/components/AppButton';
import PropTypes from 'prop-types';
import './style.scss';
import Dropdown from 'react-bootstrap/Dropdown';

HeaderLandingPage.propTypes = {

};

function HeaderLandingPage(props) {

    return (
        <div className="HeaderLandingPage">

            <div className="w-100 border-bottom d-flex m-0 justify-content-between align-items-center">

                <div className='p-5 me-5 d-flex justify-content-start align-items-center '>

                    <div className='pe-3 w-100'>
                        <i style={{ fontSize: '20px', color: '#7065F0' }} className="fas fa-home-heart "></i>
                        <span style={{ color: '#100A55', fontSize: '20px' }} className='font-weight-boldest'>Home Renting</span>
                    </div>
                    <div className="d-md-flex d-none justify-content-start align-items-center">

                        <span className="me-2 p-4"><a className="text-dark font-weight-bolder" href="#">Rent</a></span>
                        <span className="me-2 p-4"><a className="text-dark font-weight-bolder" href="#">Buy</a></span>
                        <span className="me-2 p-4"><a className="text-dark font-weight-bolder" href="#">Sell</a></span>

                        <div className="ps-1">
                            <Dropdown>
                                <Dropdown.Toggle className="font-weight-bolder" variant="" id="dropdown-basic">
                                    Manage Property
                                    <i className="far fa-angle-down ms-2 text-dark"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                        <div className="ps-4">
                            <Dropdown>
                                <Dropdown.Toggle className="font-weight-bolder" variant="" id="dropdown-basic">
                                    Resources
                                    <i className="far fa-angle-down ms-2 text-dark"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </div>

                </div>
                <div>
                    <i style={{ fontSize: '28px' }} className="fal fa-equals text-dark HeaderLandingPage_mobile me-5"></i>
                </div>
                <div className="HeaderLandingPage_Right">

                    <div className="d-flex justify-content-end align-items-center">
                        <button style={{ minWidth: '80px', border: '2px solid #F9FAFB', borderRadius: '8px', backgroundColor: '#edecfb' }} className='btn me-5 pt-3 pb-3 mt-5 mb-5 font-weight-bolder'>Login</button>
                        <button style={{ minWidth: '80px', backgroundColor: '#7065f0' }} className='btn btn-primary me-5 pt-3 pb-3 mt-5 mb-5'>Sign up</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderLandingPage;