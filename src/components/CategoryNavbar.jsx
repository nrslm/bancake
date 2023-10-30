import React, { useState } from 'react'
import { Tabs } from '@mantine/core';
import Tvorok from "../assets/img/bliny-s-tvorogom.jpeg"
import MainBaner from './MainBaner';
import Smetana from "../assets/img/smetana.jpeg"
import Banana from "../assets/img/caption.jpeg"
import ChokolateBanana from '../assets/img/blinchiki-s-klubnikoy-i-bananom-full.jpeg'

function CategoryNavbar() {
    const category = ["Со cметаной", "Творогом", "Шоколадом", "Шоколадом и с бананом", "Шоколадом и с клубникой"]
    const [checkActiv, setcheckActiv] = useState(0)
    const baner = [
        {
            banerName: "Со cметаной",
            price: 30,
            star: 4.2,
            img: Smetana,
            title: "Полезность блинов со сметаной не ограничивается только их высокой сытностью. В блинной муке содержатся витамины незаменимой группы B, повышающие работоспособность, улучшающие настроение, способствующие укреплению иммунитета, выработке клеток крови, нормализующие нервную деятельность."
        },
        {
            banerName: "Творогом",
            price: 30,
            star: 4.3,
            img: Tvorok,
            title: "Начинка: творог, сметана, сахар. Блины: яйца, молоко, мука высшего сорта, соль, сахар, подсолнечное масло."
        },
        {
            banerName: "Шоколадом",
            price: 30,
            star: 4.0,
            title: " Блинчики с шоколадом. Вкусный рецепт приготовления с пошаговым описанием на 195 ккал,"
        },
        {
            banerName: "Шоколадом и с бананом",
            price: 60,
            star: 4.6,
            img: Banana,
            title: "Шоколад растапливаем на водяной бане и выливаем в кондитерский мешок. Остывший блин делим визуально на две части, на одной из которых распределяем кусочки банана, сверху поливаем растопленным шоколадом. Накрываем начинку свободной частью блина, а затем сворачиваем ещё пополам. Подобным образом начиняем все блины."
        },
        {
            banerName: "Шоколадом и с клубникой",
            price: 60,
            star: 4.3,
            img: ChokolateBanana,
            title: "Мука пшеничная хлебопекарная высшего сорта, вода питьевая, сыворотка молочная творожная, клубника, клубничное повидло, масло растительное, сахар, молоко сухое обезжиренное, меланж, соль, сода пищевая."
        }
    ]

    return (
        <div className=''>

            <Tabs size="xl" color="orange" variant="pills" radius="md" defaultValue="Со cметаной" className='text-white'>
                <Tabs.List className='flex justify-between mt-10 w-full'>
                    {
                        category.map((item, i) => {
                            return (
                                <Tabs.Tab
                                    key={i}
                                    onClick={() => setcheckActiv(i)}
                                    value={item}
                                    className='duration-500 rounded-xl p-2 text-gray-500 hover:text-amber-700 '
                                    style={checkActiv == i ? { backgroundColor: "rgb(180, 83, 9)", color: "white" } : null}
                                >
                                    <span className='text-2xl cursor-pointer'>{item}</span>
                                </Tabs.Tab>
                            )
                        })
                    }
                </Tabs.List>
                {
                    baner.map((items, i) => {
                        return (
                            <MainBaner key={i} items={items} i={i} />
                        )
                    })
                }
            </Tabs>

        </div>
    )
}

export default CategoryNavbar