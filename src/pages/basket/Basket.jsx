import React from 'react'
import Navbar from '../../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'

function Basket() {
    const data = useSelector((state)=> state.bas.data || [])

    return (
        <div className='all_gradient min-h-screen'>
            <div className='container mx-auto'>
                <Navbar />
                {
                    data.map((item,i)=>{
                        return(
                            <h1 className='text-white' style={{color: "white"}}>{item.name}</h1>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Basket