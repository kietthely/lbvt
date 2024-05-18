import data from '../assets/lbvt.json';
import Home from 'src/components/Home.jsx';
const Elective = () =>{

    const electiveData = data.repository.assistances.elective;
    var undergraduateElective = electiveData.electiveCourses.undergraduate;
    /* check the data has environmental electives */
    if ("environmental" in electiveData.electiveCourses){
        var environmentElective = electiveData.electiveCourses.environmental;
    }

    function getPrerequisite(courseID){
        // search and return the prerequisite course in general course.
        // parameter: course ID as string (ex:GEOE2026)
        // return : course information as object

        const courses_data = data.repository.program.courses;

        /* search course in year1 sp2 */
        for (let i = 0; i < courses_data.year1.sp2.course.length; i++ ){ 
            if (courses_data.year1.sp2.course[i].id === courseID){
                return courses_data.year1.sp2.course[i];
            }
        }

        /* search course in year1 sp5 */
        for (let i = 0; i < courses_data.year1.sp5.course.length; i++ ){ 
            if (courses_data.year1.sp5.course[i].id === courseID){
                return courses_data.year1.sp5.course[i];
            }
        }

        /* search course in year2 sp2 */
        for (let i = 0; i < courses_data.year2.sp2.course.length; i++ ){ 
            if (courses_data.year2.sp2.course[i].id === courseID){
                return courses_data.year2.sp2.course[i];
            }
        }

        /* search course in year2 sp5 */
        for (let i = 0; i < courses_data.year2.sp5.course.length; i++ ){ 
            if (courses_data.year2.sp5.course[i].id === courseID){
                return courses_data.year2.sp5.course[i];
            }
        }

        /* search course in year3 sp2 */
        for (let i = 0; i < courses_data.year3.sp2.course.length; i++ ){ 
            if (courses_data.year3.sp2.course[i].id === courseID){
                return courses_data.year3.sp2.course[i];
            }
        }

        /* search course in year3 sp5*/
        for (let i = 0; i < courses_data.year3.sp5.course.length; i++ ){ 
            if (courses_data.year3.sp5.course[i].id === courseID){
                return courses_data.year3.sp5.course[i];
            }
        }

        /* case for no match in the general courses */
        return null; 
    }


    return (
        <div className='electiveUI'>
            <h2>Elective</h2>
            <p>You can find the courses&apos; information for electives.</p>

            {/* section for undergraduate elective*/}
            <div id='undergraduate'> 
                <h3>Undergraduate elective</h3>
                <p>{undergraduateElective.course.notes.note}</p>
                <p>You can find the course from <a href={undergraduateElective.course.url} target="_blank" rel="noopener noreferrer">here.</a></p>

            </div>

            {/* only for LBVT course. section for environment electives*/}
            { "environmental" in electiveData.electiveCourses &&(
                <div id='environmental'>
                    <h3>Environment electives</h3>
                    {/* section for intermediate electives */}
                    <div id ='Intermediate'>
                    <p><b>Intermediate</b></p>
                    { function(){
                        for (let i = 0; i < environmentElective.intermediate.course.length; i++){
                            <p><b>{environmentElective.intermediate.course[i].name}</b><br/>
                            &emsp;course ID: {environmentElective.intermediate.course[i].id}</p>

                            {/*display all information for course coordinators in the course */}
                            if (environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator.length > 1){
                                for (let j = 0; j <environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator.length; j++){
                                    <p>Course coordinator: <a href={environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[j].url} target="_blank" rel="noopener noreferrer">{environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[j].name}</a></p>
                                }
                            } else { 
                                {/*case for there is only 1 course coordinator */}
                                <p>Course coordinator: <a href={environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[0].url}target="_blank" rel="noopener noreferrer">{environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[0].name}</a></p>
                            }

                            {/* displaying all prerequisite for the course */}
                            for (let j = 0; j < environmentElective.intermediate.course[i].prerequisites.prerequisite.length; j++){
                                if (environmentElective.intermediate.course[i].prerequisites.prerequisite[j].id != null){ 
                                    {/*get the prerequisite course information then set the course name and url as a link */}
                                    var prerequisite = getPrerequisite(environmentElective.intermediate.course[i].prerequisites.prerequisite[j].id);
                                    <p>Prerequisite: <a href={prerequisite.url} target="_blank" rel="noopener noreferrer"> {prerequisite.name} ({prerequisite.id})</a></p>
                                } else {
                                    {/*case for there is no prerequisite */}
                                    <p>Prerequisite: N/A</p>
                                }
                            }
                            <p>More information about the course: <a href={environmentElective.intermediate.course[i].url} target="_blank" rel="noopener noreferrer">Link</a></p>
                        }
                    }}
                    </div>

                    {/* section for advanced electives */}
                    <div id='Advanced'>
                    <p><b>Advanced</b></p>
                    { function(){
                        for (let i = 0; i < environmentElective.advanced.course.length; i++){
                            <p><b>{environmentElective.advanced.course[i].name}</b><br/>
                            &emsp;course ID: {environmentElective.advanced.course[i].id}</p>

                            { /*display all information for course coordinators in the course */}
                            if (environmentElective.advanced.course[i].courseCoordinators.courseCoordinator.length > 1){
                                for (let j = 0; j <environmentElective.advanced.course[i].courseCoordinators.courseCoordinator.length; j++){
                                <p>Course coordinator: <a href={environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[j].url} target="_blank" rel="noopener noreferrer">{environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[j].name}</a></p>
                                }
                            } else {
                                {/*case for there is only 1 course coordinator */}
                                <p>Course coordinator: <a href={environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[0].url} target="_blank" rel="noopener noreferrer">{environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[0].name}</a></p>
                            }

                            {/* displaying all prerequisite for the course */}
                            for (let j = 0; j < environmentElective.advanced.course[i].prerequisites.prerequisite.length; j++){
                                if (environmentElective.advanced.course[i].prerequisites.prerequisite[j].id != null){ 
                                {/* get the prerequisite course information then set the course name and url as a link */}
                                    var prerequisite = getPrerequisite(environmentElective.advanced.course[i].prerequisites.prerequisite[j].id);
                                    <p>Prerequisite: <a href={prerequisite.url} target="_blank" rel="noopener noreferrer">{prerequisite.name} ({prerequisite.id})</a></p>
                                } else {
                                {/*case for there is no prerequisite */}
                                    <p>Prerequisite: N/A</p>
                                }
                            }
                            <p>More information about the course: <a href={environmentElective.advanced.course[i].url} target="_blank" rel="noopener noreferrer">Link</a></p>
                        }
                    }}
                    </div>

                    {/* section for the note and rules for environmental electives*/}
                    <p><b>Note: {environmentElective.notes.note}</b></p>
                    <p><b>Rule: {environmentElective.rules.rule}</b></p>
                    <p>More information about environment electives: <a href={environmentElective.url} target="_blank" rel="noopener noreferrer">Link</a></p>
                </div>
            ) }
            {/* debug case for there is no environmental elective*/}
            {"environmental" in electiveData.electiveCourses === false && (
                console.log("There is no environment electives")
            )}
            {/* To back Home screen (need to find how to write code)*/}
            <button ><Home/></button> 
        </div>
)}

export default Elective;