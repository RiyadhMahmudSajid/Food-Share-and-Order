import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Update = () => {
    const {user} = use(AuthContext)
    const {foodName, FoodImage,quantity,Location,ExpiredDate,Notes,DonorImage,DonorName,DonorEmail,FoodStatus} = useLoaderData()
     const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const foodData = Object.fromEntries(formData.entries())
        
    }
    return (
        <div>
            <form onSubmit={handleAddFood}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-700 max-w-4xl mx-auto mt-10'>
                    <fieldset className="fieldset  rounded-box  p-4">

                        <label className="label text-white">Title</label>
                        <input type="text" className="input w-full" name="foodName" defaultValue={foodName} placeholder="Food Name" required />

                    </fieldset>
                    <fieldset className="fieldset  rounded-box  p-4">

                        <label className="label text-white">Food Image</label>
                        <input type="text" className="input w-full" name="FoodImage" defaultValue={FoodImage} placeholder="Food Image" required />

                    </fieldset>
                    <fieldset className="fieldset  rounded-box  p-4">

                        <label className="label text-white">Food Quantity</label>
                        <input type="text" className="input w-full" name="quantity" defaultValue={quantity} placeholder="Food Quantity" required />

                    </fieldset>
                    <fieldset className="fieldset rounded-box  p-4">

                        <label className="label text-white">Pickup Location</label>
                        <input type="text" className="input w-full" name="Location" defaultValue={Location} placeholder="Pickup Location" required />

                    </fieldset>
                    <fieldset className="fieldset  rounded-box  p-4">

                        <label className="label text-white">Expired Date/Time </label>
                        <input type="datetime-local" className="input w-full" name="ExpiredDate" defaultValue={ExpiredDate} placeholder="Expired Date" required />

                    </fieldset>
                    <textarea className="textarea w-full p-4" defaultValue={Notes} placeholder="Additional Notes" name="Notes"></textarea>
                    <fieldset className="fieldset  rounded-box p-4">

                        <label className="label text-white">Donor Image </label>
                        <input type="text" className="input w-full" name="DonorImage" value={user && user?.photoURL} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  rounded-box  p-4">

                        <label className="label text-white">Donor Name </label>
                        <input type="text" className="input w-full" name="DonorName" value={user && user?.displayName} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  rounded-box  p-4">

                        <label className="label text-white">Donor Email </label>
                        <input type="text" className="input w-full" name="DonorEmail" value={user && user?.email} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  rounded-box  p-4">

                        <label className="label text-white">Food Status </label>
                        <input type="text" className="input w-full" name="FoodStatus" value="available" required />

                    </fieldset>


                    <button type='submit' className='btn bg-orange-500 w-full col-span-1 md:col-span-2'>Update Food</button>
                </div>
            </form>
        </div>
    );
};

export default Update;