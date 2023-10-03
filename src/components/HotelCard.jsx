import { FaArrowsAlt, FaBath, FaBed, FaBuilding } from 'react-icons/fa';

const HotelCard = ({ hotel }) => {
    const { hotelName, city, rating, currentLocation, room, bed, bath, flatSize, price, image, _id } = hotel;

    return (
        <div className="shadow-2xl rounded-2xl bg-[#F5F4FD]">
            <img className="w-full h-96 p-4 rounded-3xl" src={image} alt="hotel image" />
           
            <div className="px-6 py-4">
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
                    <span className='text-[#363AE3] text-3xl font-semibold'>{price}</span>
                    <span className='text-2xl font-semibold'>/month</span>
                </p>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-bold 
                text-lg hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-3xl">Read More</button>
            </div>
        </div>
    );
};

export default HotelCard;