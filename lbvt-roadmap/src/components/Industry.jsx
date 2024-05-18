import data from '../assets/lbvt.json';
import Home from 'src/components/Home.jsx';
const Industry = () =>{
    const industryData = data.repository.industries;

    return (
        <div id ='industryUI'>
        <h2>Industry</h2>
        <p>You can check partner companies from list below.</p>

        {/* display all partner companies which are on the Uni SA's web page */}
        { "partner" in industryData && (
            <div id="partners">
                <h3>Partner companies</h3>
                { function() {
                    for (let i = 0; i < industryData.partner.length; i ++){
                        if (industryData.partner[i].url != null){ 
                            <p>Name: <a href={industryData.partner[i].url} target="_blank" rel="noopener noreferrer">{industryData.partner[i].name}</a></p>
                        }
                        else {
                            /* case when partner company does not have the URL */
                            <p>Name: {industryData.partner[i].name}</p>
                        }
                    }
                }}
            </div>
        )} 
        {/* debug for partner section */}
        {"partner" in industryData === false &&(
            <p>Oops. There is no partner information</p>
        )}

        {/* display all Related associations for the program */}
        { "associations" in industryData && (
            <div id="associations">
                <h3>Related associations</h3>
                { function() {
                    for (let i = 0; i < industryData.associations.association.length; i++){ 
                        if (industryData.associations.association[i].url != null){
                            <p>Name: <a href={industryData.associations.association[i].url} target="_blank" rel="noopener noreferrer">{industryData.associations.association[i].name}</a></p>
                        } else {
                            /* case for the association does not have URL data */
                            <p>Name: {industryData.associations.association[i].name} </p>
                        }
                    
                    }
                }}
            </div>
        )}
        {/* debug for association section */}
        {"associations" in industryData === false &&(
            <p>Oops. There is no association information</p>
        )}
        {/* To back Home screen (need to find how to write code)*/}
        <button ><Home/></button> 

        </div>
    )
}
export default Industry;