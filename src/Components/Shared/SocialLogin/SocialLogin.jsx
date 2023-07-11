import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import google from "../../../assets/Login/google.png"
const SocialLogin = () => {
    const {googleSignIn,githubSignIn}=useContext(AuthContext)
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>console.log(error))
    }
    const handleGithubSignIn=()=>{
        githubSignIn()
        .then(result=>{
            console.log(result.user)
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