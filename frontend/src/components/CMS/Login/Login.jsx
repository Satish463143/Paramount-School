"use client"
import * as Yup from 'yup';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../../../reducer/user.reducer';
import { TextInputComponent } from '../InputForm/InputForm';
import Swal from 'sweetalert2';


const Login = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const router = useNavigate(); 
    const { loggedInUser, userLoading } = useSelector((root) => root.user);
    const token = localStorage.getItem('_at');
  
    useEffect(() => {
      // Redirect if already logged in
      if(loggedInUser && token){
        router('/admin/dashboard')
      }
    },[loggedInUser, token, router])

    const loginDTO = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginDTO),
    });

    if (userLoading && token) {
        return <div className="loading_container"><span className="loading_spinner">Checking session...</span></div>;
    }

    const login = async(data) => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`,{
              method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(data)
            });
            const responseData = await response.json();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Welcome to Admins Panel',
                timer:1000
            })
            localStorage.setItem("_at", responseData.result.token.token);
            localStorage.setItem("_rt", responseData.result.token.refreshToken);
            dispatch(setLoggedInUser(responseData.result.userDetails));
            setTimeout(() => {
              router('/admin/dashboard');
            }, 500); 

        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error logging in',
                timer:1000,
            })
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <div className='login_container'>
            <div className="login_box">
                <div className="login_header">
                    <h1>Admin Login</h1>
                    <p>Enter your credentials to access the dashboard</p>
                </div>
                
                <form onSubmit={handleSubmit(login)} className="login_form">
                    <div className="form_group">
                        <label htmlFor="email">Email Address</label>
                        <TextInputComponent
                            type="email"
                            placeholder="Enter your password"
                            control={control}
                            name="email"
                            required={true}
                            errMsg={errors.email?.message}
                        />
                    </div>

                    <div className="form_group">
                        <label htmlFor="password">Password</label>
                        <TextInputComponent
                            placeholder="Enter your password"
                            type="password"
                            control={control}
                            name="password"
                            required={true}
                            errMsg={errors.password?.message}
                        />
                    </div>

                    <button type='submit' disabled={loading} className="login_button">
                        Sign In
                        {loading && <span className="loading_spinner">Signing in...</span>}
                    </button>
                </form>
            </div>        
        </div>
    )
}

export default Login