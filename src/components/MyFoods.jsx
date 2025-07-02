import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import MyFoodCard from './MyFoodCard';
import Swal from 'sweetalert2';

const MyFoods = () => {
    const { user } = use(AuthContext)
    const [myFood, setMyFood] = useState([])

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (user?.email) {
            fetch(`https://food-sharing-server-amber.vercel.app/food?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyFood(data)
                    setLoading(false)

                });



        }
    }, [user])
    const handleDelete = (_id) => {
        

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            
            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`https://food-sharing-server-amber.vercel.app/foods/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });


                            const remainingFood = myFood.filter(rcp => rcp._id !== _id);
                            setMyFood(remainingFood);
                        }
                    })


            }
        });

    }

    return (
        <div className='min-h-[70vh]'>

            {
                loading ? (<p>Loading...</p>) :
                    myFood.length === 0 ? (<p className='min-h-80'>You have no Food</p>) : (

                        <>
                            <h2 className='text-2xl text-gray-500 font-medium mb-6 text-center'> See My Food </h2>

                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                {
                                    myFood.map((myfoo, index) => <MyFoodCard key={index} myfoo={myfoo} onDelete={handleDelete}></MyFoodCard>)
                                }
                            </div>
                        </>

                    )

            }




        </div>
    );
};

export default MyFoods;