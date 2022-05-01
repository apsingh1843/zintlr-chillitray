import React from 'react';
import CenterContent from "./CenterContent";
import RightContent from "./RightContent";

const Main = () => {
    return (
        <div className="w-82% flex flex-row">
            <CenterContent />
            <RightContent />
        </div>
    )
}

export default Main;
