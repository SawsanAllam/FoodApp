

import axios from "axios";
import logo from "../../../assets/imag/logo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Forgetpass() {
  let { register, formState: { errors }, handleSubmit } = useForm();
  let navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      console.log(data);
      
    let response= await axios.post(
      "https://upskilling-egypt.com:3006/api/v1/Users/Reset/Request",
      data);
    console.log(response);
    toast.success("succssful")
        navigate('/rest-pass')
    } catch (error) {
      toast.error(error.response.data.message),
      {
        position: "top-right",
        autoClose: 2000,
        theme: "dark"
      };
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
                <h3>Forgot  Your Password ?</h3>
                <p className="text-muted">
                  No worries! Please enter your email and we will send a
                  password reset link
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
                <button type="submit" className="btn w-100 mt-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
