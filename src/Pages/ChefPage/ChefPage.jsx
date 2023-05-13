import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import IconImage from '../../assets/flower-decor-hr.png'
import Recipe from './Recipe';

const ChefPage = () => {
    const chef = useLoaderData();
    const { chef_id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes, chef_description, recipes } = chef;
    return (
        <Container className='my-4'>
            <h2 className='text-center fs-1'>Specific Chef Details Page</h2>
            <div className='d-flex justify-content-center'>
                <hr className='text-dark w-25 text-end' />
                <img className='' src={IconImage} alt="" />
                <hr className='w-25 text-start' />
            </div>

            <section className='row my-4 py-4'>
                <div className='col-md-6'>
                    <img className='w-100' src={chef_picture} alt="" />
                </div>
                <div className='col-md-6 d-flex align-items-center mt-4 mt-md-0'>
                    <Container>
                        <h3>Name Of Chef: {chef_name}</h3>
                        <p className='m-0'>Experience on This Field: {years_of_experience} Years</p>
                        <p className='m-0'>Total Recipes: {number_of_recipes}</p>
                        <p>Likes: {likes}</p>

                        <p><span className='fw-semibold'>Short Description:</span> {chef_description}</p>
                    </Container>
                </div>
            </section>

            {/* Recipe Card */}
            <section className='row'>
            <h2 className='text-center fs-2 my-4'>Some Recipes</h2>
                {
                    recipes.map(recipe => <Recipe
                        key={recipe.rating}
                        recipe={recipe}
                    ></Recipe>)
                }
            </section>

        </Container>
    );
};

export default ChefPage;