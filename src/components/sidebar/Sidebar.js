import React, {useState} from 'react';
import dummyData from '../../data';

const Sidebar = () => {
    const[active, setActive] = useState('Hot Scoops');
    const styles = {
        itemDiv : "flex flex-row gap-3 items-center py-3 px-8 hover:bg-blue-50 ease-linear duration-100 rounded-r-full cursor-pointer",
    }

    return (
        <div className="w-18%">
            <div className="flex flex-col border-b-2 border-gray-300 py-6">
                {dummyData.sidebarItems.upperHalf.map((item, index) =>{
                    return(
                        <div key={index} className={`${active === item.name && "bg-blue-50"} ${styles.itemDiv}`} 
                            onClick={()=> setActive(item.name)}>
                            {active === item.name && 
                                <img src={require('../../assets/icons/active-dot.png')} alt=" " className="-ml-5" />
                            }
                            <span>
                                <img src={item.icon} alt={item.name}  />
                            </span>
                            <span className={`text-15px font-regular ${active === item.name ? "text-blue-700 font-bold" : "text-gray-700"}`}>
                                {item.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-col py-6">
                {dummyData.sidebarItems.lowerHalf.map((item, index) =>{
                    return(
                        <div key={index} className={`${active === item.name ? "bg-blue-50": ""} ${styles.itemDiv}`} 
                            onClick={()=> setActive(item.name)}>
                            {active === item.name && 
                                <img src={require('../../assets/icons/active-dot.png')} alt=" " className="-ml-5" />
                            }
                            <span>
                                <img src={item.icon} alt={item.name}  />
                            </span>
                            <span className={`text-15px font-regular ${active === item.name ? "text-blue-700 font-bold" : "text-gray-700"}`}>
                                {item.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Sidebar;