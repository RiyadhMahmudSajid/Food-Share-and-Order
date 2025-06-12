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
        console.log(foodData)
    }
    return (
        <div>
            <form onSubmit={handleAddFood}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-400'>
                    <fieldset className="fieldset border-base-300 rounded-box  border p-4">

                        <label className="label">Title</label>
                        <input type="text" className="input w-full" name="foodName" defaultValue={foodName} placeholder="Food Name" required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Food Image</label>
                        <input type="text" className="input w-full" name="FoodImage" defaultValue={FoodImage} placeholder="Food Image" required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Food Quantity</label>
                        <input type="text" className="input w-full" name="quantity" defaultValue={quantity} placeholder="Food Quantity" required />

                    </fieldset>
                    <fieldset className="fieldset border-base-300 rounded-box  border p-4">

                        <label className="label">Pickup Location</label>
                        <input type="text" className="input w-full" name="Location" defaultValue={Location} placeholder="Pickup Location" required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Expired Date/Time </label>
                        <input type="datetime-local" className="input w-full" name="ExpiredDate" defaultValue={ExpiredDate} placeholder="Expired Date" required />

                    </fieldset>
                    <textarea className="textarea w-full" defaultValue={Notes} placeholder="Additional Notes" name="Notes"></textarea>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Donor Image </label>
                        <input type="text" className="input w-full" name="DonorImage" value={user && user?.photoURL} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Donor Name </label>
                        <input type="text" className="input w-full" name="DonorName" value={user && user?.displayName} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Donor Email </label>
                        <input type="text" className="input w-full" name="DonorEmail" value={user && user?.email} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Food Status </label>
                        <input type="text" className="input w-full" name="FoodStatus" value="available" required />

                    </fieldset>


                    <button className='btn btn-primary w-full col-span-1 md:col-span-2'>Add Food</button>
                </div>
            </form>
        </div>
    );
};

export default Update;