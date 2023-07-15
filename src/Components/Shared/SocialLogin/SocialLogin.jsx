import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import google from "../../../assets/Login/google.png"
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    
    const {googleSignIn}=useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            navigate(from, { replace: true });
        })
        .catch(error=>console.log(error))
    }
   
    return (
        <div>
            <div className='divider'>OR</div>
            <div >
                <button onClick={handleGoogleSignIn} className='btn btn-block bg-purple text-white'>
                  Sign In with<img className='h-8' src={google} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;