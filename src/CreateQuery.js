import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateQuery = () => {

    const [data, setData] = useState({
        query: ''
    });
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const userName = urlParams.get('userName');

    function handleSubmit(event) {
        event.preventDefault();
        console.log("data: " + JSON.stringify(data));

        fetch('http://localhost:8080/createQuery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                userName: userName,
                issue: data.query
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert("Data Saved Successfully");
                window.location.href = "http://localhost:3000/Dashboard?userId=" + userId + "&userName=" + userName;
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
        <form onSubmit={handleSubmit}>
            <label>
                Query:
                <input type="text" name="query" value={data.query} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateQuery;