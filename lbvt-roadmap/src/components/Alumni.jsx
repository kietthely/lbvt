//import React, { useEffect, useRef, useState } from "react";
import data from '../assets/lbvt.json';

const Alumni = () => {
    const alumniData = data.repository.alumnus;
    /*
    function displayAlumniUI() {
        // display UI for Alumni information with the related event
        // source data is came from "src\assets\lbvt.json"
        const alumniData = data.repository.alumnus;
        console.log(data.repository);
        var courseUI = window.open("", "_blank", "width=600, height=400"); // need to consider to change design
        courseUI.document.write("<div id ='alumniUI'>");
    
        courseUI.document.write("<h2>Alumni</h2>");
        if ("alumni" in alumniData) {
          for (let i = 0; i < alumniData.alumni.length; i++) {
            courseUI.document.write("<p>" + alumniData.alumni[i].name + "<br/>");
            courseUI.document.write(
              "<a href=" +
                alumniData.alumni[i].url +
                ' target="_blank" rel="noopener noreferrer">Link</a></p>'
            );
          }
        } else {
          courseUI.document.write("<p>Oops, There is no data for Alumni.<p/>");
        }
        courseUI.document.write("</div>");
      }
      */

    return(
        <div className="alumni">
            <h2>Alumni</h2>
            {alumniData.map((obj) => (
                // display all information about alumni
                <p key={obj.name}>{obj.name}: <a href= {obj.url} target="_blank" rel="noopener noreferrer">Link</a></p>
                    )
                )
                }
        </div>


    )
}

export default Alumni;