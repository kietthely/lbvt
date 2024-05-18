import data from '../assets/lbvt.json';
import Home from 'src/components/Home.jsx';
const Course = (course) =>{
    // display UI for course information with the related event
    // parameter: -> the course as object (course information from click event with course building)

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
        <div id ='courseUI'>
            <h3>{course.name}</h3>
            <p>Course ID: {course.id}</p>
            { function() {
                /* display all course coordinator's information */
                if (course.courseCoordinators.courseCoordinator.length != 1) {
                    for (let i = 0; i < course.courseCoordinators.courseCoordinator.length; i++) {
                        <p>Course coordinator: <a href={course.courseCoordinators.courseCoordinator[i].url} target="_blank" rel="noopener noreferrer">{course.courseCoordinators.courseCoordinator[i].name}</a></p>
                    }
                } else {
                    /* case for there is not multiple course coordinator */
                    if (course.courseCoordinators.courseCoordinator[0].name != null){
                        <p>Course coordinator: <a href={course.courseCoordinators.courseCoordinator[0].url} target="_blank" rel="noopener noreferrer">{course.courseCoordinators.courseCoordinator[0].name}</a></p>
                    } else {
                        /* case for the course does not have course coordinator (ex. elective courses)*/
                        <p>Course coordinator: N/A</p>
                    }
                }

                /* display all prerequisite information*/
                for (let i = 0; i < course.prerequisites.prerequisite.length; i++) {
                    if (course.prerequisites.prerequisite[i].id != null){ 
                    /*get the prerequisite course information then set the course name and url as a link */
                    var prerequisite = getPrerequisite(course.prerequisites.prerequisite[i].id);
                    <p>Prerequisite: <a href={prerequisite.url} target="_blank" rel="noopener noreferrer">{prerequisite.name} ({prerequisite.id})</a></p>
                    } else{
                        /* case for the course does not have prerequisite */
                        <p>Prerequisite: N/A</p>
                    }
                }

                /* display notes for the course if it has specific information. */
                if (course.notes.note != null){
                    <p>Note: {course.notes.note}</p>
                }

                /* display rules for the course if it has specific information. */
                if (course.rules.rule != null){
                    <p>Rule: {course.rules.rule}</p>
                }

                /* display the link for the Uni SA's course page */
                <p>More information about the course: <a href={course.url} target="_blank" rel="noopener noreferrer">Link</a></p>
            }}
            
        {/* To back Home screen (need to find how to write code)*/}
        <button ><Home/></button> 
        </div>
    )
}

export default Course;