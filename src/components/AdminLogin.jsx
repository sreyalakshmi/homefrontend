import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

const AdminLogin = () => {
    const [data, changedata] = useState({
        "emailid": "",
        "password": ""
    });

    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value });
    };

    const readvalue = () => {
        console.log(data);
        axios.post("http://localhost:8080/adminlogin", data).then(
            (response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    sessionStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("userid", response.data.userid);
                    navigate("/add");
                } else {
                    alert("error");
                }
            }
        ).catch((error) => {
            console.log(error);
        });
    };

    let navigate = useNavigate();

    return (
        <div>
            <div className="Adminlogin-container" style={styles.container}>
                {/* Add the card style here */}
                <div style={styles.card}>
                    <div className="row justify-content-center align-items-center">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="emailid" className="form-label">Email ID</label>
                                    <input type="text" className="form-control" name="emailid" value={data.emailid} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" value={data.password} onChange={inputHandler} />
                                </div>
                                <br /><br/><br/><br/>
                                <center>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="custom-button" onClick={readvalue}>
                                            <a href="/electrician" style={{ color: 'white', textDecoration: 'none' }}> Login</a>
                                        </button>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
        minHeight: '100vh', // Full viewport height
        padding: '20px', // Padding around the container
        backgroundColor: '#f8f9fa', // Light background color for the container
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
        border: 'none',
        borderRadius: '8px',
        padding: '30px', // Increased padding for a larger card
        width: '400px', // Set desired width for the card
        height: 'auto', // Set to auto to adjust based on content
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Increased shadow for depth
        margin: '0 auto', // Center the card horizontally
    },
};

export default AdminLogin;
