"use client"

import style from './page.module.css'
import Navbar from '@/components/Navbar'
import CreateProf from '@/components/CreateProf'


export default function Home() {
  return <div className={style.homePage}>
            <Navbar mode={"dark"}/>
            <CreateProf/>
        </div> 

}
