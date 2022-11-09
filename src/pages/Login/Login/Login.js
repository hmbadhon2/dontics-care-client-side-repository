import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {

    const{login, googleSignIn, gitHubSignIn} = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname ||'/'

const handleLogin = e =>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value;
    const password = form.password.value
    console.log(email, password)
    login(email,password)
    .then(res =>{
        const user = res.user;
        console.log(user)
        navigate(from,{replace:true})
    })
    .catch(err => console.error(err))


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
        <div className="hero max-w-5xl mx-auto ">
  <div className="hero-content flex-col lg:flex-row-reverse py-10">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleLogin} className="card-body">
        
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
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

      </form>
      <div>
        <p className='text-center'> Or Sign Up with </p>
        </div>
        <div className='text-center py-5 text-2xl'>
          <button onClick={handleGoogleSignIn} className='mr-5 '> <FaGoogle /></button>
          <button onClick={handleGithubSignIn}> <FaGithub /></button>
        </div>

      <span className='mb-10 px-10'> Are you new this website? Please <Link to='/register'>Sign Up</Link></span>

    </div>
  </div>
</div>
);
};

export default Login;