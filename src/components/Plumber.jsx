import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

const Plumber = () => {
    const [data, changedata] = useState({
        "name":String,
        "emailid":String,
        "phoneno":String,
        "alternateno":String,
        "address":String,
        "area_of_service":String,
        "experience":String,
        "qualification":String,
        "availability":String
    });
    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value });
    };
    const readvalue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/addPlumber",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userid)
                    alert("successfully added")
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
        <AdminNavbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">name</label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">emailid</label>
                            <input type="text" className="form-control" name="emailid" value={data.emailid} onChange={inputHandler} />
                        </div>
                     
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">phoneno</label>
                            <input type="text" className="form-control" name="phoneno" value={data.phoneno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">alternateno</label>
                            <input type="text" className="form-control" name="alternateno" value={data.alternateno} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">address</label>
                            <input type="text" className="form-control" name="address" value={data.address} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">area_of_service</label>
                            <input type="text" className="form-control" name="area_of_service" value={data.area_of_service} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">experience</label>
                            <input type="text" className="form-control" name="experience" value={data.experience} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">qualification</label>
                            <input type="text" className="form-control" name="qualification" value={data.qualification} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">availability</label>
                            <input type="text" className="form-control" name="availability" value={data.availability} onChange={inputHandler} />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <button className="custom-button" onClick={readvalue}>ADD</button>
                        </div><br/>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <button className="custom-button" onClick={readvalue}>
                           <a href="/viewplumber" style={{ color: 'white', textDecoration: 'none' }}> View plumber</a>
                           </button>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plumber