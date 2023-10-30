import React, { useState } from 'react'
import CategoryNavbar from '../../components/CategoryNavbar'
import CardsAll from '../../components/CardsAll'
import Smetana from "../../assets/img/smetana.jpeg"
import Banana from "../../assets/img/caption.jpeg"
import ChokolateBanana from '../../assets/img/blinchiki-s-klubnikoy-i-bananom-full.jpeg'
import '@mantine/core/styles.css';
import Tvorok from "../../assets/img/bliny-s-tvorogom.jpeg"
import Navbar from '../../components/Navbar'
import Icecrem from '../../assets/img/m1.jpeg'
import IceBanan from '../../assets/img/m2.jpeg'
import IceChoko from '../../assets/img/m3.jpeg'
import Vafli1 from '../../assets/img/Vafli_1.webp'
import Vafli2 from '../../assets/img/vafli_2.jpeg'
import Vafli3 from '../../assets/img/vafli_3.jpeg'

import { NativeSelect } from '@mantine/core';

function Main() {


  const cardsall = [
    {
      name: "Мароженое",
      with: "С бананом",
      price: 30,
      star: 4.1,
      img: IceBanan,
      title: "Торт мороженное со вкусом банана превосходно сочетается с клубничным мороженым!"
    },
    {
      name: "Вафли",
      with: "С мороженым",
      price: 69,
      star: 4.6,
      img: Vafli1,
      title: "Игра контрастов в кулинарии – всегда что-то особенное. В нашем случае ещё и очень вкусное. Горячие бельгийские вафли и холодное ванильное мороженое – завтрак с позитивным настроением на весь день! Обратите внимание на ягоды, они не служат не только украшением, но и дают лёгкую кислинку в сладком цунами вкусов."
    },
    {
      name: "Вафли",
      with: "С ягодами и мороженым",
      price: 69,
      star: 4.6,
      img: Vafli3,
      title: "Стог вафлей с ежевиками и сиропом strawberrys, ванильного мороженого и карамельки на белом деревянном столе"
    },
    {
      name: "Блинчик",
      with: "Со Cметаной",
      price: 30,
      star: 4.2,
      img: Smetana,
      title: "Полезность блинов со сметаной не ограничивается только их высокой сытностью. В блинной муке содержатся витамины незаменимой группы B, повышающие работоспособность, улучшающие настроение, способствующие укреплению иммунитета, выработке клеток крови, нормализующие нервную деятельность."
    },
    {
      name: "Блинчик",
      with: "Творогом",
      price: 30,
      star: 4.3,
      img: Tvorok,
      title: "Начинка: творог, сметана, сахар. Блины: яйца, молоко, мука высшего сорта, соль, сахар, подсолнечное масло."
    },
    {
      name: "Вафли",
      with: "С ягодами",
      price: 69,
      star: 4.6,
      img: Vafli2,
      title: "Пышные и ароматные вафли с ягодами к завтраку готовы!"
    },
    {
      name: "Мароженое",
      with: "Молочный",
      price: 30,
      star: 4.1,
      img: Icecrem,
      title: "100 грамм мороженое содержат 207.0 ккал (866 кДж), 3.5 грамм белков, 24.0 грамм углеводов, и 11.0 грамм жиров."
    },
    {
      name: "Блинчик",
      with: "Шоколадом",
      price: 30,
      star: 4.0,
      img: ChokolateBanana,
      title: " Блинчики с шоколадом. Вкусный рецепт приготовления с пошаговым описанием на 195 ккал,"

    },
    {
      name: "Блинчик",
      with: "Шоколадом и с бананом",
      price: 60,
      star: 4.6,
      img: Banana,
      title: "Шоколад растапливаем на водяной бане и выливаем в кондитерский мешок. Остывший блин делим визуально на две части, на одной из которых распределяем кусочки банана, сверху поливаем растопленным шоколадом. Накрываем начинку свободной частью блина, а затем сворачиваем ещё пополам. Подобным образом начиняем все блины."

    },
    {
      name: "Блинчик",
      with: "Шоколадом и с клубникой",
      price: 60,
      star: 4.3,
      img: ChokolateBanana,
      title: "Мука пшеничная хлебопекарная высшего сорта, вода питьевая, сыворотка молочная творожная, клубника, клубничное повидло, масло растительное, сахар, молоко сухое обезжиренное, меланж, соль, сода пищевая."
    },
    {
      name: "Мароженое",
      with: "С шоколадом",
      price: 30,
      star: 4.1,
      img: IceChoko,
      title: "Шоколадное мороженое в хрустящем конусе."
    }
  ]
  const [category, setCategory] = useState('все')

  return (
    <div className='all_gradient'>
      <div className='w-full  h-auto '>
        <div className='container m-auto'>
          <Navbar />
          <div>
            <CategoryNavbar />
          </div>

          <div className=' mt-20'>
            <div className='flex justify-between items-center'>
              <h1 className='text-5xl text-white'>Самые лучшие...</h1>
              <div className=''>
                <NativeSelect
                  value={category}
                  onChange={(e) => setCategory(e.currentTarget.value)}
                  className='text-2xl '
                  size="lg" data={['все', 'Мароженое', 'Вафли', 'Блинчик']}
                />
              </div>
            </div>
            <div className='mt-10 grid grid-cols-3 gap-10'>
              {
                category != 'все' ?
                  cardsall.filter((item) => item.name == category).map((items, i) => {
                    return (
                      <CardsAll key={i} items={items} i={i} />
                    )
                  })
                :
                cardsall.map((items, i) => {
                  return (
                    <CardsAll key={i} items={items} i={i} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main