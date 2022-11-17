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
        <div className="HeaderLandingPage py-4 px-6">
            <nav className="navbar navbar-expand-md p-0">
                <div className="col container-fluid p-0">
                    <div className='d-flex flex-row justify-content-center align-items-center me-2'>
                        <img className="HeaderLandingPage_icon" src={AppResource.images.houseIcon} alt=""></img>
                        <span style={{ color: '#100A55', fontSize: '24px' }} className='font-weight-boldest HeaderLandingPage_headerText'>Home Renting</span>
                    </div>
                    <button  className=" navbar-toggler sticky-md-top "  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i style={{ fontSize: '28px', color: 'black' }} onClick={toggleShowing}  className={`${showing ? "fas fa-equals" :"fas fa-times" }`}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className=" d-md-flex  justify-content-lg-center align-items-md-center navbar-nav  m-0">
                            <li className="nav-item">
                                <a className="nav-link font-weight-bolder HeaderLandingPage_item " aria-current="page" href="#">Rent</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bolder HeaderLandingPage_item " href="#">Buy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bolder HeaderLandingPage_item " href="#">Sell</a>
                            </li>                         
                                <Dropdown>
                                    <Dropdown.Toggle style={{fontSize:'16px'}} className="font-weight-bolder border-0 ps-0 HeaderLandingPage_dropdown" variant="" id="dropdown-basic">
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
                                    <Dropdown.Toggle style={{fontSize:'16px'}} className="font-weight-bolder border-0 ps-0 HeaderLandingPage_dropdown" variant="" id="dropdown-basic">
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
                        <div className="w-100 float-end" >

                            <button style={{fontSize:'16px' ,backgroundColor: '#7065f0' }} className='float-end btn btn-primary '>Sign up</button>
                            <button style={{fontSize:'16px' ,color:'#7065f0',border: '2px solid #F9FAFB', borderRadius: '8px', backgroundColor: '#edecfb' }} className='HeaderLandingPage_left me-2 btn font-weight-bolder'>Login</button>
                        </div>
                    </div>




                </div>
            </nav>
        </div>
    );
}

export default HeaderLandingPage;