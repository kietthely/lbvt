import data from '../assets/lbvt.json';
import { Link } from 'react-router-dom';
const Course = (course) =>{
    // display UI for course information with the related event
    // parameter: -> the course as object (course information from click event with course building)

    const courseInfo = setCourse(course);
    var k = 0; // make unique key value for some p tag

    function setCourse(course){
        // set the course information in the array.
        courseInfo.push(<h3 key={course.name}>{course.name}</h3>);
        courseInfo.push(<p key={course.id}>Course ID: {course.id}</p>)

        if (course.courseCoordinators.courseCoordinator.length != 1) {
            for (let i = 0; i < course.courseCoordinators.courseCoordinator.length; i++) {
                courseInfo.push(<p key={course.courseCoordinators.courseCoordinator[i].name}>Course coordinator: <a href={course.courseCoordinators.courseCoordinator[i].url} target="_blank" rel="noopener noreferrer">{course.courseCoordinators.courseCoordinator[i].name}</a></p>);
            }
        } else {
            /* case for there is not multiple course coordinator */
            if (course.courseCoordinators.courseCoordinator[0].name != null){
                courseInfo.push(<p key={course.courseCoordinators.courseCoordinator[0].name}>Course coordinator: <a href={course.courseCoordinators.courseCoordinator[0].url} target="_blank" rel="noopener noreferrer">{course.courseCoordinators.courseCoordinator[0].name}</a></p>);
            } else {
                /* case for the course does not have course coordinator (ex. elective courses)*/
                courseInfo.push(<p key={k}>Course coordinator: N/A</p>)
                k +=1;
            }
        }

        /* display all prerequisite information*/
        for (let i = 0; i < course.prerequisites.prerequisite.length; i++) {
            if (course.prerequisites.prerequisite[i].id != null){ 
            /*get the prerequisite course information then set the course name and url as a link */
            var prerequisite = getPrerequisite(course.prerequisites.prerequisite[i].id);
            courseInfo.push(<p key={prerequisite.name}>Prerequisite: <a href={prerequisite.url} target="_blank" rel="noopener noreferrer">{prerequisite.name} ({prerequisite.id})</a></p>);
            } else{
                /* case for the course does not have prerequisite */
                courseInfo.push(<p key={k}>Prerequisite: N/A</p>);
                k +=1;
            }
        }

        /* display notes for the course if it has specific information. */
        if (course.notes.note != null){
            courseInfo.push(<p key ={course.notes.note}>Note: {course.notes.note}</p>);
        }

        /* display rules for the course if it has specific information. */
        if (course.rules.rule != null){
            courseInfo.push(<p key={course.rules.rule}>Rule: {course.rules.rule}</p>);
        }

        /* display the link for the Uni SA's course page */
        courseInfo.push(<p key={course.url}>More information about the course: <a href={course.url} target="_blank" rel="noopener noreferrer">Link</a></p>);
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

    return(
        <div className ='container'>
            {courseInfo}
            
            {/* To back Home screen */}
            <div className="Back">
                <Link to={"/"} className="btn btn-outline-secondary">Back</Link>
            </div>
        </div>
    )   
}

export default Course;
