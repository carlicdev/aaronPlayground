import React, { useState } from 'react';

const SignupForm = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='max-w-sm bg-gray-900 mx-auto p-5'> 
            <input className='w-full rounded focus:outline-none focus:shadow-outline px-2 py-1 mb-5' 
                type='text'
                placeholder='Nombre'
                name='firstname'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            />
            <input className='w-full rounded focus:outline-none focus:shadow-outline px-2 py-1 mb-5' 
                type='text'
                placeholder='Apellido'
                name='lastname'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
            />
            <input className='w-full rounded focus:outline-none focus:shadow-outline px-2 py-1 mb-5' 
                type='text'
                placeholder='Username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input className='w-full rounded focus:outline-none focus:shadow-outline px-2 py-1 mb-5' 
                type='text'
                placeholder='Email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input className='w-full rounded focus:outline-none focus:shadow-outline px-2 py-1 mb-5' 
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className='w-full py-2 bg-yellow-600 text-white rounded shadow px-3 hover:bg-yellow-700'>Crear Cuenta</button>
        </div>
    )
}

export default SignupForm
