import data from '../assets/lbvt.json';
import { Link } from 'react-router-dom';
const Industry = () =>{
    const industryData = data.repository.industries;

    const partnerInfo = [];
    const associationInfo = [];

    function setPartnerInfo(){
        // set html information for partner to the array
        partnerInfo.push(<h3 key ={"Partner companies"}><b>Partner companies</b></h3>);
        for (let i = 0; i < industryData.partner.length; i ++){
            if (industryData.partner[i].url != null){ 
                partnerInfo.push(<p key={industryData.partner[i].name}>Name: <a href={industryData.partner[i].url} target="_blank" rel="noopener noreferrer">{industryData.partner[i].name}</a></p>);
            }
            else {
                /* case when partner company does not have the URL */
                partnerInfo.push(<p key={industryData.partner[i].name}>Name: {industryData.partner[i].name}</p>);
            }
            }
        }

    function setAssociationInfo(){
        // set html information for association to the array
        associationInfo.push(<h3 key ={"Related associations"}><b>Related associations</b></h3>);
        for (let i = 0; i < industryData.associations.association.length; i++){ 
            if (industryData.associations.association[i].url != null){
                associationInfo.push(<p key={industryData.associations.association[i].name}> Name: <a href={industryData.associations.association[i].url} target="_blank" rel="noopener noreferrer">{industryData.associations.association[i].name}</a></p>);
            } else {
                /* case for the association does not have URL data */
                associationInfo.push(<p key={industryData.associations.association[i].name}> Name: {industryData.associations.association[i].name} </p>);
            }
        }
    }

    setAssociationInfo();
    setPartnerInfo();

    
    return (
        <div className ='container'>
        <h2><b>Industry</b></h2>
        <p>You can check partner companies from list below.</p>

        {/* display all partner companies which are on the Uni SA's web page */}
        { "partner" in industryData && (
            <div className="Partners">
                {partnerInfo}
            </div>
        )} 

        {/* debug for partner section */}
        {"partner" in industryData === false &&(
            <p>Oops. There is no partner information</p>
        )}

        {/* display all Related associations for the program */}
        { "associations" in industryData && (
            <div className="Associations">
                {associationInfo}
            </div>
        )}
        {/* debug for association section */}
        {"associations" in industryData === false &&(
            <p>Oops. There is no association information</p>
        )}
        {/* To back Home screen */}
        <div className="Back">
            <Link to={"/"} className="btn btn-outline-secondary">Back</Link>
        </div>

    </div>
    )
}
export default Industry;
