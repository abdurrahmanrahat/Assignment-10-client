import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipe = ({ recipe }) => {
    const [messagge, setMessage] = useState(null);
    console.log(recipe);
    const { recipe_name, ingredients, cooking_method, rating } = recipe;

    // handle favourite button
    const handleFavourite = () => {
        setMessage('Favourite hoo geya bro!!');
    }

    return (
        <div className='col-md-4'>
            <Card>
                <Card.Body>
                    <Card.Title className='fs-3'>{recipe_name}</Card.Title>
                    <div>
                        Ingredients of this recipe:
                        {
                            ingredients.map(ingredient => <li>{ingredient}</li>)
                        }
                    </div>
                    <Card.Text className='mt-2 mb-0'>
                        Cooking Method: {cooking_method}
                    </Card.Text>
                    <div className='flex-grow-1 d-flex align-items-center mb-4'>
                        <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                        <span className='ms-2'> {rating}</span>
                    </div>

                    {
                        messagge ? <span className='text-success fs-3'>{messagge}</span> : <Button onClick={handleFavourite} className='btn-warning text-light'>Favourite</Button>
                    }
                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipe;