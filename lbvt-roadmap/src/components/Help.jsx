import React from "react";
import { NavLink } from "react-router-dom";

const Help = () => {
    return (
        <div id="Help" className="container">
            <h1 className="mt-3 mb-3">Help</h1>

            <h3 className="mb-3">How to use the system</h3>
            <p>&emsp; To move your location, hold your right click down then move your mouse.</p><br/>

            <p>&emsp; To move your camera, hold your left click down then move your mouse.<br/>
            &emsp; Or click red buttons with arrow on the screen.</p><br/>

            <p>&emsp; To zoom in, scrolling up your mouse and scrolling down for zoom out.<br/>
            &emsp; Or click red buttons with +/- on the screen.</p><br/>

            <p>&emsp; When you click the building, the related information will be popped up.</p><br/>            
            
            <h3 className="mt-3 mb-3">Q&A</h3>
            <p>&emsp; Q. How I can check the map?<br/>
            &emsp; A. You can access from Home. or click <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>here</NavLink>.</p><br/>

            <p>&emsp; Q. How I can find the course information?<br/>
            &emsp; A. You need to click the related course building in the map.</p><br/>

            <p>&emsp; Q. Can I check the course page on the Uni SA website?<br/>
            &emsp; A. You can find a link when you click the building in the map.</p>

        </div>
    );
};

export default Help;
