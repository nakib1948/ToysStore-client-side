import { ToastContainer, toast } from 'react-toastify';
import Lottie from "lottie-react";
import img1 from "../../../assets/Login/login.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bg1 from "../../../assets/Login/bg1.jpg";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useContext } from 'react';

const Login = () => {
  const { signIn,user} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const handlelogin = (event) => {
    event.preventDefault();

   if(user){
     return  toast.warn('you are already logged in.Signout to log in anothe account', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const loggedUser = {
          email: user.email,
        };
        console.log(user);
        navigate(from, { replace: true });
        
      })
      .catch((error) => {
        toast.warn('Please enter correct email and password', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      });

     
  };
  return (
    <div ref={ref}>
    <motion.div
         initial="hidden"
         animate={inView ? "visible" : "hidden"} // Use inView to control the animation
         variants={variants}
         transition={{ duration: 1.5 }}
    >
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
      }}
    >
       <ToastContainer />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={img1} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">SignIn</h1>
            <form onSubmit={handlelogin}>
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
            </div>
        
            <div className="form-control mt-6">
              <input
                className="btn bg-purple text-white"
                type="submit"
                value="Login"
              />
            </div>

            </form>
           
            <SocialLogin/>
            <p className="my-4">
              Don't have an account?
              <Link to="/signup" className="text-orange-500 font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
    </div>
  );
};

export default Login;
