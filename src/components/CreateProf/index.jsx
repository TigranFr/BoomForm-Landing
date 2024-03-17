import style from "./styles.module.css";

const CreateProf = () => {

    return <article className={style.create_professional}>
       
        <div className={style.createProfessional}>
            <h1 className={style.title}>Create professional <br></br> forms in months</h1>
            <img src="images/home/createProf/prof_image.png" className={style.vector} />
            <p className={style.paragraph}>
                Increase the productivity of your website and make   your working process as easy, fast, fun, and trouble-free as possible.
            </p>
            <h2 className={style.hours}>hours</h2>       
            <button className={style.createProfBtn}> <p>Create Form</p></button>
        </div>
    </article>
}

export default CreateProf;
