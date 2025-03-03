import React, { useState } from 'react'
import { Footer, InputBox, Navbar } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase'
import { toast } from 'react-toastify';
const Signup = () => {
    const initailState = {
        name: "",
        email: "",
        password: "",
        cnfPass: ""
    };
    const [registerData, setRegisterData] = useState(initailState);
    const Navigate = useNavigate();

    const HandleClick = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegisterData({ ...registerData, [name]: value });
    }

    function emailValidate(email) {
        let pattern = /^[a-zA-Z][a-zA-Z\d\.]*\@[a-zA-Z]+\.[a-zA-Z]{3,}/;
        if (!pattern.test(email)) {
            return false;
        }
        else
            return true;
    }

    const validateForm = () => {
        if (!registerData.name.length) {
            alert("Name can't be blank!")
            return false;
        }
        else if (!emailValidate(registerData.email)) {
            alert("Email is not valid!")
            return false;
        }
        else if (!(registerData.password.length >= 6)) {
            alert("Password length should be greater than or equal to 6!")
            return false;
        }
        else if (!registerData.cnfPass.length) {
            alert("Confim password field can't be blank!")
            return false;
        }
        else if (registerData.password !== registerData.cnfPass) {
            alert("Password doesn't match!")
            return false;
        }
        else
            return true;
    }

    const HandleSubmit = async (event) => {
        // get userdata by emailid & match
        event.preventDefault();
        if (validateForm()) {
            try {
                const user = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password);
                toast.success("User registered Successfully!", {
                    position: "top-center",
                })
                setRegisterData(initailState);
                Navigate('/login');
            }
            catch (error) {
                toast.error(error.message, {
                    position: "bottom-center",
                })
            }
        }
    }

    return (
        <>
            <Navbar />
            <div className='w-full px-6 mt-5 flex flex-col items-center justify-center'>
                <div className="form-box w-[450px] shadow-lg rounded-md flex gap-5 flex-col items-center px-4 py-4" id="signup">
                    <form className='w-full px-8 py-8 flex justify-center flex-col items-center max-w-[400px] max-h-[650px] bg-white rounded-md gap-3'
                        onSubmit={HandleSubmit}
                    >
                        <p className="text text-2xl font-medium mb-3 ">Create a new Account</p>
                        <InputBox id={"name"} name={"name"} HandleClick={() => HandleClick(event)} text={"Full Name:"} value={registerData.name} />
                        <InputBox id={"email"} name={"email"} HandleClick={() => HandleClick(event)} type='email' text={"Email Id:"} value={registerData.email} />
                        <InputBox id={"password"} name={"password"} HandleClick={() => HandleClick(event)} type='password' text={"Password:"} value={registerData.password} />
                        <InputBox id={"cnfPass"} name={"cnfPass"} HandleClick={() => HandleClick(event)} type='password' text={"Confirm Password:"} value={registerData.cnfPass} />
                        <button className='bg-black mt-3 text-white px-6 py-4 w-full rounded-md'>Signup</button>
                        <p className="text">Already have an account ? <Link to='/login' className='font-semibold'>Login here</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup
