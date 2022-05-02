import React from "react";
import { ReactComponent as CompanyLogo } from "../../assets/images/logo.svg";

const Navbar = () => {

  return (
    <>
        <div className="nav-wrapper w-full flex flex-row items-center gap-4 px-10 bg-white">
            <a href="/" className="flex flex-row gap-1 items-center">
                <CompanyLogo className="w-30px h-30px" />
                <p className="text-blue-700 font-medium logo-shadow text-20px">Zintlr</p>
            </a>
            <div className="flex gap-4 items-center ml-12">
                {['Feed', 'Dashboard', 'Lookup', 'List', 'Team'].map((item, index) =>{
                    return(
                        <a key={index} href="/" className="font-medium text-gray-500 logo-shadow text-16px">
                            {item}
                        </a>
                    )
                })}
            </div>
            <div className="flex flex-row items-center gap-1 ml-auto border px-2 py-1 border-gray-400 rounded-full">
                <input type="text" className="border-0 outline-0 text-xs text-gray-400" placeholder="Search any keyword..." />
                <span className="p-1 rounded-full shadow">
                    <img src={require('../../assets/icons/search.png')} alt=" " />
                </span>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-1">
                    <img src={require('../../assets/icons/credits.png')} alt=' ' />
                    <span className="text-15px">Credits</span>
                </div>
                <div className="rounded-full w-40 h-4 bg-gray-100">
                    <div className="w-70% bg-orange-300 h-full rounded-full"></div>
                </div>
            </div>
            <div className="flex flex-row items-center gap-2">
                <img src={require('../../assets/icons/notification.png')} alt=' ' />
                <span className="text-16px font-semibold">Bansilal Batra</span>
                <img src={require('../../assets/icons/arrow.png')} alt=' ' />
            </div>
            <img src={require('../../assets/images/avatar.png')} alt='profile' />
            <button type="button" className="border-0 rounded-xl shadow bg-orange-300 py-2 px-4 text-sm font-bold">
                Upgrade
            </button>
        </div>
    </>
  );
};

export default Navbar;