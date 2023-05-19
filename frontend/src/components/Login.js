import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Login() {

    const [errorMessages, setErrorMessages] = useState({})
    const [users, setUsers] = useState([])
    const navigate = useNavigate();
    
    const fetchUserData = () => {
        axios.get("http://localhost:8000/employees")
          .then(response => {
            setUsers(response.data)
          }, error => {console.log(error)})
    }

    useEffect(()=>{
        fetchUserData()
    },[users])
     
    const errors = {
      email: "invalid username",
      password: "invalid password"
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="login-error">{errorMessages.message}</div>
        )

    function handleSubmit(event) {

        const email = event.target.parentElement[0].value
        const password = event.target.parentElement[1].value

        const userData = users.find((user)=>user.employee_mail === email)

        if (userData) {
            if (userData.employee_password !== password) {
              setErrorMessages({ name: "password", message: errors.password });
            } else {
              setErrorMessages({})
              navigate("/home")
            }
        } else {
          setErrorMessages({ name: "email", message: errors.email });
        }
    }

    return(
        <>
            <form className="login">
                <div className="login-wrapper">
                    <label>Mail</label>
                    <input type="text" name='email' required/>
                </div>
                <div className="login-wrapper">
                    <label>Password</label>
                    <input type="password" name="password" required/>
                </div>
                <button className="login-button" type="button" onClick={(e)=>handleSubmit(e)}>Login</button>
            </form>
                {renderErrorMessage('email')}
                {renderErrorMessage('password')}
        </>
    )
}

export default Login;