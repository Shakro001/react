

import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import useAuthStore from '../../store/authSlice';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod'



function Login() {

    const auth = useAuthStore((state) => state.auth)
    const setAuth = useAuthStore((state) => state.setAuth)

    const navigate = useNavigate() 


    const schema = z.object({
        login: z.string().min(6),
        password: z.string().min(6)
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)

        localStorage.setItem('auth-user', JSON.stringify(data))
        setAuth(true)
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} action="#" className="login-form">

            <label>
                name:
                <input {...register('login')} type="text" className="login-input-box" />
                {errors.login && errors.login.message}
            </label>
            <label>
                password:

                <input {...register('password')} type="password" className="password-input-box" />

            </label>


            <button>Register</button>
        </form>
    )
}

export default Login
