import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Featured = ({ topRecipe }) => {
    const { FoodImage, foodName, quantity, Location, _id } = topRecipe
    return (
        <div>

            <div className="card bg-white shadow-xl border-t-4 border-orange-500 hover:shadow-2xl transition-shadow duration-300">
                <figure>
                    <img
                        src={FoodImage}
                        alt="Shoes"
                        className='w-full h-48 object-cover' />
                </figure>
                <div className="card-body">

                    <h2 className="card-title">{foodName}</h2>
                    <p className='text-sm text-gray-600 font-semibold'>{quantity}</p>

                    <p className='text-sm  font-medium'>{Location}</p>
                    <div className='flex '>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                   
                    </div>
                    
                    <div className="card-actions justify-end">
                        <Link className='btn bg-orange-500 text-white ' to='/AvailableFoods'>Show All </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;