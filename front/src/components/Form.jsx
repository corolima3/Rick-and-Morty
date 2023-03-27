import { useState } from "react";
import {validation} from "./validation"

function Form (props)    {


    const [userData, setUserData] = useState({
        username: '', 
        password: '' })
    const [errors,setErrors]= useState({
        username: "",
        password: ""
    })

const handleInputChange = (e) => {
    setUserData({
                ...userData,
                [e.target.name] : e.target.value
            })
    setErrors(validation ({
                ...userData,
                [e.target.name] : e.target.value
            }))
        }

const handleSubmit=(e)=>{
    e.preventDefault();
        props.login(userData)
}

return ( <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input onChange={handleInputChange} value={userData.username} name="username" type="text" placeholder="Escribe..." />
                <p style={{color: "red"}}>{errors.username}</p>
                <label>Password:</label>
                <input onChange={handleInputChange} value={userData.password} name="password" type="password" placeholder="...." />
                <button>LOGIN</button>
            </div>
        </form>
    </>
)}

export default Form;