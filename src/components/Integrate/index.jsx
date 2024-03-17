import style from './style.module.css'


const Integrate = ({integrate_text}) => {
    return <article className={style.integrate_your_form}>
            <div className={style.intergrate_your_form_wrapper}>
            <div className={style.title}>
                {
                   integrate_text.map((inter, interIndex) => {
                        return <div key={interIndex} className={style.integrate_your_form_tiles}>
                            <h1 className={style.title}>{inter.title}</h1>
                            <p className={style.text}>{inter.text}</p>
                            <p className={style.text}>{inter.text1}</p>
                            <button className={style.btn_read_more}><p>Read more </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8H15" stroke="#1DCFA9" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 1L15 8L8 15" stroke="#1DCFA9" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </button>
                        </div>
                    })
                }
            </div>
            <div>
                <img src="images/home/integrate/Apps (1).png" className={style.add_photo} />
            </div>
        </div>
    </article>
}


export default Integrate;
