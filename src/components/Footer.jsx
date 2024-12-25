import { IoLogoFacebook } from "react-icons/io5";
import { TfiTwitterAlt } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import logo from '../../public/more/logo1.png'
import '../App'

const Footer = () => {
    return (
        <div>
            <footer className=" bg-base-200 text-base-content p-10 flex px-80 mt-20">
                <div className="flex-1">
                    <img className='w-24' src={logo} alt="" />
                    <p className='kanit-black text-3xl text-[#361c0d] my-4'>Espresso Emporium</p>
                    <p className='exo-2 text-[#361c0d]'><small>Always ready to be yore friend come and contact. Consequatur recusandae dicta <br />  assumenda culpa, quam, consectetur doloremque delectus eveniet ex veritatis, repellat iste aperiam?<br />  Exercitationem nesciunt mollitia, ex nisi accusantium sed.</small></p>
                <nav className="text-[#361c0d] text-3xl flex gap-2 my-4">
                    <a className="link "> <IoLogoFacebook></IoLogoFacebook> </a>
                    <a className="link "><TfiTwitterAlt></TfiTwitterAlt></a>
                    <a className="link "><FaInstagram></FaInstagram></a>
                    <a className="link "><IoLogoLinkedin></IoLogoLinkedin></a>
                </nav>
                <nav>
                    <h6 className="dancing-script text-3xl text-[#361c0d] mb-4">Get in Tuch</h6>
                    <a className="flex items-center text-[#361c0d] mb-2"><FaPhone className="mr-4"></FaPhone> <span>+88 o1345 999 33 1111</span></a>
                    <a className="flex items-center text-[#361c0d] mb-2"><MdEmail className="mr-4"></MdEmail> <span>Coffee.Store@email.com</span> </a>
                    <a className="flex items-center text-[#361c0d]"><IoLocationSharp className="mr-4"></IoLocationSharp> <span>72 wall scool, King Road, Dhaka</span></a>
                </nav>
                </div>
                <div className="hero flex-1">
                <div className="w-full ">
                    <form>
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
                            <input type="text" className="input pt-5 pb-36" name="" id="" placeholder="message" />
                        </div>
                        <div className="form-control w-40 mt-6">
                            <button className="btn dancing-script text-[20px] border-2 text-[#522d20] border-[#522d20]
                             hover:border-[#522d20] hover:rounded-full">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            </footer>
        </div>
    );
};

export default Footer;