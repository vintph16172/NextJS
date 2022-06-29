import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import style from './Header.module.scss'

type Props = {}

const Header = (props: Props) => {
    const router = useRouter()
    // const style = {
    //     marginRight: 10,
    //     color: router.asPath === href ? 'red' : 'black',
    // }
    // const activeLink = (e) => {
    //     e.preventDefault()
    //     router.push(href)
    // }


    return (
        <div>
            <ul className={style.menu}>
                <li className={style.menu__link} ><Link href="/">Home</Link></li>
                <li className={style.menu__link}><Link href="/products">Products</Link></li>
                <li className={style.menu__link}><Link href="/products/12">Product Detail</Link></li>

            </ul>
        </div>
    )
}

export default Header