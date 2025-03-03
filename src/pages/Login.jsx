import React, { useState } from 'react'
import { Footer, InputBox, Navbar } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase';

const Login = () => {
    const Navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const HandleClick = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginData({ ...loginData, [name]: value });
    }

    const HandleSubmit = async (event) => {
        // get userdata by emailid & match
        event.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
            toast.success("Login Successful!",{
                position: "top-center",
            })
            Navigate('/');
        }
        catch (error) {
            toast.error(error.message, {
                position: "bottom-center",
            })
        }
    }
    return (
        <>
            <Navbar />
            <div className='bg-white shadow-lg w-full px-6 flex flex-col items-center mt-5 justify-center'>
                <div className="form-box w-[450px] shadow-lg rounded-md flex gap-5 flex-col items-center px-4 py-4" id="login">
                    <form className='w-full px-8 py-8 flex justify-center flex-col items-center max-w-[400px] max-h-[650px] bg-white rounded-md gap-3'
                        onSubmit={HandleSubmit}
                    >
                        <p className="text text-2xl font-medium mb-3 ">Login to your Account</p>
                        <InputBox id={"email"} name={"email"} HandleClick={() => HandleClick(event)} type='email' text={"Email Id:"} />
                        <InputBox id={"password"} name={"password"} HandleClick={() => HandleClick(event)} type='password' text={"Password:"} />
                        <button className='bg-black mt-3 text-white px-6 py-4 w-full rounded-md'>Login</button>
                        <p className="text">Don't have an account ? <Link to='/signup' className='font-semibold'>Create one</Link></p>
                        <p className="text">Don't know your password ? <Link to='/forget-password' className='font-semibold'>Forget Password</Link></p>

                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
