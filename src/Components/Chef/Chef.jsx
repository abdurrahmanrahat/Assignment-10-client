import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Chef = ({ chef }) => {
    const { chef_id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;
    // console.log(chef);
    return (
        <div className='col-md-4 py-4'>
            <Card>
                <div className='text-center'>
                    <LazyLoadImage variant="top" effect="blur" style={{ width: '354px', height: '240px' }} className='' src={chef_picture} />
                </div>
                <Card.Body>
                    <Card.Title className='fs-3 fw-semibold'>{chef_name}</Card.Title>
                    <Card.Text>
                        <p className='m-0'>Experience: {years_of_experience} Years</p>
                        <p className='m-0'>Recipes: {number_of_recipes}</p>
                        <p className='m-0'>Likes: {likes}</p>
                    </Card.Text>
                    <Link to={`/chef/${chef_id}`}>
                        <Button className='btn-warning text-light'>View Recipes</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;