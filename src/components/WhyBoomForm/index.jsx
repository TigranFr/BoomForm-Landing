
import { AiOutlineLine } from "react-icons/ai"
import style from "./style.module.css"

export const WhyBoomForm = ({ why_Boom_Form_text }) => {
    return <article className={style.why_boom_form} >
        <div className={style.why_boom_form_wrapper}>
            <div className={style.title}>
                {
                    why_Boom_Form_text.map((text, textIndex) => {
                        return <div key={textIndex} >
                            <h1 className={style.why_boom_fomr_title}>{text.title}</h1>
                            <p className={style.icons_line}> {text.textarea}</p>
                            <p className={style.icons_line}><AiOutlineLine className={style.line} /> {text.text1}</p>
                            <p className={style.icons_line}><AiOutlineLine className={style.line} /> {text.text2}</p>
                            <p className={style.icons_line}><AiOutlineLine className={style.line} /> {text.text3}</p>
                            <p className={style.icons_line}><AiOutlineLine className={style.line} /> {text.text4}</p>
                        </div>
                    })
                }
            </div>
            <div className={style.photo_why_boom_form}>
                <img src="images/groups/Group 886.png" />
            </div>
        </div>
    </article>
}