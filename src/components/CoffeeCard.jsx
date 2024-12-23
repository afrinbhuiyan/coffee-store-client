import { IoEyeSharp } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({coffee}) => {

    const { name, quantity, supplier, taste, category, details, photo } = coffee;

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
                        <button className=" p-2 rounded-md bg-[#111]"><MdModeEditOutline className="text-white text-2xl"></MdModeEditOutline></button>
                        <button className=" p-2 rounded-md bg-[#df4949]"><MdDelete className="text-white text-2xl"></MdDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;