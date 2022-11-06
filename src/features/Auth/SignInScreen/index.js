import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Placeholder } from 'react-bootstrap';
import AppResource from 'general/constants/AppResource';
import BaseTextField from 'general/components/Form/BaseTextField';
import { useFormik } from 'formik';
import AppButton from 'general/components/AppButton';
import Utils from 'general/utils/Utils';
import ToastHelper from 'general/helpers/ToastHelpers';
import * as Yup from 'yup';

SignInScreen.propTypes = {

};

const sTag = '[SignInScreen]';

function SignInScreen(props) {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            const params = { ...values };
            let inputPassword = params.password;
            params.password = Utils.sha256(inputPassword);
            try {
                console.log(params);
                ToastHelper.showSuccess('Đăng nhập thành công')
                // const res = unwrapResult(await dispatch(thunkSignIn(params)));
                // if (res) {
                //     const displayName = UserHelper.getDisplayName(res.account);
                //     ToastHelper.showSuccess(`Xin chào, ${displayName}`);
                //     navigate(-1);
                // }
            } catch (error) {
                console.log(`${sTag} loggin error: ${error.message}`);
                // ToastHelper.showError('Đăng nhập không thành công');
            }
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Bạn chưa nhập email').email('Email không hợp lệ'),
            password: Yup.string().required('Bạn chưa nhập mật khẩu'),
        }),
    })

    return (


        // <div className="row g-0">
        //     <div className="col-lg-6 h-100 lg6">
        //         <div className='h4 text-start mt-5 ms-5 mb-5 pb-5 pt-5 ps-3 '>
        //             <i style={{ fontSize: '20px', color: '#7065F0' }} className="fas fa-home-heart "></i>
        //             <span style={{ color: '#100A55' }} className='font-weight-boldest'>Home Renting</span>
        //         </div>
        //         <hr color="#7065F0" />
        //         <div className="mt-5 ps-3 pe-5 pt-5">
        //             <form style={{ maxWidth: '500px' }} className='mt-5 mb-5 ms-5  '>
        //                 <div className='mb-3 pe-2'>

        //                     <p style={{ color: '#000929' }} className='h1 pt-1 pb-1 ps-5 font-weight-boldest '>Welcome back</p>
        //                     <p className='ps-5 font-size-lighter'>Welcome back! Please enter your details.</p>
        //                 </div>
        //                 <div className='mb-3 ms-5 me-5  '>
        //                     <label className="form-label font-weight-bolder">Email address</label>
        //                     <input type="email" className="inputform form-control" placeholder="hi@example.com"></input>
        //                 </div>
        //                 <div className='mb-3 ms-5 me-5 '>
        //                     <label className="form-label font-weight-bolder">Password</label>
        //                     <input type="password" className="inputform form-control" placeholder="Enter password"></input>
        //                 </div>
        //                 <div className='text-center'>
        //                     <p style={{ color: '#7065F0' }} className='text-center'>Forgot Password ?</p>
        //                 </div>
        //                 <div className="d-grid gap-2 ps-0 pe-0 ms-5 me-5 ">
        //                     <button style={{ backgroundColor: '#7065F0', padding: '10px' }} className="btn btn-primary" type="button">Login</button>
        //                     <button style={{ borderColor: '#D6DDEB', backgroundColor: 'white', color: 'black' }} className="btn text-center" type="button"><img style={{ paddingRight: '6px' }} src={AppResource.images.imgGoogleLogo} />Continue with Google</button>
        //                 </div>
        //                 <div className='text-center pt-5 mt-3'>
        //                     <span>Don't have an account ? </span>
        //                     <a className="font-weight-bolder" href="" style={{ color: 'black' }}><u>Sign up for free</u></a>
        //                 </div>

        //             </form>

        //         </div>
        //     </div>
        //     <div style={{ backgroundColor: '#F7F7FD' }} className="col-lg-6 lg6 gradient-custom">
        //         <div className='login_background bg-image'>
        //             <div style={{ paddingTop: '48px' }} className='pt-5 ps-5 pe-5 pb-5 h-100'>
        //                 <div style={{ width: '30vw', minWidth: '20rem' }} className="card mt-24 ms-5 bg-transparent pt-5 border-0">
        //                     <div style={{ color: '#D6DDEB' }} className=' border border-2 pt-5 ps-5 pe-5 rounded bg-white'>

        //                         <img src={AppResource.images.houseTemplateImage} className="img-fluid rounded float-start" alt=""></img>
        //                         <div>
        //                             <img style={{ marginTop: '-84px', marginLeft: '-8px' }} className='img-fluid' src={AppResource.images.popularMark}></img>
        //                         </div>
        //                         <div>
        //                             <img style={{ marginTop: '-84px', marginLeft: '-8px' }} className='img-fluid ' src={AppResource.images.vector}></img>
        //                         </div>
        //                         <div style={{ color: 'black' }}>
        //                             <div>

        //                                 <p style={{ width: '36px', height: '36px', border: '1.5px solid #E0DEF7' }} className='d-flex justify-content-center align-items-center rounded-circle float-end'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>
        //                                 <h5 className="card-title font-weight-bolder mb-2 me-5 ">Beverly Springfield</h5>
        //                                 <h6 className='card-title font-weight-lighter me-5 mb-0'>143/68 Brown Stress , Ohio</h6>
        //                                 <hr color="#7065F0"></hr>
        //                             </div>
        //                             <span className='me-3'>
        //                                 <i style={{ color: '#7065F0' }} className="fal fa-bed-alt me-1"></i>
        //                                 4 Beds
        //                             </span>
        //                             <span className='me-3'>
        //                                 <i style={{ color: '#7065F0' }} className="far fa-bath me-1"></i>
        //                                 2 Bathrooms
        //                             </span>
        //                             <span className='me-3'>
        //                                 <img src={AppResource.images.area}></img>
        //                                 6x7.5m2
        //                             </span>

        //                             <div style={{ backgroundColor: '#F0EFFB' }} className=' mt-3 mb-5 pt-3 ps-3 pb-3 pe-3 rounded'>
        //                                 <button style={{ backgroundColor: '#100A55', color: 'white' }} type="submit" className='rounded float-end mt-3 mb-3 ps-3 pe-3 pt-2 pb-2'>

        //                                     <img className='me-3' src={AppResource.images.list}></img>
        //                                     Apply now
        //                                     <i className="ms-3 fas fa-angle-down"></i>

        //                                 </button>
        //                                 <div>

        //                                     <p className='font-weight-bolder'>Rent Sale</p>
        //                                     <h3 style={{ color: '#7065F0' }} className='d-flex align-content-start ms-0'>$2,700<span className='d-flex justify-content-center align-items-center font-weight-light' style={{ fontSize: '12px', color: 'black' }}>/month</span></h3>
        //                                 </div>
        //                             </div>

        //                         </div>

        //                     </div>
        //                     <div>
        //                     </div>
        //                 </div>
        //                 <div style={{ maxWidth: '30vw',paddingTop:'32px'}} className="ms-5 ps-1 pe-1">
        //                     <div className='d-flex justify-content-start align-items-center mb-2 pb-2'>
        //                     <span className="font-weight-bolder">Powered By</span>
        //                     <img className="ms-2"src={AppResource.images.house}></img>
        //                     </div>
        //                     <p style={{ fontSize: '12px' }}>You agree to Estatery's <a style={{color:'#7065F0'}}href="">Terms of Use & Privacy Policy</a>. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.</p>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>

        // </div>
        <div className='SignInScreen row min-vh-100 m-0 bg-white'>
            {/* left*/}
            <div className='col-12 col-lg-6 p-0 bg-white'>
                {/* header */}
                <div className='py-10 pl-10 border-bottom'>
                    <i style={{ fontSize: '20px', color: '#7065F0' }} className="fas fa-home-heart "></i>
                    <span style={{ color: '#100A55', fontSize: '20px' }} className='font-weight-boldest'>Home Renting</span>
                </div>

                {/* form */}
                <div className='d-flex align-items-center justify-content-center mt-20'>
                    <form style={{width: '352px'}}  onClick={formik.handleSubmit}>
                        <p style={{ color: '#000929', fontSize: '32px' }} className='font-weight-boldest '>Welcome back</p>
                        <p className='font-weight-bold' style={{ color: '#000929', fontSize: '16px', opacity: '0.5' }}>Welcome back! Please enter your details.</p>
                        <BaseTextField 
                            name='email'
                            label='Email'
                            placeholder='Nhập email...'
                            fieldProps={formik.getFieldProps('email')}
                            fieldHelper={formik.getFieldHelpers('email')}
                            fieldMeta={formik.getFieldMeta('email')}
                        />
                        <BaseTextField 
                            type='password'
                            name='password'
                            label='Mật khẩu'
                            placeholder='Nhập mật khẩu'
                            fieldProps={formik.getFieldProps('password')}
                            fieldHelper={formik.getFieldHelpers('password')}
                            fieldMeta={formik.getFieldMeta('password')}
                        />
                        <p style={{ color: '#7065F0' }} className='text-center cursor-pointer'>Forgot Password ?</p>
                        <AppButton 
                            className='w-100 btn-purple'
                            style={{height: '48px'}}
                            text='Login'
                        />
                        <AppButton 
                            beforIcon={(<img src={AppResource.images.imgGoogleLogo} alt="google logo" />)}
                            className='btn-grey w-100 mt-6'
                            style={{backgroundColor: '#FFFFFF', border: '1px solid #D6DDEB', height: '48px'}}
                            text='Continue with Google'
                        />
                        <p className='text-center mt-10'>Don't have an account ? <a className="font-weight-bolder" href="#" style={{ color: 'black' }}><u>Sign up for free</u></a></p>
                     
                    </form>
                </div>
            </div>

            {/* right */}
            <div className='SignInScreen_Right col-6 p-0'>
            <div className='login_background bg-image'>
                    <div style={{ paddingTop: '48px' }} className='pt-5 ps-5 pe-5 pb-5 h-100'>
                        <div style={{ width: '30vw', minWidth: '20rem' }} className="card mt-24 ms-5 bg-transparent pt-5 border-0">
                            <div style={{ color: '#D6DDEB' }} className=' border border-2 pt-5 ps-5 pe-5 rounded bg-white'>

                                <img src={AppResource.images.houseTemplateImage} className="img-fluid rounded float-start" alt=""></img>
                                <div>
                                    <img style={{ marginTop: '-84px', marginLeft: '-8px' }} className='img-fluid' src={AppResource.images.popularMark}></img>
                                </div>
                                <div>
                                    <img style={{ marginTop: '-84px', marginLeft: '-8px' }} className='img-fluid ' src={AppResource.images.vector}></img>
                                </div>
                                <div style={{ color: 'black' }}>
                                    <div>

                                        <p style={{ width: '36px', height: '36px', border: '1.5px solid #E0DEF7' }} className='d-flex justify-content-center align-items-center rounded-circle float-end'><i style={{ color: '#7065F0' }} className="far fa-heart mt-5 mb-5 "></i></p>
                                        <h5 className="card-title font-weight-bolder mb-2 me-5 ">Beverly Springfield</h5>
                                        <h6 className='card-title font-weight-lighter me-5 mb-0'>143/68 Brown Stress , Ohio</h6>
                                        <hr color="#7065F0"></hr>
                                    </div>
                                    <span className='me-3'>
                                        <i style={{ color: '#7065F0' }} className="fal fa-bed-alt me-1"></i>
                                        4 Beds
                                    </span>
                                    <span className='me-3'>
                                        <i style={{ color: '#7065F0' }} className="far fa-bath me-1"></i>
                                        2 Bathrooms
                                    </span>
                                    <span className='me-3'>
                                        <img src={AppResource.images.area}></img>
                                        6x7.5m2
                                    </span>

                                    <div style={{ backgroundColor: '#F0EFFB' }} className=' mt-3 mb-5 pt-3 ps-3 pb-3 pe-3 rounded'>
                                        <button style={{ backgroundColor: '#100A55', color: 'white' }} type="submit" className='rounded float-end mt-3 mb-3 ps-3 pe-3 pt-2 pb-2'>

                                            <img className='me-3' src={AppResource.images.list}></img>
                                            Apply now
                                            <i className="ms-3 fas fa-angle-down"></i>

                                        </button>
                                        <div>

                                            <p className='font-weight-bolder'>Rent Sale</p>
                                            <h3 style={{ color: '#7065F0' }} className='d-flex align-content-start ms-0'>$2,700<span className='d-flex justify-content-center align-items-center font-weight-light' style={{ fontSize: '12px', color: 'black' }}>/month</span></h3>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div>
                            </div>
                        </div>
                        <div style={{ maxWidth: '30vw',paddingTop:'32px'}} className="ms-5 ps-1 pe-1">
                            <div className='d-flex justify-content-start align-items-center mb-2 pb-2'>
                            <span className="font-weight-bolder">Powered By</span>
                            <img className="ms-2"src={AppResource.images.house}></img>
                            </div>
                            <p style={{ fontSize: '12px' }}>You agree to Estatery's <a style={{color:'#7065F0'}}href="">Terms of Use & Privacy Policy</a>. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignInScreen;