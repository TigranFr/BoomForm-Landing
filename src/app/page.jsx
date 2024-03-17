"use client"
import { why_Boom_Form_text , create_dynamic_fields_text, acceptPaymente , integrate_text ,templateBorder} from "@/utils/helpers";

import style from './page.module.css'
import Navbar from '@/components/Navbar'
import CreateProf from '@/components/CreateProf'
import { PhotoMenu } from '@/components/PhotoMenu'
import { WhyBoomForm } from '@/components/WhyBoomForm'
import { Radio } from "@/components/CreateDynFields";
import { AcceptPayments } from "@/components/AcceptPayments";
import Integrate from "@/components/Integrate";
import Templates from "@/components/Templates";
import WixWeebly from "@/components/WixWeebly";
import GiveItTry from "@/components/GiveItTry";


export default function Home() {
  return <div className={style.homePage}>
            <Navbar mode={"dark"}/>
            <CreateProf/>
            <PhotoMenu/>
            <WhyBoomForm why_Boom_Form_text={why_Boom_Form_text}/>
            <Radio create_dynamic_fields_text={create_dynamic_fields_text}/>
            <AcceptPayments acceptPaymente={acceptPaymente}/>
            <Integrate integrate_text={integrate_text}/>
            <Templates templateBorder={templateBorder}/>
            <WixWeebly/>
            <GiveItTry/>
        </div> 

}
