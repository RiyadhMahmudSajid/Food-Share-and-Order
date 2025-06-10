import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { login } = use(AuthContext)
    const [show, setShow] = useState(false)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((result)=>{
            const user = result.user
            alert(user)

        }).catch(()=>{
            alert('error')
        })
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="Email"

                            required />

                        <div className='relative'>
                            <label className="label">Password</label>
                            <input type={show ? 'text' : 'password'} name="password" className="input" placeholder="Password" />
                            <button onClick={() => { setShow(!show) }} className='btn btn-xs absolute top-6.5 right-6'>
                                {
                                    show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;