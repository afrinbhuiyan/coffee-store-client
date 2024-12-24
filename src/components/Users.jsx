import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { RiChatDeleteFill } from "react-icons/ri";
import Swal from "sweetalert2";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/user/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2>Yoooo : {loadedUsers.length} </h2>
            <div className="overflow-x-auto mx-52">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id} className="hover">
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)}>
                                        <RiChatDeleteFill className="text-red-700"></RiChatDeleteFill>
                                    </button>
                                </td>
                            </tr>)




                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;