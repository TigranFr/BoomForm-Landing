import style from "./style.module.css"
import LiveChat from "./livechat";

export const PhotoMenu = () => {
    return <div className={style.form_name}>
       
        <img src="images/groups/Group 876.png"  className={style.photo}/>
        <button className={style.live_chat}><LiveChat/> </button>
    </div>
}