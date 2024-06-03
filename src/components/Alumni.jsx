import { Link } from 'react-router-dom';
import data from '../assets/lbvt.json';

const Alumni = () => {
    const alumniData = data.repository.alumnus;

    const alumniInfo = []

    function setAlumniInfo(){
        // set html information to the array
        alumniInfo.push(<h2 key="Alumni"><b>Alumni</b></h2>);
        {/* add all information of Alumni */}
            for (let i = 0; i < alumniData.alumni.length; i++){
                alumniInfo.push(<p key = {alumniData.alumni[i].name}>Name: <a href={alumniData.alumni[i].url} target="_blank" rel="noopener noreferrer"> {alumniData.alumni[i].name} </a></p>);
            }
        }
    
    setAlumniInfo();

    return(
        <div className="container">
            <div className="alumni">
                {alumniInfo}

                {/* To back Home screen */}
                <div className="Back">
                    <Link to={"/"} className="btn btn-outline-secondary">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Alumni;
