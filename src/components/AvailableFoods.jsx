import React, { useEffect, useState } from 'react';

import AvailableFoodCard from './AvailableFoodCard';

const AvailableFoods = () => {
    const [search,setSearch] = useState("")
    const [sort,setSort] = useState("")
    const [foodData,setFoodData] = useState([])
    const [three,setThree] = useState(true)
    useEffect(()=>{
        fetch(`http://localhost:3000/foods?searchParams=${search}&sort=${sort}`)
        .then((res) =>res.json())
        .then((data)=>setFoodData(data))
    },[search, sort])
   
    const availableFoods = foodData.filter(food => food.FoodStatus === "available")

    
    return (
        <div className='max-w-6xl mx-auto p-4'>
            <div className='mb-6'>
                <input type="text"
                 placeholder="Warning" 
                 onChange={(e) => setSearch(e.target.value)}
                 className="input input-warning" />
                 <div className='flex gap-2'>
                    <button className='btn btn-secondary' onClick={()=>setSort('asc')}>Sort ASC</button>
                    <button  className='btn btn-secondary' onClick={()=>setSort('desc')}>Sort DESC</button>
                    <button className='btn btn-accent' onClick={()=>setThree(!three) }>
                        Change Layout
                    </button>
                 </div>
            </div>
           {
             availableFoods.length > 0 ? (
             
                <div className={`grid grid-cols-1 ${three ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4 md:gap-14 `}>
                    {
                        availableFoods.map(availableFood => (
                            <AvailableFoodCard key={availableFood._id} food = {availableFood} ></AvailableFoodCard>
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