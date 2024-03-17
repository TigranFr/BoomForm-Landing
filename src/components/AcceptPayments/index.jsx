
import style from "./style.module.css"

export const AcceptPayments = ({ acceptPaymente }) => {
    return <article className={style.payments}>
        <div className={style.paymentsTitles}>
            <h1>Accept Payments</h1>
            <p>The Payment section of the app gives you an opportunity to accept payments directly once users submit your online form. </p>
        </div>
        <div className={style.payments_blocs_wrapper}>
            {
                acceptPaymente.map((accept, acceptIndex) => {
                    return <div key={acceptIndex} className={style.payment_block}>
                        <img src={accept.photo} />
                        <h1 className={style.title}>{accept.title}</h1>
                        <p className={style.text}>{accept.text}</p>
                    </div>
                })
            }
        </div>
        
    </article>
}