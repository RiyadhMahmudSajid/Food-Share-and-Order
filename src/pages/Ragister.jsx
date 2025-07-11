import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Ragister = () => {
    const [show, setShow] = useState(false)
    const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext)
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const upper = /[A-Z]/.test(password);
        const lower = /[a-z]/.test(password);
        const digit = /^.{6,}$/.test(password);
        
        if (!upper) {

            toast.error("Need At least One Upper Latter")
            return;
        }
        if (!lower) {

            toast.error("Need At least One Lower Latter")
            return;
        }
        if (!digit) {

            toast.error("Need At least six digit")
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                    toast.success('Registration Success')
                    navigate("/")
                }).catch(() => {
                    setUser(user)
                    navigate("/")
                })

            }).catch(() => {
               
                toast.error('Invalid Email or Password or anything')

            })
    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                toast.success('Registration Success')
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(() => {
                  toast.error('Invalid Email or Password or anything')
            })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" required />

                        <label className="label">Photo Url</label>
                        <input type="text" name='photo' className="input" placeholder="Photo Url" required />

                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required />

                        <div className='relative'>
                            <label className="label">Password</label>
                            <input type={show ? 'text' : 'password'} name="password" className="input" placeholder="Password" required/>

                            <button type="button"  onClick={() => { setShow(!show) }} className='btn btn-xs absolute top-6.5 right-6'>
                                {
                                    show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <p className='font-semibold text-center pt-2 '>All ready have any account ? <Link className='text-blue-600' to='/auth/login'>Login</Link></p>
                        <button type='submit' className="btn  bg-orange-500 text-white mt-4">Sign up</button>
                        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Ragister;
