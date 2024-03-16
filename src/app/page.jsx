"use client"

import Image from 'next/image'
import style from './page.module.css'
import Navbar from '@/components/Navbar'

export default function Home() {
  return <div className={style.homePage}>
            <Navbar mode={"dark"}/>
        </div> 

}
