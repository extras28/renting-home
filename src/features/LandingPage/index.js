import React from 'react';
import PropTypes from 'prop-types';
import HeaderLandingPage from 'general/components/Header/HeaderLandingPage'
import FooterLandingPage from 'general/components/Footer/FooterLandingPage'

LandingPage.propTypes = {
    
};

function LandingPage(props) {
    return (
        <div className='min-vh-100 d-flex flex-column justify-content-between'>
            <HeaderLandingPage />  
              <div>
                
              </div>
            <FooterLandingPage />
        </div>
    );
}

export default LandingPage;