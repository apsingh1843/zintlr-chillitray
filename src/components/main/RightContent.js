import React from 'react';
import dummyData from '../../data';

const RightContent = () => {
  return (
    <div className="w-30% p-2">
        <div className=" bg-white rounded-md content-shadow w-80">
            <h2 className="text-lg font-bold p-4 border-b border-gray-300">Recent Searches</h2>
            {dummyData.recentSearches.map((item, index) => {
                return(
                    <div key={index} className="border-b border-gray-300 flex flex-row items-center gap-2 p-4">
                        <img src={require('../../assets/icons/ep_search.png')} alt=" " />
                        <span className="text-sm text-gray-500">{item}</span>
                    </div>
                );
            })}
            <p className="text-blue-600 p-4 text-sm font-bold">Show More</p>
        </div>

        <div className=" bg-white rounded-md content-shadow w-80 mt-8">
            <h2 className="text-lg font-bold p-4 border-b border-gray-300">Topics to follow</h2>
            {dummyData.topicsToFollow.map((item, index) => {
                return(
                    <div key={index} className="border-b border-gray-300 flex flex-row items-center gap-2 py-2 px-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold">{item.name}</span>
                            <span className="text-xs text-gray-500">{item.category}</span>
                        </div>
                        <span className="border border-blue-600 text-blue-600 py-1 px-4 rounded-full ml-auto mr-2">
                            Follow
                        </span>
                        <img src={require('../../assets/icons/cross.png')} alt="cancel" />
                    </div>
                );
            })}
            <p className="text-blue-600 p-4 text-sm font-bold">Show More</p>
        </div>
    </div>
  )
}

export default RightContent;