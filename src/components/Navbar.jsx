import React,{useEffect} from 'react'
import Logo_Profil from '../assets/img/profil.jpeg'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/img/logo.png'
import Basket from '../assets/img/shop.png'
import { Avatar, Indicator } from '@mantine/core';
import { useSelector } from 'react-redux'
function Navbar() {
    const ind = useSelector((state) => state.bas.data).length

    const navigate = useNavigate()

    useEffect(() => {
    }, [ind])
    

    return (
        <div className='flex justify-between items-center pt-6'>
            {/* <div className='bg-center bg-cover w-24 h-24' style={{backgroundImage: `url("${Logo}")`}}>

            </div> */}
            <h1
                className='text-4xl text-white cursor-pointer'
                onClick={() => navigate("/")}
            >
                Bancake.
            </h1>
            <input
                type="text"
                placeholder='search'
                className='backdrop-blur-lg focus:backdrop-blur-xl border-2 text-white border-white bg-white/10 py-2 px-4 m-2 outline-none rounded-xl w-80 text-xl'
            />
            <div className='flex items-center gap-x-6'>
                <Indicator color='orange' inline label={ind} size={16}>
                    <div
                        onClick={() => navigate("/Basket")}
                        className="bg-center bg-cover w-12 h-12 cursor-pointer px-4 py-2 rounded-xl hover:bg-amber-700"
                        style={{ backgroundImage: `url("${Basket}")`, }}
                    >

                    </div>
                </Indicator>

                <div
                    className='bg-center bg-cover w-20 h-16 rounded-xl'
                    style={{ backgroundImage: `url("${Logo_Profil}")` }}
                >
                </div>
            </div>
        </div>
    )
}

export default Navbar