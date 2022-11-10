import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../../Context/AuthProvider/AuthProvider'
import {  FaGithub, FaGoogle } from 'react-icons/fa';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Register = () => {

    const {createUser,googleSignIn, gitHubSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname ||'/'


    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email, password)
        .then(res => {
            const user = res.user
            console.log(user)
            navigate(from,{replace:true})
        })
        .catch(err =>console.error(err))
    
    }

    const handleGoogleSignIn = () =>{
      googleSignIn(googleProvider)
      .then(res =>{
        const user = res.user;
        console.log(user)
      })
    }
    
    const handleGithubSignIn = () =>{
      gitHubSignIn(githubProvider)
      .then(res => {
        const user =  res.user;
        console.log(user)
      }).catch(err => console.error (err))
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
         
          <div className="card  w-full max-w-5xl shadow-2xl my-12 ">
            <form onSubmit={handleRegister} className="card-body">
              <h2 className='text-5xl font-bold text-center py-5'> Register !!!!</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder=" Your Name" className="input input-bordered" />
              </div>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder=" Your email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>

            <div>
        <p className='text-center'> Or Sign Up with </p>
        </div>
        <div className='text-center py-5 text-2xl'>
          <button onClick={handleGoogleSignIn} className='mr-5 '> <FaGoogle /></button>
          <button onClick={handleGithubSignIn}> <FaGithub /></button>
        </div>

      <span className='mb-10 px-10'> Are you new this website? Please <Link to='/login'>Sign Up</Link></span>

          </div>
        </div>
      </div>
    );
};

export default Register;