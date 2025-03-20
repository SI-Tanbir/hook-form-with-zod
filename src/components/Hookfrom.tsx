'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

function HookForm() {
    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            creditCardNumber: data.get('creditCardNumber'),
        };
        console.log('Form Data:', formData);
    };
    const { register, handleSubmit, formState: { errors } } = useForm()

    const formData = (data) => {
        console.log(data)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white/50 text-black p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-semibold mb-6 text-center">Form with Validation</h1>
                <form onSubmit={handleSubmit(formData)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            {...register('name')}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            {...register('email')}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            {...register('password')}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="creditCardNumber" className="block text-sm font-medium text-gray-700">Credit Card Number:</label>
                        <input
                            {...register('creditCardNumber')}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-200">
                            Submit
                        </button>
                    </div>
                </form>

                <p className="text-center mt-4">
                    Check the console for the form data.
                </p>
            </div>
        </div>
    );
}

export default HookForm;
