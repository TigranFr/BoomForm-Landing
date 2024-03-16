"use client"

import Image from 'next/image'
import { Link, Outlet } from "react-router-dom"
import style from './page.module.css'


export default function Home() {
  return <nav className={style.head}>
        <div>
            <img src="photo/Group 509.png" className={style.img_group}/>
        </div>
        <div className={style.nav}>
            <a to="/" className={style.form}>My Forms</a>
            <a  className={style.templates}>Templates</a>
            <a  className={style.inter}> Integrations</a>
            <a to="/pric" className={style.pricing}> Pricing</a>
            <a className={style.support}>Support</a>
        </div>
        <Outlet />
        <div className={style.log}>
            <p>Log in</p>
            <button className={style.btn} ><p>Sign Up</p></button>
        </div>
    </nav>
}
