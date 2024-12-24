import { data, Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        // Send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <div>
                <Link to={'/'} ><button className="dancing-script text-2xl flex items-center p-3">
                    <MdKeyboardBackspace className="mr-2 hover:pr-2"></MdKeyboardBackspace> Bact to home</button></Link>
            </div>
            <div className="bg-base-200 p-5 lg:p-10 rounded-md w-screen lg:w-2/3 mx-auto mt-10 my-auto">
                <div className="text-center">
                    <h1 className="text-4xl dancing-script">Add New Coffee</h1>
                    <p className="lobster-regular mt-3 text-[#1118] ">The coffee steamed in the mug, a dark, swirling vortex of liquid warmth, its aroma a comforting embrace of the morning. <br />
                        The first sip was like a whisper of smoke and spice, dancing across the taste buds before settling into a deep, earthy richness. <br />
                        The bitter edge of the coffee was like a secret melody, a subtle complexity that lingered <br /> on the palate long after the last drop was gone.</p>
                </div>
                <form onSubmit={handleAddCoffee} className="card-body">
                    {/* from name and quantity row */}
                    <div className="lg:flex gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Coffee Name" className="input" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input" required />
                        </div>
                    </div>
                    {/* from Supplier and Taste row */}
                    <div className="lg:flex gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Taste" className="input" required />
                        </div>
                    </div>
                    {/* from category and details row */}
                    <div className="lg:flex gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Category" className="input" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Details" className="input" required />
                        </div>
                    </div>
                    {/* from photo url row */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Add Coffee" className="btn dancing-script text-[20px] border-2 text-[#522d20] border-[#522d20] bg-[#ce943e6e] 
                        hover:bg-[#a88044ab] hover:border-[#522d20]
                        " />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;