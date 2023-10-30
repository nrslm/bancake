import React from 'react'
import StarOn from "../../src/assets/img/starOn.png"
import StarOf from "../../src/assets/img/star.png"
import { Tabs, rem } from '@mantine/core';
import Shop from "../assets/img/shop.png"
import Show from "../assets/img/show.png"
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {check} from '../features/check/CheckSlice'

function MainBaner({ items, i }) {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const CheckTo = (item) =>{
        dispatch(check(item))
        navigate("/"+(i+1))
    }

    return (
        <Tabs.Panel className='duration-500' value={items.banerName}>
            <div className='flex justify-center mt-16'>
                <div className='box_gradient w-10/12 rounded-3xl flex'>
                    <div
                        className=' w-5/12 bg-cover bg-center rounded-3xl'
                        style={{ backgroundImage: `url("${items.img}")` }}
                    >
                    </div>
                    <div className='w-8/12 ml-10 p-6'>
                        <h1 className='text-5xl text-white '>Блинчик</h1>
                        <h1 className='text-neutral-400 text-4xl mt-6'>{items.banerName}</h1>
                        <h1 className='text-4xl text-white mt-16'>{items.price} <span className='text-amber-700'>сом</span></h1>

                        <div className='w-full flex justify-between items-center mr-6 mt-24'>
                            <div className=' flex items-center'>
                                <div className='w-12 h-12 bg-center bg-cover' style={{ backgroundImage: `url("${StarOn}")` }}>
                                </div>

                                <div className='w-12 h-12 bg-center bg-cover' style={{ backgroundImage: `url("${StarOn}")` }}>
                                </div>

                                <div className='w-12 h-12 bg-center bg-cover' style={{ backgroundImage: `url("${StarOn}")` }}>
                                </div>

                                <div className='w-12 h-12 bg-center bg-cover' style={{ backgroundImage: `url("${StarOn}")` }}>
                                </div>

                                <div className='w-12 h-12 bg-center bg-cover' style={{ backgroundImage: `url("${StarOf}")` }}>
                                </div>

                                <h1 className='text-4xl text-white'>{items.star}</h1>
                            </div>

                            <div className='flex gap-4'>
                                <div
                                    className='rounded-3xl bg-amber-700 p-2 cursor-pointer'
                                    onClick={() => CheckTo(items)}
                                >
                                    <div className='bg-center bg-cover  w-14 h-14' style={{ backgroundImage: `url("${Show}")` }}></div>
                                </div>
                                <div className='rounded-3xl bg-amber-700 p-2 cursor-pointer'>
                                    <div className='bg-center bg-cover  w-14 h-14' style={{ backgroundImage: `url("${Shop}")` }}></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Tabs.Panel>
    )
}

export default MainBaner