import React from 'react'
import StarOn from "../assets/img/starOn.png"
import ShowIcon from "../assets/img/show.png"
import Shop from "../assets/img/shop.png"
import { useDispatch } from 'react-redux'
import { check } from '../features/check/CheckSlice'
import { useNavigate } from 'react-router-dom'

function CardsAll({ items, i }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const Show = (item, i) =>{
        dispatch(check(item))
        navigate("/"+i)
    }

    return (
        <div className='h-auto gradient p-4 rounded-xl'>
            <div style={{ backgroundImage: `url("${items.img}")` }} className='w-full h-72 bg-cover bg-center rounded-xl'>
                <div className=' ib backdrop-blur-sm bg-black/30  rounded-xl'>
                    <div className='w-10 h-10 bg-center bg-cover ' style={{ backgroundImage: `url("${StarOn}")` }}></div>
                    <h1 className='text-4xl text-white'>{items.star}</h1>
                </div>

            </div>

            <div className='mt-6 text-2xl text-white'>
                <h1 className='text-4xl'>{items.name}</h1>
                <h1 className='text-neutral-400 mt-2 mb-4'>{items.with}</h1>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl'>{items.price} <span className='text-amber-700'>с</span></h1>
                    <div className='flex gap-4'>
                        <div 
                            className='p-2 rounded-3xl bg-amber-700 cursor-pointer'
                            onClick={() => Show(items, i)}
                        >
                            <div
                                className='bg-center bg-cover w-10 h-10'
                                style={{ backgroundImage: `url("${ShowIcon}")` }}
                            >
                            </div>
                        </div>
                        <div className='p-2 rounded-3xl bg-amber-700 cursor-pointer'>
                            <div className='bg-center bg-cover w-10 h-10' style={{ backgroundImage: `url("${Shop}")` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsAll