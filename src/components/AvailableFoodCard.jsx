import React from 'react';
import { Link, useNavigate } from 'react-router';

const AvailableFoodCard = ({ food,onRequest }) => {
    const {
        FoodImage,
        foodName,
        quantity,
        Location,
        _id
    } = food
    const navigate = useNavigate();

    const handleViewDetails = () =>{
        onRequest(_id)
        navigate(`food/${_id}`)
    }
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img className='w-full h-48 object-cover'
                    src={FoodImage}
                    alt=" " />
            </figure>
            <div className="card-body">
                <h2 className="card-title   text-xs md:text-xl">{foodName}</h2>
                <h2 className="">{quantity}</h2>
                <h2 className="">{Location}</h2>
                
                <div className="card-actions justify-end">
                   <Link to={`/foods/${_id}`}><button onClick={handleViewDetails} className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AvailableFoodCard;