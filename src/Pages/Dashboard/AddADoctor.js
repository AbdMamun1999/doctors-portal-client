import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddADoctor = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))

    const onSubmit = data => {
        console.log(data)
        const img = data.image[0]
        console.log(img ,'image')
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='grid grid-cols-1 gap-y-1'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Your Name'
                        className="input input-bordered w-full max-w-xs"
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
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
                        <span className="label-text">Speciality</span>
                    </label>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        {...register('speciality')}>
                        {
                            services.map((service, index) => <option key={index}>{service.name}</option>)
                        }
                    </select>
                    <label className="label">
                        {errors.speciality?.type === 'required' && <span className="label-text-alt text-red-500">{errors.speciality.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input
                        type='file'
                        className="input input-bordered w-full max-w-xs"
                        {...register('image', {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>
                <input type="submit" value='Submit' className="btn btn-accent w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddADoctor;