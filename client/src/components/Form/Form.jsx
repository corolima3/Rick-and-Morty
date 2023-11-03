import { useState } from "react";
import { validation } from "../validation";
import style from "./Form.module.css";
import img from "../../images/person_FILL0_wght400_GRAD0_opsz24.svg";

function Form(props) {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const [textoVisible, setTextoVisible] = useState(false);

    const toggleTexto = () => {
        setTextoVisible(!textoVisible);
    };

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)
    }

    return (
            <form onSubmit={handleSubmit} className={style.container}>
                <div className={style.form}>
                    <label>Username:</label>
                    <input className={style.input} onChange={handleInputChange} value={userData.username}
                        name="username" type="text" placeholder="Escribe..." required />
                    <p style={{ color: "white" }}>{errors.username}</p>
                    <label>Password:</label>
                    <input onChange={handleInputChange} value={userData.password} name="password" type="password" placeholder="...." required />
                    <p style={{ color: "white" }}>{errors.username}</p>
                    <button className={style.btn}>LOGIN</button>
                    <span className={style.container__img}>
                        <img className={style.img} src={img} alt="Imagen" onClick={toggleTexto} />

                        <div className={textoVisible ? style.visible : style.oculto}>
                            <p>Username: caracol@gmail.com</p>
                            <p>Password: 1password</p>
                        </div>
                    </span>
                </div>
            </form>
    )
}

export default Form;