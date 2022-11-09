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


SignUpScreen.propTypes = {

};

const sTag = '[SignUpScreen]';

function SignUpScreen(props) {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            const params = { ...values };
            let inputPassword = params.password;
            params.password = Utils.sha256(inputPassword);
            try {
                console.log(params);
                ToastHelper.showSuccess('Đăng ký tài khoản thành công')
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
            name: Yup.string().required('Bạn chưa nhập đầy đủ họ tên'),
            email: Yup.string().required('Bạn chưa nhập email').email('Email không hợp lệ'),
            password: Yup.string().required('Bạn chưa nhập mật khẩu'),
        }),
    })

    return (



        <div className='SignUpScreen row min-vh-100 m-0 bg-white'>
            {/* left*/}
            <div className='col-12 col-lg-6 p-0 bg-white'>
                {/* header */}
                <div className='py-10 pl-10 w-100 border-bottom d-flex justify-content-between'>
                    <div>
                        <i style={{ fontSize: '20px', color: '#7065F0' }} className="fas fa-home-heart "></i>
                        <span style={{ color: '#100A55', fontSize: '20px' }} className='font-weight-boldest'>Home Renting</span>
                    </div>

                    <div className=" me-5">
                        <i style={{ fontSize: '28px', color: 'black' }} className="far fa-equals SignUpScreen_mobile"></i>
                    </div>

                </div>

                {/* form */}
                <div className='d-flex align-items-center justify-content-center mt-20'>
                    {/* <form style={{ width: '352px' }} onClick={formik.handleSubmit}> */}
                    {/* thay tạm thẻ div cho thẻ form ở trên  */}
                    <div style={{ width: '352px' }}>
                        <p style={{ color: '#000929', fontSize: '32px' }} className='font-weight-boldest '>Welcome back</p>
                        <p className='font-weight-bold' style={{ color: '#000929', fontSize: '16px', opacity: '0.5' }}>Welcome back! Please enter your details.</p>
                        <BaseTextField
                            type='text'
                            name='fullname'
                            label='Họ và tên'
                            placeholder='Nhập họ và tên . Ví dụ : Nguyễn Văn A'
                            fieldProps={formik.getFieldProps('fullname')}
                            fieldHelper={formik.getFieldHelpers('fullname')}
                            fieldMeta={formik.getFieldMeta('fullname')}
                        />
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
                        <div className='w-100'>

                            <p style={{ marginTop: '-16px', marginBottom: '24px' }} className='float-start'>Must be at least 8 characters.</p>
                            <p style={{ color: '#7065F0', marginTop: '-16px', marginBottom: '24px' }} className='float-end'>Forgot Password ?</p>
                        </div>
                        <div className="form-check w-100 pb-10 ps-1 d-flex justify-content-space align-items-center ">
                            <input style={{ borderColor: '#E0DEF7', fontSize: '18px' }} type="checkbox" className="form-check-input border border-2 ms-0 mt-0" id="check1" name="option1" value="something" />
                            <label className="w-100 ps-4 ms-1 form-check-label font-weight-bolder" htmlFor="check1"><span>I am a property manager.</span></label>
                        </div>
                        <AppButton
                            className='w-100 btn-purple'
                            style={{ height: '48px' }}
                            text='Sign up'
                        />
                        <AppButton
                            beforIcon={(<img src={AppResource.images.imgGoogleLogo} alt="google logo" />)}
                            className='btn-grey w-100 mt-6'
                            style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6DDEB', height: '48px' }}
                            text='Sign up with Google'
                        />
                        <p className='text-center mt-10'>Already have an account ? <a className="font-weight-bolder" href="#" style={{ color: 'black' }}><u>Login</u></a></p>
                    </div>
                    {/* </form> */}

                </div>
            </div>

            {/* right */}
            <div className='SignUpScreen_Right col-6 p-0'>
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
                        <div style={{ maxWidth: '30vw', paddingTop: '32px' }} className="ms-5 ps-1 pe-1">
                            <div className='d-flex justify-content-start align-items-center mb-2 pb-2'>
                                <span className="font-weight-bolder">Powered By</span>
                                <img className="ms-2" src={AppResource.images.house}></img>
                            </div>
                            <p style={{ fontSize: '12px' }}>You agree to Estatery's <a style={{ color: '#7065F0' }} href="">Terms of Use & Privacy Policy</a>. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignUpScreen;