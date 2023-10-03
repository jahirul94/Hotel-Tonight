import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import Footer from "../Pages/Shared/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHotels } from "../StateManagement/actions/hotelsSlice";

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHotels());
    }, [dispatch])
    
    return (
        <div className="bg-[#F5F4FD]">
            <Nav></Nav>
            <div className="w-11/12 mx-auto"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;