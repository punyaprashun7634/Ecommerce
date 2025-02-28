
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Footer, InputBox, Navbar } from "../components";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";
function ForgetPassword() {
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState(false)
  const Navigate = useNavigate();

  const HandleClick = (event) => {
    setEmail(event.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendPasswordResetEmail(auth, email);
      console.log(response);
      setEmailMessage(true);
      toast.success("The Reset email has been sent to your inbox!", {
        position: "top-center"
      })
      Navigate('/login');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        toast.error("User not found, try again!", {
          position: "top-center"
        })
        setEmail('')
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className='bg-white shadow-lg w-full px-6 flex flex-col items-center justify-center'>
        <div className="form-box w-[450px] shadow-lg rounded-md flex gap-5 flex-col items-center mt-10 px-4 py-4">
          {
            emailMessage ? null :
              <form className='w-full px-8 py-8 flex justify-center flex-col items-center max-w-[400px] max-h-[650px] bg-white rounded-md gap-3'
                onSubmit={handleSubmit}
              >
                <p className="text text-2xl font-medium mb-3 ">Reset Your Password</p>
                <InputBox id={"email"} name={"email"} HandleClick={() => HandleClick(event)} type='email' text={"Email Id:"} value={email} />

                <button className='bg-black mt-3 text-white px-6 py-4 w-full rounded-md'>Reset Password</button>
                <p className="text">Let's get back to <Link to='/login' className='font-semibold'>Login</Link></p>
              </form>
          }
        </div>
      </div >
      <Footer />
    </>
  )
}

export default ForgetPassword
