import React from "react";
import { NavLink } from "react-router-dom";

const Help = () => {
    return (
        <div id="Help" className="container">
            <h2 className="mt-3 mb-3">Help</h2>

            <h3 className="mb-3">How to use the system</h3>
            <ul>
                <li>To move your location, hold your right click down then move your mouse.</li>
                <li>To move your camera, hold your left click down then move your mouse.</li>
                <li>To zoom in, scrolling up your mouse and scrolling down for zoom out.</li>
                <li>When you click the building, the related information will be popped up.</li>
            </ul>
            
            
            <h3 className="mt-3 mb-3">Q&A</h3>
            <p>&emsp; Q. How I can check the map?<br/>
            &emsp; A. You can access from Home. or click <span><NavLink to="/Home" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>here</NavLink></span></p>

            <p>&emsp; Q. How I can find the course information?<br/>
            &emsp; A. You need to click the related course building in the map.</p>

            <p>&emsp; Q. Can I check the course page on the Uni SA website?<br/>
            &emsp; A. You can find a link when you click the building in the map.</p>

        </div>
    );
};

export default Help;
