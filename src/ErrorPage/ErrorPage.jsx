import { Link } from "react-router-dom";
import bg from "../../public/404/404.gif"
import { MdKeyboardBackspace } from "react-icons/md";
import Header from "../components/Header";

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex flex-col items-center text-center">
                <Link to={'/'} ><button className="dancing-script text-2xl flex items-center p-3">
                    <MdKeyboardBackspace className="mr-2 hover:pr-2"></MdKeyboardBackspace> Bact to home</button></Link>
                <img width={'1100px'} src={bg} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;