import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddFood = () => {

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const foodData = Object.fromEntries(formData.entries())
       

        //save job to the database

        axios.post('https://food-sharing-server-amber.vercel.app/foods', foodData)
            .then(function (response) {
                if (response.data.insertedId) {
                 
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your data has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(function (error) {
                
            });
    }

    const { user } = use(AuthContext)
    return (
        <div className='max-w-4xl mx-auto p-4 mt-6'>
            <h2 className='text-3xl font-bold text-center mb-6 text-orange-500'>Add food</h2>
            <form onSubmit={handleAddFood}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-700'>
                    <fieldset className="fieldset border-base-300 rounded-box  border p-4">

                        <label className="label text-white">Title</label>
                        <input type="text" className="input w-full" name="foodName" placeholder="Food Name" required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label text-white">Food Image</label>
                        <input type="text" className="input w-full" name="FoodImage" placeholder="Food Image" required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label text-white">Food Quantity</label>
                        <input type="text" className="input w-full" name="quantity" placeholder="Food Quantity" required />

                    </fieldset>
                    <fieldset className="fieldset border-base-300 rounded-box  border p-4">

                        <label className="label text-white">Pickup Location</label>
                        <input type="text" className="input w-full" name="Location" placeholder="Pickup Location" required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label text-white">Expired Date/Time </label>
                        <input type="datetime-local" className="input w-full" name="ExpiredDate" placeholder="Expired Date" required />

                    </fieldset>
                    <textarea className="textarea w-full" placeholder="Additional Notes" name="Notes"></textarea>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label text-white">Donor Image </label>
                        <input type="text" className="input w-full" name="DonorImage" value={user && user?.photoURL} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label text-white">Donor Name </label>
                        <input type="text" className="input w-full" name="DonorName" value={user && user?.displayName} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label text-white">Donor Email </label>
                        <input type="text" className="input w-full" name="DonorEmail" value={user && user?.email} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label text-white">Food Status </label>
                        <input type="text" className="input w-full" name="FoodStatus" value="available" readOnly required />

                    </fieldset>


                    <button type='submit ' className='btn text-white bg-orange-500 w-full col-span-1 md:col-span-2'>Add Food</button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;