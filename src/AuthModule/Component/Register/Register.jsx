
import logo from "../../../assets/imag/logo.png";
import {  Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Register() {
  let {register, formState:{errors},handleSubmit}= useForm();
 
  let navigate= useNavigate();
  const onSubmit= async (data)=>{
    try{
let response = await axios.post("https://upskilling-egypt.com:3006/api/v1/Users/Register",
  data)
console.log(response);

toast.success("Thank You For Registr")
navigate("/login");
    }
    catch(error){
      toast.error(error.response.message)
    }

  }
  return (
       <div className="auth-container bg-success ">
      <div className="container-fluid bg-overlay ">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-lg-5 col-md-7 bg-white">
            <div className="form-container p-4 rounded-3">
              <div className="logo-container">
                <img src={logo} alt="logo" />
              </div>
              <div className="title">
                <h3>Register Now</h3>
                <p className="text-muted">
                  Welcome Back! Please enter your details
                </p>
              </div>
              <form className='' onSubmit={handleSubmit(onSubmit)}>
               <div className="form-container d-flex justify-content-between align-items-center">
                 <div className="div me-4">
                   <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    {...register("usernam",{
                      required:"username is required",
                      minLength:{
                        value:4,
                        message:"The userName must be at least 4 characters."
                      },
                      pattern:{
                        value: /^[A-Za-z]+[0-9]+$/i,
                        message: "The userName must contain characters and end with numbers without spaces."

                      }
                    })}
                    className="form-control"
                    placeholder="username"
                    aria-label="username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                 <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="text"
                      {...register("country",{
                      required:"country is required"
                    })}
                    className="form-control"
                    placeholder="country"
                    aria-label="country"
                    aria-describedby="basic-addon1"
                  />
                </div>
                 <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                   <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                      {...register("password",{
                      required:"password is required"
                    })}
                    className="form-control"
                    placeholder="password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                  />
                </div>

                </div>
                <div className="div">
                   <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                     {...register("email", {
                      required: "email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "should be valid email",
                      },
                    })}
                    className="form-control"
                    placeholder="Enter-Your-Email"
                    aria-label="Enter-Your-Email"
                    aria-describedby="basic-addon1"
                  />
                </div>
                {errors.email &&(<div>{errors.email.message}</div>)}
                 <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-solid fa-phone-flip"></i>
                  </span>
                  <input
                    type="tel"
                      {...register("phone",{
                      required:"phone is required"
                    })}
                    className="form-control"
                    placeholder="phone number"
                    aria-label="phone number"
                    aria-describedby="basic-addon1"
                  />
                </div>
                 <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <input
                    type="password"
                      {...register("confirm_password",{
                      required:"confirm password is required"
                    })}
                    className="form-control"
                    placeholder="confirm password"
                    aria-label="confirm password"
                    aria-describedby="basic-addon1"
                  />
                </div>
                </div>
               
               </div>
                <Link
                    to="/login"
                    className="text-success text-decoration-none text-end d-block mb-3"
                  >
                    Login Now?
                  </Link>
                <button type="submit" className="btn w-100">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
