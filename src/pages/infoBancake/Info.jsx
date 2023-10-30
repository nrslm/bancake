import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import StarOn from "../../assets/img/starOn.png"
import {add, update} from '../../features/basket/BasketSlice'
import { useNavigate } from 'react-router-dom'

function Info() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [activ, setActiv] = useState(0)
  const item = useSelector((state) => state.stories.data[0].text)
  const [price, setPrice] = useState(item.price)
  let num = 0
  const setcheckActiv = (i) => {
    setActiv(i)
    if (i == 0) {
      setPrice(item.price)
      // num = 0
    } else if (i == 1) {
      setPrice(Math.floor(item.price * 1.4))
      // num = item.price - price
    } else {
      setPrice(Math.floor(item.price * 1.8))
      // num = item.price - price
    }

    dispatch(update(price))
  }
  useEffect(() => {
    console.log(item.price)
  }, [item])




  return (
    <div className='all_gradient min-h-screen bg-top bg-cover' >
      <div className='container m-auto '>
        <Navbar />

        <div className='w-full flex justify-center'>
          <div className=' mt-20 w-10/12 rounded-xl border-2 text-white border-white  '>
            <div className='flex ' style={{ height: "500px" }}>
              <div
                className='bg-center bg-cover w-5/12 h-full rounded-tl-xl rounded-bl-xl'
                style={{ backgroundImage: `url("${item.img}")` }}
              >
              </div>
              <div className='w-7/12 p-4'>

                <div className='flex justify-between w-full items-center'>
                  <div>
                    <h1 className='text-4xl'>{item.name}</h1>
                    <h1 className='text-neutral-400 mt-2 mb-4 text-xl'>{item.with}</h1>
                  </div>
                  <div className='flex ib backdrop-blur-sm bg-black/30  rounded-xl'>
                    <div className='w-10 h-10 bg-center bg-cover ' style={{ backgroundImage: `url("${StarOn}")` }}></div>
                    <h1 className='text-4xl text-white'>{item.star}</h1>
                  </div>
                </div>

                <div className='overflow-auto h-44 mt-4 flex items-center'>
                  <h1 className='text-lg'>{item.title}</h1>
                </div>

                <div>
                  <h1 className='text-2xl'>Размер</h1>
                  <div className='flex justify-between items-center gap-4 mt-4'>
                    <div>
                      <h1 className='text-4xl'>{price}
                        <span className='text-amber-700'>сом</span>
                      </h1>
                    </div>

                    <div className='flex gap-4'>
                      {
                        ["S", "M", "L"].map((item, i) => {
                          return (
                            <div
                              key={i}
                              onClick={() => setcheckActiv(i, item)}
                              className='duration-200 cursor-pointer py-2 px-4 rounded-xl text-xl bg-stone-800'
                              style={i === activ ? { backgroundColor: "rgb(180 83 9)" } : null}
                            >
                              {item}
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>

                  <div className='mt-8 flex justify-end'>
                    <div 
                    className='bg-amber-600 hover:bg-amber-700 text-4xl font-medium inline-block px-4 py-2 rounded-xl'
                      onClick={() => dispatch(add(item))}
                    >
                      Заказать
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info