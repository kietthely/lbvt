import data from '../assets/lbvt.json';
import { Link } from 'react-router-dom';

const Welcome = () => {
    // display welcome message and youtube videos which are related to LBVT in UniSA's youtube account
    // source data is came from "src\assets\lbvt.json"
    const welcomeData = data.repository.welcome;

    const welcomeInfo = [];
    const videoInfo = [];
    var k = 0; // make unique key value for some p tag 

    function setWelcomeInfo(){
        // set html info for Welcome page.
        //welcomeInfo.push(<head key={"head"}><meta httpEquiv="Permissions-Policy" content="*"/></head>);
        welcomeInfo.push(<h2 key={welcomeData.name}><b>Welcome to {welcomeData.name}</b></h2>);
        welcomeInfo.push(<p key = {k}>You can find information from each building on the map.</p>);
        k+=1;
        if ("videos" in welcomeData){
            // set html info for all videos if there is video data in the welcomeData
            videoInfo.push(<p key ={"videoHeader"}>You can check videos that are related to the program.</p>);
            videoInfo.push(<h3 key = {"videos"}>Videos</h3>);

            for (let i = 0; i < welcomeData.videos.video.length; i ++){
                videoInfo.push(<iframe key = {k+1} width="560" height="315" src={welcomeData.videos.video[i].embd} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>{welcomeData.videos.video[i].name}</iframe>);
                k +=1;
            }
        }
    }
    setWelcomeInfo();

    return (
        <div className ='container'>
            < div className = "Welcome">
            {welcomeInfo}

                <div className = "Videos">
                {videoInfo}
                </div>

                {/* To back Home screen */}
                <div className="Back">
                    <Link to={"/"} className="btn btn-outline-secondary">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
