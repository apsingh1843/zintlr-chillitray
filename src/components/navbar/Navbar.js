import React from "react";
import { ReactComponent as CompanyLogo } from "../../assets/images/logo.svg";

const Navbar = () => {

  return (
    <>
        <div className="nav-wrapper w-full px-8 flex items-center justify-between bg-white">
            <div className="flex items-center gap-8 justify-between">
                <a href="/" className="z-10 flex flex-row gap-1 items-center">
                    <CompanyLogo className="w-30px h-30px" />
                    <p className="text-blue-700 font-medium text-20px">Zintlr</p>
                </a>
                <div className="flex gap-4 items-center">
                    {['Feed', 'Dashboard', 'Lookup', 'List', 'Team'].map((item, index) =>{
                        return(
                            <a key={index} href="/" className="font-medium text-gray-500 text-16px">
                                {item}
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  );
};

export default Navbar;