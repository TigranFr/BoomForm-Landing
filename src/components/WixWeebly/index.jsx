import React from 'react';
import style from "./style.module.css"
const WixWeebly = () => {
    return (
        <article className={style.wixWeebly}>
            <div className={style.title_trusted}>
                <h1>Trusted by the most innovative website builder platforms</h1>
            </div>
            <div className={style.wix_weebly}>
                <div className={style.wix}>
                    <img src="images/home/integrate/Wix-App-Market.png" className={style.wix_photo} />
                </div>
                <div>
                    <img src="images/home/integrate/weeble.png" className={style.weebly} />
                </div>
            </div>
        </article>
    );
};

export default WixWeebly;
