
import { NavLink } from "react-router-dom";

const Help = () => {
    return (
        <div id="Help" className="container">
            <h2 className="mt-3 mb-3">Help</h2>

            <h3 className="mb-3">How to use the system</h3>
            <p>&emsp; To move your location, hold your right click down then move your mouse.<br/>
            &emsp; or click arrow buttons which are right middle of the screen.</p><br/>

            <p>&emsp; To move your camera, hold your left click down then move your mouse.<br/>
            &emsp; Or slide a +/- bar which are right middle of the screen to modifying the height</p><br/>

            <p>&emsp; To reset camera, click the circle button which is on right bottom corner.</p><br/>

            <p>&emsp; To zoom in, scrolling up your mouse and scrolling down for zoom out.</p><br/>

            <p>&emsp; When you click the building, the related information will be popped up.</p><br/>          
            
            <h3 className="mt-3 mb-3">Q&A</h3>
            <p>&emsp; Q. How I can check the map?<br/>
            &emsp; A. You can access from <NavLink to="/?program=lbvt" id="link" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>here</NavLink>.</p><br/>

            <p>&emsp; Q. How I can find the course information?<br/>
            &emsp; A. You need to click the related course building in the map.</p><br/>

            <p>&emsp; Q. Can I check the course page on the Uni SA website?<br/>
            &emsp; A. You can find a link when you click the building in the map.</p><br/>

            <p>&emsp; Q. Can I change the program for the roadmap?<br/>
            &emsp; A. Currently, you can change <NavLink to="/?program=lbvt" id="link" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>LBVT</NavLink> or <NavLink to="/?program=iboe" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>IBOE</NavLink> program.<br/>
            &emsp; &emsp; To change the road map, click the link above or enter &quot;?program=lbvt&quot; or &quot;?program=iboe&quot; after the localhost::XXXX.</p>
            
        </div>
    );
};

export default Help;
