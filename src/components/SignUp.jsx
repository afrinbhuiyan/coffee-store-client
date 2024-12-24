import { useContext } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            // new user has been creaed
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="ml-20">
                <Link to={'/'} ><button className="dancing-script text-2xl flex items-center p-3">
                    <MdKeyboardBackspace className="mr-2 hover:pr-2"></MdKeyboardBackspace> Bact to home</button></Link>
            </div>
            <div className="hero lg:mt-10">
                <div className="bg-[#1111] w-full lg:w-2/4 rounded-lg">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn dancing-script text-[20px] border-2 text-[#522d20] border-[#522d20] bg-[#ce943e6e] 
                                hover:bg-[#a88044ab] hover:border-[#522d20]">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;