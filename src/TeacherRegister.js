import React, { useState } from 'react';
import './StudentLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeacherRegister = () => {
    const [data, setData] = useState({
        userName: '',
        password: '',
        name: '',
        mobile: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log("data: " + JSON.stringify(data));

        fetch('http://localhost:8080/createTeacher', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: data.userName,
                password: data.password,
                name: data.name,
                mobile: data.mobile
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert("Registeration Successful!");
                window.location.href = "http://localhost:3000/TeacherLogin";
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

    return(
        <form class="m-10" onSubmit={handleSubmit}>
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="userName" value={data.userName} onChange={handleChange} required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={data.password} onChange={handleChange} />
                
                <label for="psw"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" value={data.name} onChange={handleChange} />
                
                <label for="psw"><b>Mobile</b></label>
                <input type="text" placeholder="Enter Mbile" name="mobile" value={data.mobile} onChange={handleChange} />
                
                <button type="submit">Register</button>
            </div>
        </form>
    );
};

export default TeacherRegister;