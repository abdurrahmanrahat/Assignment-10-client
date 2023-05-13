import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import IconImage from '../../assets/flower-decor-hr.png';
import BannerImgDark from '../../assets/banner-img-dark.jpg';
import KungPao from '../../assets/Kung-Pao-Chicken-min.jpg';
import HotHourSoap from '../../assets/Hot-and-Sour Soup-min.jpg';
import PekingDuck from '../../assets/Peking-Duck-min.jpg';
import EggDropS from '../../assets/Egg-Drop-Soup-min.jpg';
import CharSiu from '../../assets/Char-Siu-Pork-min.jpg';
import MaPoTofu from '../../assets/Ma-Po-Tofu-min.jpg';
import TodayChar from '../../assets/Char-today.jpg';
import TodayMapo from '../../assets/Mapo-today.jpg';
import Chef from '../../Components/Chef/Chef';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-abdurrahmanrahat.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
    }, [])


    return (
        <div>
            {/* Header Banner Section */}
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

            {/* Today's special Section */}
            <Container>
                <div className='row my-4 py-4'>
                    <div className='col-md-6 my-4'>
                        <h3 className='mb-0 text-center text-md-start'>
                            <span className='fst-italic display-1 text-warning'>Today's</span>
                            <br />
                            <span className='ms-4 ps-4 fs-4 fw-bold'>SPECIALS</span>
                        </h3>
                        <div className='mt-4 pt-4'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h6 className='display-6'>Pockmarked Lady's Tofu</h6>
                                    <p>Garlic / Minced / Ginger /Chili bean</p>
                                </div>
                                <p className='text-warning display-6 mt-3 me-4'>$24</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h6 className='display-6'>Fork Roast Char Pork</h6>
                                    <p>Honey / Soy / Hoisin / Sauce /Brown Sugar</p>
                                </div>
                                <p className='text-warning display-6 mt-3 me-4'>$24</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 my-4'>
                        <div className='d-none d-md-block'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <img src={TodayChar} className='w-100 rounded' alt="" />
                                </div>
                                <div className='col-md-6'>
                                    <img src={TodayMapo} className='w-100 rounded' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='d-block d-md-none'>
                            <img src={TodayChar} className='w-50 rounded' alt="" />
                            <img src={TodayMapo} className='w-50 rounded' alt="" />
                        </div>
                    </div>
                </div>
            </Container>


            {/* Chef Section */}
            <Container className='pb-4'>
                <h2 className='text-uppercase text-center mt-4 fw-bold'>Chefs Section</h2>
                <div className='d-flex justify-content-center'>
                    <hr className='text-dark w-25 text-end' />
                    <img className='' src={IconImage} alt="" />
                    <hr className='w-25 text-start' />
                </div>
                <div className='row'>
                    {
                        chefs.map(chef => <Chef key={chef.chef_id} chef={chef}></Chef>)
                    }
                </div>
            </Container>



            {/* Delicious Menu Section */}
            <Container className='my-4 py-4'>
                <h2 className='text-uppercase text-center mt-4 fw-bold'>Delicious Menu</h2>
                <div className='d-flex justify-content-center'>
                    <hr className='text-dark w-25 text-end' />
                    <img className='' src={IconImage} alt="" />
                    <hr className='w-25 text-start' />
                </div>

                <div className="container text-center my-4">
                    <div className="row my-4 pt-4 d-flex justify-content-around">
                        <div className="col-md-3 shadow-lg p-3">
                            <img src={KungPao} className='w-100 rounded' alt="" />
                            <h5 className='mt-4'>Kung Pao Chicken</h5>
                            <p>Stir-fried chicken with peanuts, vegetables, and spicy Sichuan sauce.</p>
                        </div>
                        <div className="col-md-3 shadow-lg p-3">
                            <img src={HotHourSoap} className='w-100 rounded' alt="" />
                            <h5 className='mt-4'>Hot and Sour Soup</h5>
                            <p>A spicy and sour soup made with mushrooms, tofu, and vinegar.</p>
                        </div>
                        <div className="col-md-3 shadow-lg p-3">
                            <img src={PekingDuck} className='w-100 rounded' alt="" />
                            <h5 className='mt-4'>Peking Duck</h5>
                            <p>Roasted duck with crispy skin and served with thin pancakes, green onions.</p>
                        </div>
                    </div>
                    <div className="row my-4 pb-4 d-flex justify-content-around">
                        <div className="col-md-3 shadow-lg p-3">
                            <img src={EggDropS} className='w-100 rounded' alt="" />
                            <h5 className='mt-4'>Egg Drop Soup</h5>
                            <p>A simple soup made with chicken broth and beaten, often flavored ginger and green onions.</p>
                        </div>
                        <div className="col-md-3 shadow-lg p-3">
                            <img src={CharSiu} className='w-100 rounded' alt="" />
                            <h5 className='mt-4'>Char Siu Pork</h5>
                            <p>A popular Cantonese dish of roasted pork that has been marinated in a sweet and savory sauce.</p>
                        </div>
                        <div className="col-md-3 shadow-lg p-3 ">
                            <img src={MaPoTofu} className='w-100 rounded' alt="" />
                            <h5 className='mt-4'>Ma Po Tofu</h5>
                            <p>A spicy Sichuan dish of silken tofu and ground pork in a numbing chili-bean sauce.</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Home;