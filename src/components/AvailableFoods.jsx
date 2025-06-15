import React, {useState } from 'react';

import AvailableFoodCard from './AvailableFoodCard';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';


const fetchFoods = async ({ queryKey }) => {
    const [_key, search, sort] = queryKey;
    const res = await fetch(`http://localhost:3000/foods?searchParams=${search}&sort=${sort}`)
    return res.json()
}




const AvailableFoods = () => {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    
    const [three, setThree] = useState(true)
    const queryClient = useQueryClient();
   
   //useQuery featching food data  
    const {data : foodData = [] , isLoading} = useQuery({
        queryKey  : ['foods',search , sort],
        queryFn: fetchFoods
    })
  

    const availableFoods = foodData.filter(food => food.FoodStatus === "available")
    
    const {mutate: requestFood} = useMutation({
        mutationFn: async (id) =>{
            const res = await fetch(`http://localhost:3000/foods/${id}`, {
            method: 'PATCH',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({FoodStatus:'requested'})
        })
        return res.json();
        },
        onSuccess:(data) =>{
            if (data.modifiedCount > 0){
                toast.success('Food request')
                queryClient.invalidateQueries({queryKey:['foods']})

            }else{
                toast.info('No change')
            }
        },
        onError: () => toast.error('Request fail')
    })

    return (
        <div className='max-w-6xl mx-auto p-4'>
            <div className='mb-6'>
                <input type="text"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-warning" />
                <div className='flex gap-2'>
                    <button className='btn btn-secondary' onClick={() => setSort('asc')}>Sort ASC</button>
                    <button className='btn btn-secondary' onClick={() => setSort('desc')}>Sort DESC</button>
                    <button className='btn btn-accent' onClick={() => setThree(!three)}>
                        Change Layout
                    </button>
                </div>
            </div>
            {
                isLoading ? (<p>Loading...</p>) :
                availableFoods.length > 0 ? (

                    <div className={`grid ${three ? 'grid-cols-3' : 'grid-cols-2'} gap-4 md:gap-14 `}>
                        {
                            availableFoods.map(availableFood => (
                                <AvailableFoodCard key={availableFood._id} food={availableFood} ></AvailableFoodCard>
                            ))
                        }
                    </div>
                ) : (
                    <p className='text-center text-gray-500'>No available food found</p>
                )
            }
        </div>
    );
};

export default AvailableFoods;