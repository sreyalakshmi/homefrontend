import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const[data,changedata]=useState(
        
        {
            "name":"",
            "email":"",
            "phone":"",
            "place":"",
            "password":"",
            "confirmpassword":""  
        }
    
)
const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value},[])
}
const readvalue=()=>{
    if (data.password==data.confirmpassword) {
        alert("password and confirm password same")
        console.log(data)
        axios.post("http://localhost:8080/signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userid)
                    navigate("/")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{

                console.log(error)
            }
        )
    } else {
        alert("error in password")
    }
}
let navigate=useNavigate()
  return (
    <div>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">name</label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">phoneno</label>
                            <input type="text" className="form-control" name="phone" value={data.phone} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">place</label>
                            <input type="text" className="form-control" name="place" value={data.place} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="password"  id="" className="form-control" name="password" value={data.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">confirm password</label>
                            <input type="password" id="" className="form-control" name="confirmpassword" value={data.confirmpassword} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                           <button className="btn btn-success" onClick={readvalue}>SignUp</button>
                        </div>
                        <div>
                        <a class="nav-link" href="/">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp