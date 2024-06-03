function findConnections(courseId, courses) {
  let connectedCourses = [];

  for (let course of courses) {
    if (
      Array.isArray(course.prerequisites) &&
      course.prerequisites.prerequisite.includes(courseId)
    ) {
      connectedCourses.push(course);
      let newConnections = findConnections(course.id, courses);
      connectedCourses = [...connectedCourses, ...newConnections];
    }
  }

  return connectedCourses;
}
export default findConnections;
