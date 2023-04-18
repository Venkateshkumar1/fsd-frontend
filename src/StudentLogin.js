import React, { useState } from 'react';
import './StudentLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function StudentLogin() {
    const [data, setData] = useState({
        userName: '',
        password: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log("data: " + JSON.stringify(data));

        fetch('http://localhost:8080/studentLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: data.userName,
                password: data.password
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert("Welcome " + data['name'] + " !");
                window.location.href = "http://localhost:3000/Dashboard?userId=" + data['_id'] + "&userName=" + data['userName'];
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <form class="m-10" onSubmit={handleSubmit}>
            <div class="imgcontainer">

                <h3>Student Login</h3>
                 
            </div>

            <div class="container col-sm-4">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="userName" value={data.userName} onChange={handleChange} required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={data.password} onChange={handleChange} />
                
                <button class="cancelbtn" type="submit">Login</button>
            </div>
        </form>
    );
}

export default StudentLogin;