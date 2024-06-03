import data from '../assets/lbvt.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Elective = () =>{

    const electiveData = data.repository.assistances.elective;
    var undergraduateElective = electiveData.electiveCourses.undergraduate;

    /* To show or hide sections for environmental electives */
    const [isVisible, setIsVisible] = useState(true);
    const changeVisibility = () =>{
        setIsVisible(!isVisible);
    };

    /* check the data has environmental electives */
    if ("environmental" in electiveData.electiveCourses){
        var environmentElective = electiveData.electiveCourses.environmental;

        var intermediateCourses = [];
        var advancedCourses = [];
        var k = 0; // make unique key value for some p tag (due to some course coordinators has multiple course in this page)

        /* set all intermediate courses in the array */
        for (let i = 0; i < environmentElective.intermediate.course.length; i++){

            intermediateCourses.push(<p key={environmentElective.intermediate.course[i].name}><b> {environmentElective.intermediate.course[i].name} </b></p> );
            intermediateCourses.push(<p key={environmentElective.intermediate.course[i].id}>ID: {environmentElective.intermediate.course[i].id}</p>);

            {/*display all information for course coordinators in the course */}
            if (environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator.length > 1){
                for (let j = 0; j <environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator.length; j++){
                    intermediateCourses.push(<p key = {k}>Course coordinator: <a href={environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[j].url} target="_blank" rel="noopener noreferrer">{environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[j].name}</a></p>);
                }
            } else {             
                {/*case for there is only 1 course coordinator */}
                intermediateCourses.push(<p key ={k}>Course coordinator: <a href={environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[0].url}target="_blank" rel="noopener noreferrer">{environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[0].name}</a></p>);
            }
            k += 1;

            {/* displaying all prerequisite for the course */}
            for (let j = 0; j < environmentElective.intermediate.course[i].prerequisites.prerequisite.length; j++){
                if (environmentElective.intermediate.course[i].prerequisites.prerequisite[j].id != null){   
                    {/*get the prerequisite course information then set the course name and url as a link */}
                    var prerequisite = getPrerequisite(environmentElective.intermediate.course[i].prerequisites.prerequisite[j].id);
                    intermediateCourses.push(<p key={k}>Prerequisite: <a href={prerequisite.url} target="_blank" rel="noopener noreferrer"> {prerequisite.name} ({prerequisite.id})</a></p>);
                } else {
                    {/*case for there is no prerequisite */}
                    intermediateCourses.push(<p key={k}>Prerequisite: N/A</p>);
                }
                k +=1;
            }
            intermediateCourses.push(<p key ={environmentElective.intermediate.course[i].url}>More information about the course: <a href={environmentElective.intermediate.course[i].url} target="_blank" rel="noopener noreferrer">Link</a></p>);
        }

        /* set all advanced courses in the array*/
        for (let i = 0; i < environmentElective.advanced.course.length; i++){
            advancedCourses.push(<p key ={environmentElective.advanced.course[i].name}><b> {environmentElective.advanced.course[i].name} </b></p>);
            advancedCourses.push(<p key = {environmentElective.advanced.course[i].id}>course ID: {environmentElective.advanced.course[i].id}</p>);

            {/*display all information for course coordinators in the course */}
            if (environmentElective.advanced.course[i].courseCoordinators.courseCoordinator.length > 1){
                for (let j = 0; j <environmentElective.advanced.course[i].courseCoordinators.courseCoordinator.length; j++){
                    advancedCourses.push(<p key ={k} >Course coordinator: <a href={environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[j].url} target="_blank" rel="noopener noreferrer">{environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[j].name}</a></p>);
                    k +=1;
                }
            } else {             
                {/*case for there is only 1 course coordinator */}
                advancedCourses.push(<p key = {k}>Course coordinator: <a href={environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[0].url}target="_blank" rel="noopener noreferrer">{environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[0].name}</a></p>);
            }
            k +=1;

            {/* displaying all prerequisite for the course */}
            for (let j = 0; j < environmentElective.advanced.course[i].prerequisites.prerequisite.length; j++){
                if (environmentElective.advanced.course[i].prerequisites.prerequisite[j].id != null){                             
                    {/*get the prerequisite course information then set the course name and url as a link */}

                    prerequisite = getPrerequisite(environmentElective.advanced.course[i].prerequisites.prerequisite[j].id);
                    advancedCourses.push(<p key={k}>Prerequisite: <a href={prerequisite.url} target="_blank" rel="noopener noreferrer"> {prerequisite.name} ({prerequisite.id})</a></p>);
                } else {

                    {/*case for there is no prerequisite */}
                    advancedCourses.push(<p key={k}>Prerequisite: N/A</p>);
                }
                k +=1;
            }
            advancedCourses.push(<p key={environmentElective.advanced.course[i].url}>More information about the course: <a href={environmentElective.advanced.course[i].url} target="_blank" rel="noopener noreferrer">Link</a></p>);
        }
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
        <div className='container'>
            <h2>Elective</h2>
            <p>You can find the courses&apos; information for electives.</p>

            {/* section for undergraduate elective*/}
            <div className='Undergraduate'> 
                <h3>Undergraduate elective</h3>
                <p>{undergraduateElective.course.notes.note}</p>
                <p>You can find the course from <a href={undergraduateElective.course.url} target="_blank" rel="noopener noreferrer">here.</a></p>
            </div>

            {/* only for LBVT course. section for environment electives*/}
            { "environmental" in electiveData.electiveCourses &&(
                <div className='Environmental'>

                    <h3><b>Environment electives</b></h3>
                    {/* section for intermediate electives */}
                    <div className ='Intermediate'>
                    {/*<button id={"Intermediate"} className="btn btn-outline-secondary" onClick={() => changeVisibility()}>Intermediate</button> */}
                    <h2><b>Intermediate</b></h2>
                        {intermediateCourses}
                    </div>

                    {/* section for advanced electives */}
                    <div className='Advanced'>
                    <h3>Advanced</h3>
                        {advancedCourses}
                    </div>

                    {/* section for the note and rules for environmental electives*/}
                    <div className = "Notes">
                        <p><b>Note: {environmentElective.notes.note}</b></p>
                        <p><b>Rule: {environmentElective.rules.rule}</b></p>
                        <p>More information about environment electives: <a href={environmentElective.url} target="_blank" rel="noopener noreferrer">Link</a></p>
                    </div>
                </div>
            ) }
            {/* debug case for there is no environmental elective*/}
            {"environmental" in electiveData.electiveCourses === false && (
                console.log("There is no environment electives")
            )}
            {/* To back Home screen */}
            <div className="Back">
                <Link to={"/"} className="btn btn-outline-secondary">Back</Link>
            </div>
        </div>
)}

export default Elective;
