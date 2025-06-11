import React from 'react';

const MyFoodCard = ({ myfoo }) => {
    const { FoodImage, foodName , quantity ,Location} = myfoo
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='w-full h-48 object-cover'
                        src={FoodImage}
                        alt=" " />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{
                        foodName}</h2>
                    <h2 className="">{
                        quantity}</h2>
                    <h2 className="">{

                        Location}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    
                </div>
            </div>
        </div>
    );
};

export default MyFoodCard;