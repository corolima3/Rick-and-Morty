import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import styles from "./About.module.css";
import perfil from '../../images/img_github.jpeg';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className={styles.main}>
            <div className={styles.about}>
                <h2>Coro Lima Jose</h2>
                <div className={styles.content}>
                    <figure>
                        <img src={perfil} alt="Img de programador" />
                    </figure>
                    <article className={styles.info}>
                        <p><a href="https://www.linkedin.com/in//" target="_blank" rel="noreferrer" className={styles.link} >Linkedin</a></p>
                        <p><a href="https://github.com/corolima3" target="_blank" rel="noreferrer" className={styles.link} >GitHub</a></p>
                        <p><a href="https:" target="_blank" rel="noreferrer" className={styles.link} >Website</a></p>
                    </article>
                </div>
            </div>
            <div>
                <Link to="/home">
                    <MdArrowBackIosNew className={styles.button_return} />
                </Link>
            </div>
        </section>
    )
}

export default About;
//<button className={styles.button_return}>Regresa</button>