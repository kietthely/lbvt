import data from '../assets/lbvt.json';
import Home from 'src/components/Home.jsx';

const Welcome = () => {
    // display welcome message and youtube videos which are related to LBVT in UniSA's youtube account
    // source data is came from "src\assets\lbvt.json"
    const welcomeData = data.repository.welcome;
    return (
        <div id ='welcomeUI'>
            <head><meta httpEquiv="Permissions-Policy" content="*"/></head>
            <h2>Welcome to {welcomeData.name}</h2>
            <p>You can find information from each building on the map.</p>

            {"videos" in welcomeData && (
                <div id="videos">
                    <p>In this building, you can check videos that are related to the program.</p>
                    <h3>Videos</h3>
                    { function() {
                        for (let i = 0; i < welcomeData.videos.video.length; i ++){
                            //<p><b>{welcomeData.videos.video[i].name}</b></p>
                            <iframe width="560" height="315" src={welcomeData.videos.video[i].embd} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>{welcomeData.videos.video[i].name}</iframe>
                        }
                    }}
                </div>
            )}
            {/* debug for videos section */}
            {"videos" in welcomeData === false &&(
                <p>Oops, There is no data for video to display.</p>
            )}
        {/* To back Home screen (need to find how to write code)*/}
        <button ><Home/></button> 
        </div>
    )
}

export default Welcome;