import React from 'react'
import style from './styles.module.css';
import Link from 'next/link';

const Navbar = ({mode}) => {
  return (
    <nav className={style.head}>
        <div>
          {mode === "dark" 
          ? <img src="images/header/logo.png" className={style.img_group}/>
          : <img src="images/templates/header/Boom-Form2.png" className={style.img_group}/>
          }
        </div>
        <div className={style.nav}>
            <Link href="/" className={style.form}>
              My Forms
            </Link>
            <Link href="/templates" className={style.templates}>
              Templates
            </Link>
            <Link href="/integrations" className={style.integrations}>
              Integrations
            </Link>
            <Link href="/pricing" className={style.pricing}>
              Pricing
            </Link>
            <Link href="/support" className={style.support}>
              Support
            </Link>         
        </div>
        <div className={style.log}>
            <p>Log in</p>
            <button className={style.btn} ><p>Sign Up</p></button>
        </div>
    </nav>
  )
}

export default Navbar
