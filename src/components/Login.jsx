import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
    const [data, changedata] = useState({
        email: "",
        password: ""
    });

    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value });
    };

    const readvalue = () => {
        console.log(data);
        axios.post("http://localhost:8080/signin", data).then(
            (response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    sessionStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("userid", response.data.userid);
                    navigate("/add");
                } else {
                    alert("Error: Invalid credentials");
                }
            }
        ).catch(
            (error) => {
                console.log(error);
                alert("Error: Unable to login");
            }
        );
    };

    let navigate = useNavigate();

    return (
        <div className="login-container" style={styles.container}>
            <div style={styles.banner}>
                <h1 style={styles.bannerText}>QUICKSERV</h1>
            </div>
            <div className="row justify-content-center align-items-center" style={styles.row}>
                <div className="col col-12 col-sm-10 col-md-8 col-lg-6">
                    <div className="card" style={styles.card}>
                        <h6 style={styles.welcomeText}>Welcome</h6> {/* Added welcome text */}
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label" style={styles.label}>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={data.email}
                                onChange={inputHandler}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label" style={styles.label}>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={data.password}
                                onChange={inputHandler}
                            />
                        </div>
                        <center>
                            <button className="custom-button" style={styles.adminLoginButton} onClick={readvalue}>
                                Login
                            </button>
                        </center>
                        <center>
                            <div>
                                <a className="nav-link" href="/signup" style={styles.signUpLink}>Sign Up Free</a>
                            </div>
                        </center>
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
    banner: {
        background: 'linear-gradient(to right, #FF69B4, #8A2BE2)', // Grey background color
        padding: '15px 0',
        textAlign: 'center',
        borderRadius: '8px',
        marginBottom: '20px',
        width: '100%', // Full width for the banner
    },
    bannerText: {
        color: '#fff', // White text color
        fontSize: '2.5rem', // Font size
        fontWeight: 'bold',
        margin: '0',
    },
    row: {
        display: 'flex', // Enable flexbox on the row
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
        flexDirection: 'column', // Stack items vertically
        width: '100%', // Ensure it takes full width
        marginTop: '20px', // Space above the card
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
        border: 'none',
        borderRadius: '8px',
        padding: '30px', // Increased padding for a larger card
        width: '400px', // Set desired width for the card
        height: 'auto', // Set to auto to adjust based on content
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Increased shadow for depth
        margin: '0 auto', // Center the card horizontally
    },
    welcomeText: {
        fontSize: '1.5rem', // Font size for welcome text
        fontWeight: 'bold', // Bold text
        color: '#333', // Dark text color
        marginBottom: '20px', // Space below the welcome text
        textAlign: 'center', // Center align the welcome text
    },
    heading: {
        fontWeight: 'bold', // Bold heading text
        color: '#333', // Dark text color for contrast
    },
    label: {
        fontWeight: 'bold', // Bold label text
        color: '#333', // Dark text color for contrast
    },
    signUpLink: {
        color: '#007bff', // Bootstrap primary color
        textDecoration: 'none', // Remove underline
        fontWeight: 'bold', // Bold text
    },
    adminLoginButton: {
        fontWeight: 'bold', // Bold text
        width: '100%', // Full width button
    },
};

export default Login;
