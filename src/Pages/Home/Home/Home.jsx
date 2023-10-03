import { useSelector } from "react-redux";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import HotelCard from "../../../components/hotelCard";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    const hotels = useSelector(state => state.hotels.hotels);
    const [activeTab, setActiveTab] = useState("Dubai");
    const [showAllButton, setShowAllButton] = useState([])
    const [toggleAllButton, setToggleAllButton] = useState("")
    const [category, setCategory] = useState([]);


    useEffect(() => {
        const data = hotels?.filter(h => h.city === "Dubai")
        setCategory(data?.slice(0, 3))
        setShowAllButton(data)
    }, [hotels])


    //    remove duplicate categories
    const categories = hotels?.filter((hotel, index, self) =>
        index === self.findIndex((h) => h.city === hotel.city)
    );

    //    filter categories data 
    const handleTabClick = (city) => {
        setActiveTab(city)
        if (city) {
            const data = hotels?.filter(h => h.city === city)
            setCategory(data?.slice(0, 3))
            setShowAllButton(data)
            setToggleAllButton(!toggleAllButton)
            setToggleAllButton("hidden")
        }
    };

    // for show all data 
    const handleShowMore = (categories) => {
        const city = categories?.find(c => c.city)
        const data = hotels?.filter(h => h.city === city.city)
        setCategory(data);
        setToggleAllButton("visible")
    }

    const handleShowLess = (categories) => {
        const city = categories?.find(c => c.city)
        const data = hotels?.filter(h => h.city === city.city)
        setCategory(data.slice(0, 3))
        setToggleAllButton("hidden")
    }

    return (
        <div>
            <div className="rounded-lg mt-6 py-2">
                <div className="flex space-x-3 justify-between">
                    <div className="flex space-x-3">
                        {
                            categories?.map(c => <button key={c._id} className={`${activeTab === c.city ? "btn-active" : "btn-inactive"} initial`}
                                onClick={() => handleTabClick(c.city)}>{c.city}</button>)
                        }
                    </div>
                    <button className="flex items-center bg-transparent hover:bg-blue-500 text-blue-700 text-lg hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-3xl">View All <FaArrowRight className="ms-2"></FaArrowRight></button>
                </div>
            </div>

            {/* all projects  */}
            <div className="py-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {category?.map(h => <HotelCard key={h._id} hotel={h}></HotelCard>)}
            </div>

            {/* show more and show less button  */}
            <div className="flex justify-center mb-20">
                {showAllButton?.length > 3 && <button hidden={toggleAllButton === "visible"} onClick={() => handleShowMore(category)} className="bg-blue-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded-3xl text-white text-lg font-semibold">Show More</button>}

                {toggleAllButton === "visible" && <button onClick={() => handleShowLess(category)} className="bg-blue-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded-3xl text-white text-lg font-semibold">Show Less</button>}
            </div>
        </div>
    );
};

export default Home;