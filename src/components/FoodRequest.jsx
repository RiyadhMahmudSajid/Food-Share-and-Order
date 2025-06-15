import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import FooodReqTable from './FooodReqTable';

const FoodRequest = () => {
    const { user } = use(AuthContext)
    const [myFood, setMyFood] = useState([])

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (user?.email) {
            fetch(`https://food-sharing-server-amber.vercel.app/food-req?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyFood(data)
                    setLoading(false)

                });



        }
    }, [user])
    return (
        <div>
            {
                loading ? (<p>Loading....</p>) : (
                    myFood.length === 0 ? (<p className='min-h-80'>You have no Food</p>) : (
                        <div className='max-w-7xl mx-auto min-h-80'>
                            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                                <table className="table  bg-amber-200">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Donar Name </th>
                                            <th>Pickup Location</th>
                                            <th>Expire Date</th>
                                            <th>Request Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        
                                            {
                                                myFood.map((myFoo, index) => <tr key={index}>

                                                    <th>{myFoo.donorName}</th>
                                                    <td>{myFoo.pickupLocation}</td>
                                                    <td>{myFoo.expiredDate}</td>
                                                    <td>{myFoo.requestDate}</td>
                                                </tr>)
                                            }

                                        

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                )
            }
        </div >
    );
};

export default FoodRequest;