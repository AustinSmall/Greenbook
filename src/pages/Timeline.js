import React from "react";
import Timelinecomponent from "../components/Timeline";
 
const Timeline = () => {
    return (

         <div className="bg-vintage ">
            <div className="flex-row " >
                <h1 className="text-center pt-10 text-3xl">Timeline</h1>
                <p className="text-center pt-20 pb-10 mx-20 ">Between 1939 and 1967 The Negro Motorist's Travek Guide (The Green Book) included listing for Durham, North Carolina</p>
            </div>
            <Timelinecomponent/>

        </div>
    )
}

export default Timeline