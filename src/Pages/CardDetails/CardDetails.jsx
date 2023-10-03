import { FaArrowsAlt, FaBath, FaBed, FaBuilding } from 'react-icons/fa';
import { BiHeart } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CardDetails = () => {
    const { id } = useParams();
    const hotels = useSelector(state => state.hotels.hotels);

    const hotel = hotels?.find(h => h._id === id);

    return (
        <div className='min-h-screen'>
            <div className="shadow-2xl rounded-2xl bg-[#F5F4FD] my-8">
                {/* condition and like button  */}
                <div className='absolute'>
                    <button className='text-blue-700 font-bold bg-white
                text-lg py-2 px-4 border capitalize rounded-3xl relative top-8 left-10'>
                        {hotel?.condition}</button>
                    <button className='relative top-8 left-40 md:left-[550px] lg:left-[1550px] bg-white rounded-full p-3 text-2xl text-blue-700'><BiHeart></BiHeart></button>
                </div>
                {/* hotel images  */}
                <img className="w-full h-80 lg:h-[750px] p-4 rounded-3xl" src={hotel?.image} alt="hotel image" />

                {/* popular button  */}
                <div className='absolute'>
                    {hotel?.rating < 4.5 && <button className='px-4 py-2 bg-[#363AE3] text-white font-semibold text-lg rounded-r relative bottom-10'>popular</button>}
                </div>

                {/* hotel details  */}
                <div className="py-4 px-2 md:px-4 lg:px-6">
                    <div className='flex items-center space-x-2 my-2'>
                        <IoLocationOutline className='text-xl'></IoLocationOutline>
                        <span className='font-semibold'>{hotel?.currentLocation}</span>
                    </div>
                    <div className="font-bold text-2xl mb-6">{hotel?.hotelName}</div>
                    <div className='flex justify-between items-center mx-6'>
                        <div className='flex flex-col items-center'>
                            <FaBuilding className='card-icons'></FaBuilding>
                            <span className='card-text'>{hotel?.room} Room</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <FaBed className='card-icons'></FaBed>
                            <span className='card-text'>{hotel?.bed} Bed</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <FaBath className='card-icons'></FaBath>
                            <span className='card-text'>{hotel?.bath} Bath</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <FaArrowsAlt className='card-icons'></FaArrowsAlt>
                            <span className='card-text'>{hotel?.flatSize}</span>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-6 flex justify-between">
                    <p>
                        <span className='text-[#363AE3] text-3xl font-bold'>${hotel?.price}</span>
                        <span className='text-2xl font-semibold'>/month</span>
                    </p>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-bold 
                text-lg hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-3xl">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;