import React from "react";
import { NavLink } from "react-router-dom";

const Upload = () => {

    //const fileReader = new FileReader();
    // sample idea from https://www.ipentec.com/document/javascript-upload-file-using-xmlhttprequest-and-upload-box
    function uploadFile(){
        const formObj = document.getElementById("form");
        const data = new FormData(formObj);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200){ // in case of request is ready to upload and http has ready to response, display alert message.
                alert(xmlhttp.responseText);
            } else{
                alert("Something wrong... readyState: " + xmlhttp.readyState + " status: " + xmlhttp.status); // in case of error, display each status why this occur error
            }
        }
        xmlhttp.open("POST", "getForm.ashx", true); // 
        xmlhttp.send(data);
    }

    return (
        <div id ="upload" className="container">
            <h2 className="mt-3 mb-3">Upload</h2>
            <form id="form" method="POST">
                <div>Upload the XML file for the map. <input name="File01" type="file" /></div>
                <button href="" onClick={uploadFile}>upload </button> 
            </form>
        </div>
        
    )
}

export default Upload;