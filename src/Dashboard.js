import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const userName = urlParams.get('userName');

  // useEffect(() => {
  //   axios.get("http://localhost:8080/getAllData")
  //     .then(response => {
  //       console.log("DB Data: " + response.data);
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    fetch('http://localhost:8080/getAllData/?userId=' + userId)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  function handleClick() {
    console.log('Create Query Btn Event!');
    window.location.href = "http://localhost:3000/CreateQuery?userId=" + userId + "&userName=" + userName;
  }

  return (
    <div>
      <button onClick={handleClick}>Create</button>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <table>
              <thead>
                <tr>
                  <th>Issue</th>
                  <th>Soulution</th>
                  <th>Resolved By</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item._id}>
                    {/* <td>{item._id}</td> */}
                    {/* <td>{item.userName}</td> */}
                    <td>{item.issue}</td>
                    <td>{item.solution}</td>
                    <td>{item.resolverName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  );
};
export default Dashboard;