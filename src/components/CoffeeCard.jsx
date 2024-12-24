import { IoEyeSharp } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1d8822",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className="card card-side bg-[#1111]">
                <figure>
                    <img className="w-[200px]" src={photo} alt={photo} />
                </figure>
                <div className="card-body flex flex-row justify-between items-center ">
                    <div>
                        <h2 className=""> <span className="font-bold">Name:</span> {name}  </h2>
                        <p><span className="font-bold">Quantity:</span> {quantity} </p>
                        <p><span className="font-bold">Supplier:</span> {supplier} </p>
                        <p><span className="font-bold">Taste:</span> {taste} </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className=" p-2 rounded-md bg-[#a5855a]"><IoEyeSharp className="text-white text-2xl" ></IoEyeSharp></button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className=" p-2 rounded-md bg-[#111]"><MdModeEditOutline className="text-white text-2xl"></MdModeEditOutline></button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className=" p-2 rounded-md bg-[#df4949]">
                            <MdDelete className="text-white text-2xl"></MdDelete>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;