import bgImg from '../../public/more/3.png' 
import '../App'
import logo1 from '../../public/icons/1.png'
import logo2 from '../../public/icons/2.png' 
import logo3 from '../../public/icons/3.png' 
import logo4 from '../../public/icons/4.png' 

const Bennar = () => {
    return (
        <div className='mb-20'>
            <div
                className="flex items-center justify-end pr-3 lg:pr-56 min-h-[100px] lg:min-h-[800px]"
                style={{
                    backgroundImage: `url(${bgImg})`,
                }}>
                <div className="justify-start lg:justify-end">
                    <div className="text-white">
                        <h1 className="mb-5 paprika-regular text-2xl lg:text-4xl font-semibold"> Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 ">
                            Its Coffee time - Sip & Sevor - relation in every sip! Get the nostalgia back! Your companion of <br />
                            every moment!!! Enjoy The beautiful moments and them memorable.
                        </p>
                        <button className="py-2 px-7 rounded-sm bg-[#df9f74] hover:bg-[#d4cfc4] hover:text-black">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between bg-[#1111] px-2 lg:px-52 py-5 lg:py-10'>
                <div>
                   <img src={logo1} alt="" />
                   <h2 className='dancing-script text-4xl font-semibold my-3'>Awsome Aroma</h2>
                   <p>You will defniely be a fan of the design <br /> & eroma of your coffee</p>
                </div>
                <div>
                <img src={logo2} alt="" />
                <h2 className='dancing-script text-4xl font-semibold my-3'>High Quality</h2>
                <p>We served the coffee to you mantaning <br /> the best quality</p>
                </div>
                <div>
                <img src={logo3} alt="" />
                <h2 className='dancing-script text-4xl font-semibold my-3'>Pure Gradis</h2>
                <p>The coffee is made of the green coffee <br /> beans which you will love</p>
                </div>
                <div>
                <img src={logo4} alt="" />
                <h2 className='dancing-script text-4xl font-semibold my-3'>Proper Roasting</h2>
                <p>Your Coffee is brewed by first roasting <br /> the creen coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Bennar;