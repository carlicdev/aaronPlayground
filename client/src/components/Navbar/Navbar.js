import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiGamepadLine } from 'react-icons/ri';
import { TiMessages } from 'react-icons/ti';

const Navbar = () => {
    const [activeIcon, setActiveIcon] = useState(null);
    const [isOpen, setIsOpen] = useState(false);


    const handleOpen = (e, id) => {
        e.preventDefault();
        activeIcon ? setActiveIcon(null) : setActiveIcon(id);
        setIsOpen(!isOpen)
    }

    const handleClick = e => {
        e.preventDefault();
        setActiveIcon(null);
        setIsOpen(false);
    }

    return (
        <div className='bg-gray-900'>
            <div className='flex w-full p-3'>
                <div className='ml-1 mr-auto text-gray-100'>
                    <Link to='/'>
                        LOGO
                    </Link>
                </div>
                <div className='mr-1 ml-auto text-gray-100'>
                    <button id='games' className={`focus:outline-none hover:text-gray-500 ${activeIcon === 'games' ? 'text-gray-700' : ''}`} onClick={(e) => handleOpen(e, 'games')}>
                        <RiGamepadLine className='inline mx-2' size={30}  />
                    </button>
                    <button id='messages' className={`focus:outline-none hover:text-gray-500 ${activeIcon === 'messages' ? 'text-gray-700' : ''}`} onClick={(e) => handleOpen(e, 'messages')}>
                        <TiMessages className='inline mx-2' size={30}  />
                    </button>
                    <button id='user' className={`focus:outline-none hover:text-gray-500 ${activeIcon === 'user' ? 'text-gray-700' : ''}`} onClick={(e) => handleOpen(e, 'user')}>
                        <FaRegUserCircle className='inline mx-2' size={30}  />
                    </button>
                </div>
            </div>
            {
                isOpen && (
                    <div className='absolute top-1 right-0 bg-gray-700 max-w-lg p-5 mr-5 text-gray-100 rounded-b shadow'>
                        {
                            activeIcon === 'games' && (
                                <div>
                                    <ul>
                                        <li className='hover:bg-gray-900 mb-1 p-1 rounded' onClick={(e) => handleClick(e)}>
                                            <Link to='/games'>
                                                Games
                                            </Link>
                                        </li>
                                        <li className='hover:bg-gray-900 mb-1 p-1 rounded'>Game Dos</li>
                                        <li className='hover:bg-gray-900 mb-1 p-1 rounded'>Game tres</li>
                                    </ul>
                                </div>
                            )
                        }
                        {
                            activeIcon === 'messages' && (
                                <div>
                                    <ul>
                                        <li className='hover:bg-gray-900 mb-1 p-1 rounded' onClick={(e) => handleClick(e)} >
                                            <Link to='/chat'>
                                                Chat
                                            </Link>
                                        </li>
                                        <li className='hover:bg-gray-900 mb-1 p-1 rounded'>Friends</li>
                                        <li className='hover:bg-gray-900 mb-1 p-1 rounded'>Family</li>
                                    </ul>
                                </div>
                            )
                        }
                        {
                            activeIcon === 'user' && (
                                <div>
                                    <ul>
                                        <li className='hover:bg-gray-900 mb-1 p-1 rounded'>
                                            <button className='focus:outline-none'>
                                                Logout
                                            </button>
                                        </li>
                                        <li className='hover:bg-gray-900 mb-1 p-1 rounded' onClick={(e) => handleClick(e)}>
                                            <Link to='/dashboard'>
                                                Dashboard
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Navbar

