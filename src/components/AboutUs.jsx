import { LuCoffee } from 'react-icons/lu';
import video from '../../public/video/video.mp4'
import bg from '../../public/more/7.png'
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import Coffee from './Coffee';

const AboutUs = () => {
    return (
        <div>
            <div
                className="h-[300px] flex items-center lg:pl-40"
                style={{
                    backgroundImage: `url(${bg})`,
                }}>
                <div className="">
                    <div className=" text-white ">
                        <h1 className="mb-5 text-2xl lg:text-7xl font-bold">About Us</h1>
                        <p className="mb-5 font-bold flex items-center">
                            <Link className='text-[#d19462] mr-2 flex items-center' to={'/'}>CoffeeKing
                                <AiOutlineRight className='text-white '></AiOutlineRight></Link>
                            About Us
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center lg:mx-40 mt-10'>
                <div>
                    <h4 className='text-2xl font-bold text-[#b89149]'>Who we are</h4>
                    <h1 className='text-6xl font-bold'>About market</h1>
                    <p className='text-[20px] my-4'>Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula <br /> odio. Donec
                        pulvinar tellus egetmagna aliquet ultricies. Praesent <br /> gravida hendrerit ex, nec eleifend sem convallis vitae.</p>
                    <button className='flex items-center py-2 px-7 rounded-md border-2 border-[#522d20] bg-[#ce943e] text-[#f3f0f0] dancing-script
                      hover:bg-[#a88044] hover:border-[#522d20] hover:rounded-full'> View All <LuCoffee className="text-[#522d20] ml-2"></LuCoffee></button>
                </div>
                <div>
                    <video width="500" controls>
                        <source src={video} type='video/mp4'>
                        </source>
                    </video>
                </div>
            </div>
            <Coffee></Coffee>
        </div>
    );
};

export default AboutUs;