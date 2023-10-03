import { useSelector } from "react-redux";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import HotelCard from "../../../components/hotelCard";

const Home = () => {
    const hotels = useSelector(state => state.hotels.hotels);

    return (
        <div className="min-h-screen my-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {hotels?.map(h => <HotelCard key={h._id} hotel={h}></HotelCard>)}
        </div>
    );
};

export default Home;