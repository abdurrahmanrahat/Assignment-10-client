import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import BannerImg from '../../assets/food-banner.jpg';
import BannerImgDark from '../../assets/banner-img-dark.jpg';

const Home = () => {
    return (
        <div>
            {/* <div className=''>
                <div className='position-relative overflow-hidden bg-dark'>
                    <img className='w-100' src={BannerImg} alt="" />
                    <div className='position-absolute top-0'>
                        <h2>hello</h2>
                    </div>
                </div>
            </div> */}

            <Card className="bg-dark text-white rounded-0">
                <Card.Img src={BannerImgDark} alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center'>
                    <Container>
                        <Card.Title className='fst-italic fw-normal'>Eat What You Love</Card.Title>
                        <Card.Text className='fs-1 d-none d-md-block'>
                            Feels Like Home, Tastes Like a Paradise <br /> as well as Enjoy Your Tastes.
                        </Card.Text>
                        <Card.Text className='fs-6 d-sm-block d-md-none'>
                            Feels Like Home, Tastes Like a Paradise <br /> as well as Enjoy Your Tastes.
                        </Card.Text>
                        <div>
                            <Button style={{ backgroundColor: '#C19E66' }} className='border border-0 text-light btn-lg mt-2' variant="primary">Going For Eat</Button>
                        </div>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Home;