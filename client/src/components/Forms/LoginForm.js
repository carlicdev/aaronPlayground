import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='max-w-sm bg-gray-900 mx-auto p-5'>  
            <input className='w-full rounded focus:outline-none focus:shadow-outline px-2 py-1 mb-5' 
                type='text'
                placeholder='Username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input className='w-full rounded focus:outline-none focus:shadow-outline px-2 py-1' 
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className='text-xs font-thin text-gray-300 text-right  mb-2'>Olvide mi contraseña</div>  
            <button className='w-full py-2 bg-green-600 text-white rounded shadow mb-5 hover:bg-green-700'>Login</button>
            <button className='mx-auto py-2 bg-yellow-600 text-white rounded shadow px-3 hover:bg-yellow-700'>
                <Link to='/signup'>
                    Crear Cuenta Nueva
                </Link>
            </button>
        </div>
    )
}

export default LoginForm
