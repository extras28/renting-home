import React from 'react';
import AppResource from 'general/constants/AppResource';
import AppButton from 'general/components/AppButton';
import PropTypes from 'prop-types';
import './style.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

HeaderLandingPage.propTypes = {

};

function HeaderLandingPage(props) {

    const [showing,setShowing] = useState(true);

    const toggleShowing = () => {
        setShowing(current => !current);
        console.log(showing);
    };

    const navigate = useNavigate();

    
   
    return (
        <div className="HeaderLandingPage">
            <nav className="navbar navbar-expand-md ">
                <div className="col container-fluid">
                    <div className='p-4'>
                        <img className="pe-2 pb-3 HeaderLandingPage_icon" src={AppResource.images.houseIcon} alt=""></img>
                        <span style={{ color: '#100A55', fontSize: '20px' }} className='font-weight-boldest HeaderLandingPage_headerText'>Home Renting</span>
                    </div>
                    <button  className=" navbar-toggler sticky-md-top "  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i style={{ fontSize: '28px', color: 'black' }} onClick={toggleShowing}  className={`${showing ? "fas fa-equals" :"fas fa-times" }`}></i>
                    </button>                 

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">

                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link font-weight-bolder HeaderLandingPage_item ps-3 pe-3" aria-current="page" href="#">Rent</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bolder HeaderLandingPage_item ps-3 pe-3" href="#">Buy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bolder HeaderLandingPage_item ps-3 pe-3" href="#">Sell</a>
                            </li>                         
                                <Dropdown>
                                    <Dropdown.Toggle className="font-weight-bolder border-0 HeaderLandingPage_dropdown" variant="" id="dropdown-basic">
                                        Manage Property
                                        <i className="far fa-angle-down ms-2 text-dark"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            
                                <Dropdown>
                                    <Dropdown.Toggle className="font-weight-bolder border-0 HeaderLandingPage_dropdown" variant="" id="dropdown-basic">
                                        Resources
                                        <i className="far fa-angle-down ms-2 text-dark"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            
                        </ul>
                        <div className=" w-100 float-end" >

                            <button style={{ minWidth: '80px', backgroundColor: '#7065f0' }} onClick={()=>navigate('/sign-up')} className='float-end btn btn-primary pt-3 pb-3 mt-5 mb-5 me-3'>Sign up</button>
                            <button style={{ minWidth: '80px', color:'#7065f0',border: '2px solid #F9FAFB', borderRadius: '8px', backgroundColor: '#edecfb' }} onClick={()=>navigate('/sign-in')} className='HeaderLandingPage_left btn pt-3 pb-3 mt-5 mb-5 ms-2 me-2 font-weight-bolder'>Login</button>
                        </div>
                    </div>




                </div>
            </nav>
        </div>
    );
}

export default HeaderLandingPage;