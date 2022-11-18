import {  GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../Context/AuthProvider";
import { useEffect } from "react";

const Register = () => {


  
  const {googleSignIn, githubSignIn, createUser, updateUserProfile, varifyEmailAddress, error,setError, user} = useContext(AuthContext)

  // use location to redirect

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

  // google and github provider 

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider();

  const [passwordType,setPasswordType] = useState('password')

  // toggle password type 

  const handlePasswordType = () =>{
    if(passwordType === 'password'){
      setPasswordType('text')
      return
    }
    else{
      setPasswordType('password')
    }
  }

  // signin with google provider 

  const handleSignInWithGoogle = ()=>{
    googleSignIn(googleProvider)
    .then(result=> {
      const user = result.user;
      console.log(user)
      setError('')
    })
    .catch(error =>{
      console.error(error)
      setError(error.message)
    })
  }

  // singin with github provider 

  const handleSignInWithGithub = () =>{
    githubSignIn(githubProvider)
    .then(result=> {
      const user = result.user;
      console.log(user)
      setError('')
      
    })
    .catch(error =>{
      console.error(error)
      setError(error.message)
    })
  }

  // collect data from form 

  const handleOnSubmit = (event)=>{
    event.preventDefault()
    const form= event.target;
    const Name = form.Name.value;
    const imageUrl= form.imageUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)


    // password authentication required 

    if (!/(?=.{6,})/.test(password)) {
      setError("password must be at least 6 character");
      return;
    }

    if (!/(?=.*[a-zA-Z])/.test(password)) {
      setError("password should have Upper letter!!");
      return;
    }
    if (!/(?=.*[!#@$%&? "])/.test(password)) {
      setError("password should have special character!!");
      return;
    }



    // register user using email and password 

    createUser(email,password)
    .then(result=> {
      const user = result.user;
      console.log(user)
      handleProfile(Name,imageUrl)
      handleEmailVerify()
      form.reset()
      toast.success('Varification email was send, please check your email')
      setError('')
    })
    .catch(error =>{
      setError(error.message)
    })
  }

  // update user profile 

  const handleProfile = (Name, imageUrl ) =>{
    // const name = firstName + lastName
    const profile = {
      displayName: Name,
      photoURL: imageUrl
    }
    updateUserProfile(profile)
    .then(()=>{
      window.location.reload()
    })
    .catch(error =>{
      setError(error.message)
    })
  }


  // veryfy user email 

  const handleEmailVerify = () =>{
    varifyEmailAddress()
    .then(()=>{})
  }


  useEffect(()=>{
    if(user){
      navigate(from, {replace:true})
    }
  },[from, navigate, user])



  return (
    <div className="  my-10 ">
      <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100 md:w-9/12 mx-auto">
        <form onSubmit={handleOnSubmit}  className="card-body">
          <h2>Register</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <input
              type="text"
              placeholder="Image Url"
              name="imageUrl"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              placeholder="password"
              name="password"
              type={passwordType}
              className="input input-bordered"
              required
            />
            {passwordType === "password" ? (
              <FaEye
              onClick={handlePasswordType}
                className="relative bottom-7 left-72 cursor-pointer"
              ></FaEye>
            ) : (
              <FaEyeSlash
              onClick={handlePasswordType}
                className="relative bottom-7 left-72 cursor-pointer"
              ></FaEyeSlash>
            )}
          </div>
            <>
            <span className="text-error">{error}</span>
            </>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-xl">
            <small>Already have an account ?</small>
            <Link
              to="/login"
              className="label-text-alt link link-hover text-sm"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="divider w-2/12 mx-auto">OR</div>
      <div className="w-4/12 mx-auto">
        <div onClick={handleSignInWithGithub} className="flex justify-evenly w-full items-center border py-2 mb-3 rounded-full hover:cursor-pointer">
          <FaGithub className="text-xl text-black"></FaGithub>
          <p className='hidden md:block'>Continue with Github</p>
        </div>
        <div onClick={handleSignInWithGoogle} className="flex justify-evenly w-full items-center border py-2 rounded-full hover:cursor-pointer">
          <FaGoogle className="text-xl text-red-400"></FaGoogle>
          <p className='hidden md:block'>Continue with Google</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;