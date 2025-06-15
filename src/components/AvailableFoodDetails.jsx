import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const AvailableFoodDetails = () => {
    const { FoodImage, foodName, quantity, Location, _id, ExpiredDate, Notes, DonorImage, DonorName, DonorEmail, FoodStatus } = useLoaderData();
    const [note, setNote] = useState("");
    const { user } = use(AuthContext)
 
     const handleRequest = () => {
            const requestDate = new Date().toISOString();
            const requestData = {
                foodId:_id,
                foodName:foodName,
                foodImage:FoodImage,
                 donorName:DonorName,
                  donorEmail:DonorEmail,
                 userEmail: user?.email,
                 requestDate,
                 pickupLocation:Location,
                  expiredDate:ExpiredDate,
                  notes:note,
                  status:"requested"                 


            }
            fetch('http://localhost:3000/food-req',{
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(requestData)
            }).then(res => res.json())
            .then(data =>{
                if(data.success){
                    Swal.fire('Success','Request placed','success')
                    document.getElementById('requestModal').closest()
                }
            })
     }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm mt-6 mx-auto">
                <figure>
                    <img
                        src={FoodImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{foodName}😋</h2>
                    <p><span className='font-semibold'>Quantity:</span> {quantity}</p>
                    <p><span className='font-semibold'>Pickup Location:</span> {Location}</p>
                    <p>{ExpiredDate}</p>
                    <p>{FoodStatus}</p>
                    <p>{Notes}</p>

                    <button className="btn bg-orange-400" onClick={() => document.getElementById('my_modal_1').showModal()}>Request Food</button>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <p>{foodName}</p>
                    <p>{FoodImage}</p>
                    <p>{_id}</p>
                    <p>{DonorEmail}</p>
                    <p>{DonorName}</p>
                    <p>{user?.email}</p>
                    <p>{new Date().toLocaleString()}</p>
                    <p>{Location}</p>
                    <p>{ExpiredDate}</p>

                    <textarea className=' textarea textarea-bordered w-full' value={note} onChange={e => setNote(e.target.value)} required>

                    </textarea>

                    <button  onClick={handleRequest} className="btn">Submit</button>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            
                            <button  className="btn">close</button>
                        </form>

                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AvailableFoodDetails;