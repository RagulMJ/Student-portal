import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserView() {
    const navigate = useNavigate();
    let params = useParams();
    const [user,setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let user = await axios.get(
              `https://6214bf2189fad53b1f1d825c.mockapi.io/students/${params.id}`
            );
            setUserData(user.data);
          }
          fetchData();
    }, []);

  return (
    <div>
      <div>User View</div>
      <table
        className="table table-bordered"
        id="dataTable"
        width="100%"
        cellSpacing="0"
      >
        <thead className="text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Class</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.dob}</td>
            <td>{user.address}</td>
            <td>{user.class}</td>
            <td>{user.year}</td>
          </tr>
        </tbody>
      </table>
      <div className="col-lg-6 mt-3">
        <input
          type={"submit"}
          value="Close"
          onClick={() => navigate("/User", { replace: true })}
          className="btn btn-primary"
        />
      </div>
    </div>
  )
}

export default UserView