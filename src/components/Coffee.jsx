import coffee1 from '../../public/cups/Rectangle 9.png'
import coffee2 from '../../public/cups/Rectangle 10.png'
import coffee3 from '../../public/cups/Rectangle 11.png'
import coffee4 from '../../public/cups/Rectangle 12.png'
import coffee5 from '../../public/cups/Rectangle 13.png'
import coffee6 from '../../public/cups/Rectangle 14.png'
import coffee7 from '../../public/cups/Rectangle 15.png'
import coffee8 from '../../public/cups/Rectangle 16.png'

const Coffee = () => {
    return (
        <div className='flex flex-col justify-center text-center items-center mt-20'>
            <div className='my-10'>
                <p>--- Sip & Sevor ---</p>
                <h1 className='text-4xl text-[#522d20] dancing-script my-2'>Follow on Instagram</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
                <img src={coffee1} alt="" />
                <img src={coffee2} alt="" />
                <img src={coffee3} alt="" />
                <img src={coffee4} alt="" />
                <img src={coffee5} alt="" />
                <img src={coffee6} alt="" />
                <img src={coffee7} alt="" />
                <img src={coffee8} alt="" />
            </div>
        </div>
    );
};

export default Coffee;