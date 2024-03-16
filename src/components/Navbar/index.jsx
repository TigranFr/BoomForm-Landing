import React from 'react'
import style from './styles.module.css';
import Link from 'next/link';

const Navbar = ({mode}) => {
  return (
    <nav className={style.head}>
      <div className={style.navbar_wrapper}>
        <div className={style.logo_box}>
          {mode === "dark" 
          ? <img src="images/header/logo.png"/>
          : <img src="images/templates/header/Boom-Form2.png"/>
          }
        </div>
        <div className={style.navbar}>
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
      </div>
       
        <div className={style.login}>
            <p>Log in</p>
            <button className={style.signInBtn} ><p>Sign Up</p></button>
        </div>
    </nav>
  )
}

export default Navbar
