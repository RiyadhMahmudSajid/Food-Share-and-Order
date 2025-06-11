import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import MyFoodCard from './MyFoodCard';

const MyFoods = () => {
    const { user } = use(AuthContext)
    const [myFood, setMyFood] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/food?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyFood(data));
        }
    }, [user])
    return (
        <div>
            {
                myFood.length === 0 ? (<p>You have no Food</p>) : (

                    <h2 className='text-2xl text-gray-500 font-medium mb-6 text-center'> See My Food </h2>
                )

            }
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    myFood.map((myfoo,index) => <MyFoodCard key={index} myfoo = {myfoo} ></MyFoodCard>)
                }
            </div>
        </div>
    );
};

export default MyFoods;