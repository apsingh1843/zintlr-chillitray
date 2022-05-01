import React, {useState} from 'react';
import dummyData from "../../data";

const CenterContent = () => {
  const[active, setActive] = useState('All');
  return (
    <div className="pl-12 pr-4 w-70%">
        <h1 className="text-2xl font-black">Top Stories for you</h1>
        <div className="flex flex-row gap-4 items-center justify-start mt-6">
            {dummyData.stories.map((story,index) =>{
            return(
                <div key={index} className={`rounded-full bg-white py-1 px-2 text-15px shadow-sm cursor-pointer ease-in duration-100
                    ${active === story && "bg-orange-300 font-semibold"}`} onClick={()=>setActive(story)}>
                    {story}
                </div>
            );
            })}
        </div>

        <div className="flex flex-col gap-8 mt-10">
            {dummyData.mainData.map((item,index)=> {
                return(
                    <div key={index} className="rounded-md bg-white p-4 shadow-md">
                        <div className="flex flex-row gap-1">
                            <div>
                                <div className="text-sm font-bold text-gray-500">
                                    {item.category}
                                </div>
                                <div className="text-xl font-bold">
                                    {item.title}
                                </div>
                                <div className="text-sm text-gray-400 mt-2">
                                    {item.description}
                                </div>
                                <div className="flex flex-row gap-4 mt-4">
                                    <div className="flex flex-row gap-1 items-center cursor-pointer">
                                        <img src={require('../../assets/icons/like.png')} alt="like" />
                                        <span className="text-xs text-blue-600">Relevant</span>
                                    </div>
                                    <div className="flex flex-row gap-1 items-center cursor-pointer">
                                        <img src={require('../../assets/icons/share.png')} alt="share" />
                                        <span className="text-xs text-blue-600">Share</span>
                                    </div>
                                    <div className="flex flex-row gap-1 items-center cursor-pointer">
                                        <img src={require('../../assets/icons/pocket.png')} alt="read later" />
                                        <span className="text-xs text-blue-600">Read Later</span>
                                    </div>
                                    <div className="text-xs text-blue-600 ml-auto">[Source]</div>
                                    <div className="text-xs text-gray-500 mr-4">{item.time}</div>
                                </div>
                            </div>
                            <img src={require('../../assets/images/phone.png')} alt=" " />
                        </div>
                    </div>
                );
            })} 
        </div>    
    </div>
  )
}

export default CenterContent;