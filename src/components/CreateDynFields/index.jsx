import { AiOutlineLine } from "react-icons/ai"
import style from "./style.module.css"

export const Radio = ({ create_dynamic_fields_text }) => {
    return <article className={style.create_dyn_fields}>
        <div className={style.create_dyn_fields_wrapper}>
                <div className={style.photo_create_dyn_fields}>
                    <img src="images/home/radio/Radio.png" className={style.radio_photo} />
                </div>
                <div className={style.title_creating}>
                {
                    create_dynamic_fields_text.map((text, textIndex) => {
                        return <div key={textIndex} >
                            <h1 className={style.creating_h1}>{text.title}</h1>
                            <p className={style.radio_text}><AiOutlineLine className={style.radio_line} /> {text.text1}</p>
                            <p className={style.radio_text}><AiOutlineLine className={style.radio_line} /> {text.text2}</p>
                            <p className={style.radio_text}><AiOutlineLine className={style.radio_line} /> {text.text3}</p>
                            <button className={style.btn_read_more}>Read more<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8H15" stroke="#1DCFA9" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 1L15 8L8 15" stroke="#1DCFA9" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </button>
                        </div>
                    })
                }
            </div>
        </div>
    </article>
}