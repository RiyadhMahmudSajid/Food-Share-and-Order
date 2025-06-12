import React from 'react';
import { Link } from 'react-router';



const MyFoodCard = ({ myfoo, onDelete }) => {

  
    const { FoodImage, foodName, quantity, Location, _id } = myfoo

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
                <div className='flex justify-between'>

                    <button onClick={() => onDelete(_id)} className='btn  btn-warning'>Delete</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                   
                     <Link className='btn btn-error' to={`/update/${_id}`}> Update</Link>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default MyFoodCard;