import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const[data,changedata]=useState(
        {
           
            "email":"",
            "password":""
        }
)
const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value},[])
}
const readvalue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/signin",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                sessionStorage.setItem("token",response.data.token)
                sessionStorage.setItem("userid",response.data.userid)
                navigate("/add")
            } else {
                alert("error")
            }
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    )
}
let navigate=useNavigate()

  return (
    <div>
        <center><h5>LOGIN</h5></center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="password" id="" className="form-control" name="password" value={data.password} onChange={inputHandler}/>
                        </div><br />
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <button className="btn btn-success" onClick={readvalue}>Login</button>
                        </div>
                        <div>
                        <a class="nav-link" href="/signup">SignUp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login