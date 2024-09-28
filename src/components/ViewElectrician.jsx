import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import AdminNavbar from './AdminNavbar'

const ViewElectrician = () => {
    const[data,changedata]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/viewElectrician",data).then(
            (response)=>{
            console.log(response.data)
            changedata(response.data)
            }
        ).catch(
            (error)=>{
            console.log(error.message)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <AdminNavbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">emailid</th>
                                    <th scope="col">phoneno</th>
                                    <th scope="col">alternateno</th>
                                    <th scope="col">address</th>
                                    <th scope="col">area_of_service</th>
                                    <th scope="col">experience</th>
                                    <th scope="col">qualification</th>
                                    <th scope="col">availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value,index)=>{
                                    return  <tr>
                                    <td scope="row">{value.name}</td>
                                    <td>{value.emailid}</td>
                                    <td>{value.phoneno}</td>
                                    <td>{value.alternateno}</td>
                                    <td>{value.address}</td>
                                    <td>{value.area_of_service}</td>
                                    <td>{value.experience}</td>
                                    <td>{value.qualification}</td>
                                    <td>{value.availability}</td>
                                </tr>
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewElectrician