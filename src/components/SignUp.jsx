import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const SignUp = () => {
    const [data, changedata] = useState({
        name: "",
        email: "",
        phone: "",
        place: "",
        password: "",
        confirmpassword: ""
    });

    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value });
    };

    const readvalue = () => {
        if (data.password === data.confirmpassword) {
            console.log(data);
            axios.post("http://localhost:8080/signup", data).then(
                (response) => {
                    console.log(response.data);
                    if (response.data.status === "success") {
                        sessionStorage.setItem("token", response.data.token);
                        sessionStorage.setItem("userid", response.data.userid);
                        navigate("/");
                    } else {
                        alert("Error during signup");
                    }
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            );
        } else {
            alert("Passwords do not match");
        }
    };

    let navigate = useNavigate();

    return (
        <div>
            <div style={styles.banner}>
                <img src="newlogo.jpg" alt="Logo" style={styles.logo} />
                <h1 style={styles.bannerText}>QUICKSERV</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Phone No</label>
                                <input type="text" className="form-control" name="phone" value={data.phone} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Place</label>
                                <input type="text" className="form-control" name="place" value={data.place} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" id="" className="form-control" name="password" value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" id="" className="form-control" name="confirmpassword" value={data.confirmpassword} onChange={inputHandler} />
                            </div>
                            <center>
                                <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="custom-button" onClick={readvalue}>Sign Up</button>
                                </div>
                            </center>
                            <div>
                                <a className="nav-link" href="/">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    banner: {
        background: 'linear-gradient(to right, #FF69B4, #8A2BE2)', // Example gradient background
        padding: '0px ', // Decreased padding for a shorter banner
        textAlign: 'center',
        borderRadius: '8px',
        marginBottom: '20px',
        width: '100%', // Full width for the banner
    },
    logo: {
        width: '100px', // Adjust the size of your logo
        height: 'auto', // Keep the aspect ratio
        marginBottom: '5px', // Space below the logo
    },
    bannerText: {
        color: '#fff', // White text color
        fontSize: '2rem', // Reduced font size for a shorter banner
        fontWeight: 'bold',
        margin: '0',
    },
};

export default SignUp;
