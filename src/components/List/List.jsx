
import React, { useState, useEffect } from 'react';
import { getRandomHexColor } from '../../utils'
import './List.css'

// useState() - hook ( function )
// useEffect() - hook ( function )
// component LifeCycle: жизненые циклы компонентов ( 3 сосотяния)
// 1. 🟢 componentDidMount - рождение компонента на странице (one-time operastion)
// 2. 🟡 componentDidUpdate - модификация state
// 3. 🔴 componentWillUnmount - уничтожение компонента 







export default function List({ list: dataList }) {

    const [list, setList] = useState(structuredClone(dataList))

    useEffect(() => {

        const copyArr = list.map((_, index) => index)
        const timer = setInterval(() => {
            if (!copyArr.length) clearInterval(timer)
            const randomIndex = Math.floor(Math.random() * copyArr.length)
            const arrIndex = copyArr[randomIndex]

            setList(prevState => prevState.map((el, index) => {
                if (index === arrIndex) {
                    return { ...el, active: true }

                }
                return el
            }))
            copyArr.splice(randomIndex, 1)



        }, 1000);


    }, [])

    useEffect(() => {
        console.log(list)
    }, [list])

    return (
        <table>
            <tbody>
                {list.map((el, index) => {
                    return <tr key={index} className={el.active ? 'active' : ''}>
                        <td>{el.type}</td>
                        <td>{el.icon}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
