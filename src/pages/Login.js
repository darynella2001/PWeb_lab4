import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import NavBar from "../NavBar";
function Login(){
    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            navigate("/quizes")  
        }
    }, [])
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    const navigate = useNavigate();

    async function signUp(){
        let item={data : {name, surname}}

        console.warn("itemi", item)
        let result = await fetch("https://pure-caverns-82881.herokuapp.com/api/v54/users", 
        {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                "X-Access-Token": '00e42cabcc70501b0941ae177326c2c7407e96d701a97a82d97577d4db27e6de',
            },
            body:JSON.stringify(item)
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        console.warn("result", result)
        navigate("/quizes")
    }

    return(
        <>
        <NavBar />

        <div className="col-sm-6 offset-sm-3">
            <h1>Create User</h1>
            <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"/>
            <br/>
            <input type="text" className="form-control" value={surname} onChange={(e)=>setSurname(e.target.value)} placeholder="surname"/>
            <br/>
            <button onClick={signUp}>Login</button>
        </div>
       </>
    );
}

export default Login;