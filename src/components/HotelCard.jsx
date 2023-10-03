import { FaArrowsAlt, FaBath, FaBed, FaBuilding } from 'react-icons/fa';
import { BiHeart } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
    const navigate = useNavigate();

    const { hotelName, rating, currentLocation, condition, room, bed, bath, flatSize, price, image, _id } = hotel;

    const handleNavigate = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div onClick={() => handleNavigate(_id)} className="shadow-2xl rounded-2xl bg-[#F5F4FD]">
            {/* condition and like button  */}
            <div className='absolute'>
                <button className='text-blue-700 font-bold bg-white
                text-lg py-2 px-4 border capitalize rounded-3xl relative top-8 left-10'>
                    {condition}</button>
                <button className='relative top-8 left-40 md:left-40 lg:left-96 bg-white rounded-full p-3 text-2xl text-blue-700'><BiHeart></BiHeart></button>
            </div>
            {/* hotel images  */}
            <img className="w-full h-96 p-4 rounded-3xl" src={image} alt="hotel image" />

            {/* popular button  */}
            <div className='absolute'>
                {rating < 4.5 && <button className='px-4 py-2 bg-[#363AE3] text-white font-semibold text-lg rounded-r relative bottom-10'>popular</button>}
            </div>

            {/* hotel details  */}
            <div className="py-4 px-2 md:px-4 lg:px-6">
                <div className='flex items-center space-x-2 my-2'>
                    <IoLocationOutline className='text-xl'></IoLocationOutline>
                    <span className='font-semibold'>{currentLocation}</span>
                </div>
                <div className="font-bold text-2xl mb-6">{hotelName}</div>
                <div className='flex justify-between items-center mx-6'>
                    <div className='flex flex-col items-center'>
                        <FaBuilding className='card-icons'></FaBuilding>
                        <span className='card-text'>{room} Room</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaBed className='card-icons'></FaBed>
                        <span className='card-text'>{bed} Bed</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaBath className='card-icons'></FaBath>
                        <span className='card-text'>{bath} Bath</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaArrowsAlt className='card-icons'></FaArrowsAlt>
                        <span className='card-text'>{flatSize}</span>
                    </div>
                </div>
            </div>
            <div className="px-6 py-6 flex justify-between">
                <p>
                    <span className='text-[#363AE3] text-3xl font-bold'>${price}</span>
                    <span className='text-2xl font-semibold'>/month</span>
                </p>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-bold 
                text-lg hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-3xl">Read More</button>
            </div>
        </div>
    );
};

export default HotelCard;