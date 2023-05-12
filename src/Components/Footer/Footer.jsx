import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaGooglePlusG, FaLocationArrow, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-dark py-2'>
            <Container className='text-white text-center text-lg-start p-4'>
                <div className='row mt-4'>
                    {/* About company */}
                    <div className='col-lg-4 col-md-12 mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-4'>About company</h5>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                        <p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
                        <div className='mt-4'>
                            <a className='btn btn-floating btn-light btn-md rounded-circle me-2' href="#"><FaFacebook /></a>
                            <a className='btn btn-floating btn-light btn-md rounded-circle me-2' href="#"><FaInstagramSquare /></a>
                            <a className='btn btn-floating btn-light btn-md rounded-circle me-2' href="#"><FaTwitter /></a>
                            <a className='btn btn-floating btn-light btn-md rounded-circle me-2' href="#"><FaGooglePlusG /></a>
                        </div>
                    </div>

                    {/* search something */}
                    <div className='col-lg-4 col-md-12 mb-4 py-4 py-md-0 mb-md-0'>
                        <h5 className='text-uppercase mb-4 pb-1'>Search something</h5>
                        <div className="form-outline form-white mb-4">
                            <input type="text" id="formControlLg" className="form-control form-control-lg" placeholder='Search' />
                        </div>
                        <div>
                            <p><span className='me-2'><FaLocationArrow /></span> Warsaw, 00-967, Poland</p>
                            <p><span className='me-2'><FaEnvelope /></span> contact@example.com</p>
                            <p><span className='me-2'><FaPhoneAlt /></span> + 48 234 567 88</p>
                        </div>
                    </div>

                    {/* opening hour */}
                    <div className='col-lg-4 col-md-12 mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-4'>Opening hours</h5>

                        <table className="table text-center text-white">
                            <tbody className="fw-normal">
                                <tr>
                                    <td>Mon - Thu:</td>
                                    <td>8am - 9pm</td>
                                </tr>
                                <tr>
                                    <td>Fri - Sat:</td>
                                    <td>8am - 1am</td>
                                </tr>
                                <tr>
                                    <td>saturday:</td>
                                    <td>7am - 6pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday:</td>
                                    <td>9am - 10pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className='mb-0' />
            </Container>
            {/* Copyright */}
            <div className="text-center pb-2 text-light">
                <p className='text-center m-0'><small>© copyright of my news.</small></p>
            </div>
        </div>
    );
};

export default Footer;