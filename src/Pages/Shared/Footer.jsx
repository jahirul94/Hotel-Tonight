
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div>
                    <p className="text-lg font-semibold">Hotel Tonight</p>
                    <p>&copy; 2023 All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-300">
                        Home
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        About
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Services
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;