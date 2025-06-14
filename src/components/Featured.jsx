import React from 'react';
import { Link } from 'react-router';

const Featured = ({ topRecipe }) => {
    const { FoodImage, foodName, quantity, Location, _id } = topRecipe
    return (
        <div className="card bg-white shadow-xl border-t-4 border-primary hover:shadow-2xl transition-shadow duration-300">
            <figure>
                <img
                    src={FoodImage}
                    alt="Shoes"
                    className='w-full h-48 object-cover' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <p className='text-sm text-gray-600 '>{quantity}</p>
                <p className='text-sm text-gray-600 '>{Location}</p>
                <div className="card-actions justify-end">
                    <Link className='btn ' to='/AvailableFoods'>Show All button </Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;