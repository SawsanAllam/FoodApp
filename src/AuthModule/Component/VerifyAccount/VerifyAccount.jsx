
import logo from "../../../assets/imag/logo.png";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function VerifyAccount() {
  let {register,formState:{errors}, handleSubmit}=useForm();
  let navigate = useNavigate()
   const onSubmit=async (data)=>{
   console.log(data);
   
    try{
     let response =await axios.post("https://upskilling-egypt.com:3006/api/v1/Users/verify", data);
      toast.success("successful");
      navigate('/login')
      console.log(response);
    }
    catch(error){
     toast.error(error.response?.data?.message||"something went wrong",
      {
        position: "top-right",
        autoClose: 2000,
        theme: "dark"
      });

    }
    
   }
  return (
    <div>
         <div className="auth-container bg-success ">
             <div className="container-fluid bg-overlay ">
               <div className="row vh-100 justify-content-center align-items-center">
                 <div className="col-lg-5 col-md-7 bg-white">
                   <div className="form-container p-4 rounded-3">
                     <div className="logo-container">
                       <img src={logo} alt="logo" />
                     </div>
                     <div className="title">
                       <h3> Verify Account </h3>
                       <p className="text-muted">
                       Please Enter Your Otp  or Check Your Inbox
                       </p>
                     </div>
                     <form onSubmit={handleSubmit(onSubmit)}>
                       <div className="input-group mb-3">
                         <span className="input-group-text" id="basic-addon1">
                           <i className="fa-regular fa-envelope"></i>
                         </span>
                         <input
                           type="email"
                           {...register('email',{required:'email is required',
                              pattern: {
                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                               message: "should be valid email",
                             },
                           },
                             
                           )}
                           className="form-control"
                           placeholder="Enter-Your-Email"
                           aria-label="Enter-Your-Email"
                           aria-describedby="basic-addon1"
                         />
                       
                       </div>
                         {errors.email && <div className="alert alert-danger">{errors.email.message}</div>}
                             <div className="input-group mb-3">
                     <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-lock"></i>
                     </span>
                     <input
                       type="text"
                       {...register('seed' , {
                      required: "OTP is required"})}
                       className="form-control"
                       placeholder="OTP"
                       aria-label="OTP"
                       aria-describedby="basic-addon1"
                     />
                   </div>
                   {errors.seed && <div className='alert alert-danger'>{errors.seed.message}</div>}
                       <button type="submit" className="btn w-100 mt-4">Send</button>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>
    </div>
  )
}
