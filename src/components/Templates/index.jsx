    import React from 'react'
    import style from './style.module.css';

    const Templates = ({templateBorder}) => {
    return <article className={style.template}>
            <div className={style.template_wrapper}>
                <h1 className={style.template_wrapper_title}>Templates</h1>
                <button className={style.btn_see_more}><p className={style.see_more}>See more </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H15" stroke="#434E5A" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 1L15 8L8 15" stroke="#434E5A" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </button>
            </div>
            <div className={style.teamplate_wrapper_blocks}>
                {
                templateBorder.map((temp, tempIndex) => {
                        return <div key={tempIndex} className={style.template_wrapper_block}>
                            <div className={style.templates_background}>
                                <img src={temp.photo} className={style.contact_us_form_img} />
                                <h1 className={style.title}>{temp.title}</h1>
                                <p className={style.textarea}>{temp.textarea}</p>
                                <li className={style.text}>{temp.text}</li>
                            </div>
                        </div>
                    })
                }
            </div>
        </article>
    
    }

    export default Templates
