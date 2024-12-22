import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
const AddCoffee = () => {
    return (
        <div className="">
            <div>
                <Link to={'/'} ><button className="dancing-script text-2xl flex items-center">
                    <MdKeyboardBackspace className="mr-2"></MdKeyboardBackspace> Bact to home</button></Link>
            </div>
            <div className="bg-base-200 p-10 rounded-md w-2/3 mx-auto mt-10 my-auto">
                <div className="text-center">
                    <h1 className="text-4xl dancing-script">Add New Coffee</h1>
                    <p className="lobster-regular mt-3 text-[#1118] ">The coffee steamed in the mug, a dark, swirling vortex of liquid warmth, its aroma a comforting embrace of the morning. <br />
                        The first sip was like a whisper of smoke and spice, dancing across the taste buds before settling into a deep, earthy richness. <br />
                        The bitter edge of the coffee was like a secret melody, a subtle complexity that lingered <br /> on the palate long after the last drop was gone.</p>
                </div>
                <form className="card-body">
                    <div className="flex gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="CoffeeName" className="input" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="Available Quantity" className="input" required />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="CoffeeName" className="input" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="Available Quantity" className="input" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn dancing-script text-[20px] border-2 text-[#522d20] border-[#522d20] bg-[#ce943e6e] ">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;