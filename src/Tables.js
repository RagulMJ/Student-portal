import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import swal from 'sweetalert';


function Tables() {
    const [user, setUsers] = useState([]);
    // getting data from API
    useEffect(() => {
        async function fetchData() {
            let user = await axios.get(
                "https://6214bf2189fad53b1f1d825c.mockapi.io/students"
            );
            setUsers(user.data);
        }
        fetchData();
    }, []);


    const deleteUser = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios
                    .delete(`https://6214bf2189fad53b1f1d825c.mockapi.io/students/${id}`)
                    .then(() => {
                        getData();
                    });

                swal(" Your file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your file is safe!");
            }
        });
    };
    const getData = () => {
        axios
            .get(`https://6214bf2189fad53b1f1d825c.mockapi.io/students/`)
            .then((getData) => {
                setUsers(getData.data);
            });
    };


    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-2 text-gray-800">Profile List</h1>
                <Link to={"/Productform"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i class="fas fa-box fa-sm text-white-50"></i> Entry Profile</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>DOB</th>
                                <th>Address</th>
                                <th>Class</th>
                                <th>Year</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>DOB</th>
                                <th>Address</th>
                                <th>Class</th>
                                <th>Year</th>
                                <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {user.map((e, id) => {
                                    return (
                                        <tr key={id}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.age}</td>
                                        <td>{e.dob}</td>
                                        <td>{e.address}</td>
                                        <td>{e.class}</td>
                                        <td>{e.year}</td>
                                            <td className="text-center ">
                                                <Link
                                                    to={`/ProductView/${e.id}`}
                                                    type="button"
                                                    class="btn btn-primary"
                                                >
                                                    View
                                                </Link>

                                                <Link
                                                    to={`/ProductEdit/${e.id}`}
                                                    className="btn btn-success m-1"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() => deleteUser(e.id)}
                                                    className="btn btn-danger"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tables