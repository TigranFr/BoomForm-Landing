"use client"
import { why_Boom_Form_text , create_dynamic_fields_text, acceptPaymente } from "@/utils/helpers";

import style from './page.module.css'
import Navbar from '@/components/Navbar'
import CreateProf from '@/components/CreateProf'
import { PhotoMenu } from '@/components/PhotoMenu'
import { WhyBoomForm } from '@/components/WhyBoomForm'
import { Radio } from "@/components/CreateDynFields";
import { AcceptPayments } from "@/components/AcceptPayments";

export default function Home() {
  return <div className={style.homePage}>
            <Navbar mode={"dark"}/>
            <CreateProf/>
            <PhotoMenu/>
            <WhyBoomForm why_Boom_Form_text={why_Boom_Form_text}/>
            <Radio create_dynamic_fields_text={create_dynamic_fields_text}/>
            <AcceptPayments acceptPaymente={acceptPaymente}/>
        </div> 

}
