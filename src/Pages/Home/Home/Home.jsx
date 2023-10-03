import { useSelector } from "react-redux";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import HotelCard from "../../../components/hotelCard";

const Home = () => {
    const hotels = useSelector(state => state.hotels.hotels);

    return (
        <div className="min-h-screen my-10 grid grid-cols-3 gap-8">
            {hotels?.map(h => <HotelCard key={h._id} hotel={h}></HotelCard>)}
        </div>
    );
};

export default Home;