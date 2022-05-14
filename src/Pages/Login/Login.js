import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.inti';
import Loading from '../Shared/Loading';
import { useForm } from "react-hook-form";
import Footer  from '../Shared/Footer';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorMassage;

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (user || gUser) {
        navigate('/')
    }
    if (error || gError) {
        errorMassage = <p className='text-red-600'>{error?.message || gError?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">LOGIN</h2>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='grid grid-cols-1 gap-y-4'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Provide a valid email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'Password must be 8 character or longer'
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {errorMassage}
                            <input type="submit" value='LOGIN' className="btn btn-accent w-full max-w-xs" />
                        </form>
                        <p>
                            <small>
                                New to Doctors Portal?
                                <span className='text-primary'>
                                    <Link to='/signup'> Create a new account</Link>
                                </span>
                            </small>
                        </p>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline uppercase"
                        >Continue with google</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;