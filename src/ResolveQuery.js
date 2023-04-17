import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ResolveQuery = () => {

    const [data, setData] = useState({
        query: ''
    });
    const urlParams = new URLSearchParams(window.location.search);
    const issueId = urlParams.get('issueId');
    const userId = urlParams.get('userId');
    const userName = urlParams.get('userName');

    function handleSubmit(event) {
        event.preventDefault();
        console.log("data: " + JSON.stringify(data));

        fetch('http://localhost:8080/updateQuery/' + issueId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                resolverId: userId,
                resolverName: userName,
                solution: data.query
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert("Data Saved Successfully");
                window.location.href = "http://localhost:3000/TeacherDashboard?userId=" + userId + "&userName=" + userName;
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
                Solution:
                <input type="text" name="query" value={data.query} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ResolveQuery;