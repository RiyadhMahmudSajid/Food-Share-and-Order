import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AddFood = () => {
    const { user } = use(AuthContext)
    return (
        <div className='max-w-4xl mx-auto p-4 mt-6'>
            <h2 className='text-3xl font-bold text-center mb-6'>Add food</h2>
            <form action="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-400'>
                    <fieldset className="fieldset border-base-300 rounded-box  border p-4">

                        <label className="label">Title</label>
                        <input type="text" className="input w-full" name="foodName" placeholder="Food Name" required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Food Image</label>
                        <input type="text" className="input w-full" name="FoodImage" placeholder="Food Image" required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Food Quantity</label>
                        <input type="text" className="input w-full" name="quantity" placeholder="Food Quantity" required />

                    </fieldset>
                    <fieldset className="fieldset border-base-300 rounded-box  border p-4">

                        <label className="label">Pickup Location</label>
                        <input type="text" className="input w-full" name="Location" placeholder="Pickup Location" required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Expired Date/Time </label>
                        <input type="datetime-local" className="input w-full" name="ExpiredDate" placeholder="Expired Date" required />

                    </fieldset>
                    <textarea className="textarea w-full" placeholder="Additional Notes" name="Notes"></textarea>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Donor Image </label>
                        <input type="text" className="input w-full" value={user && user?.photoURL} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Donor Name </label>
                        <input type="text" className="input w-full" value={user && user?.displayName} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Donor Email </label>
                        <input type="text" className="input w-full" value={user && user?.email} readOnly required />

                    </fieldset>
                    <fieldset className="fieldset  border-base-300 rounded-box  border p-4">

                        <label className="label">Donor Email </label>
                        <input type="text" className="input w-full" value="available" readOnly required />

                    </fieldset>
                    
                </div>
            </form>
        </div>
    );
};

export default AddFood;