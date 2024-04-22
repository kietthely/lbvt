import React from "react";
import { NavLink } from "react-router-dom";

const Help = () => {
    return (
        <div className="container">
            <h2 className="mt-3 mb-3">Help</h2>
            
            <h3>Q&A</h3>
            <p>Q. How I can check the map?<br/>
               A. You can access from Home. or click <span><NavLink to="/Home" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>here</NavLink></span></p>

            <p>Q. How I can find the course information?<br/>
               A. You need to click the related course building in the map.</p>

            <p>Q. Can I check the course page on the Uni SA website?<br/>
               A. You can find a link when you click the building in the map.</p>



        </div>
    );
};

export default Help;
