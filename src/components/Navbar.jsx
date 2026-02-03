import { ChevronDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo/logo.png';

const Navbar = () => {
    return (
        <nav className="h-[81px] w-full flex items-center justify-between sticky top-0 z-50 overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, black 60%, rgba(0, 0, 0, 0) 100%)' }} />
            </div>

            {/* Content Area */}
            <div className="relative z-10 w-full flex items-center justify-between px-6 lg:px-12 h-full">
                <div className="flex items-center space-x-12 h-full">
                    {/* Logo wrapped in Link to home */}
                    <Link to="/" className="flex items-center cursor-pointer">
                        <img
                            src={logoIcon}
                            alt="Ruby FX"
                            className="h-[55px] w-auto object-contain"
                        />
                    </Link>

                    <div className="hidden lg:flex items-center space-x-7 text-xs xl:text-[13px] font-medium text-white">
                        <Link to="/trading" className="flex items-center space-x-1.5 hover:text-red-500 transition-colors">
                            <span>Trading</span>
                            <ChevronDown size={14} className="opacity-40" />
                        </Link>
                        <button className="flex items-center space-x-1.5 hover:text-red-500 transition-colors text-nowrap">
                            <span>Analytics & Education</span>
                            <ChevronDown size={14} className="opacity-40" />
                        </button>
                        <button className="flex items-center space-x-1.5 hover:text-red-500 transition-colors">
                            <span>Company</span>
                            <ChevronDown size={14} className="opacity-40" />
                        </button>
                        <button className="flex items-center space-x-1.5 hover:text-red-500 transition-colors text-nowrap">
                            <span>Partnership Programs</span>
                            <ChevronDown size={14} className="opacity-40" />
                        </button>
                        <button className="hover:text-red-500 transition-colors text-nowrap">Get the Deposit Bonus</button>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="bg-[#b91c1c] hover:bg-red-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-black/20">
                        Open Account
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-[#ef4444] px-8 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-black/10">
                        Login
                    </button>
                    <div className="flex items-center space-x-1.5 text-sm font-medium text-white ml-2 cursor-pointer hover:text-red-500 transition-colors group">
                        <Globe size={22} className="opacity-80 group-hover:opacity-100" />
                        <span>EN</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
