function displayCourseUI(evt, connectedCourses) {
  const evt_data = evt[0];
  if (evt_data.id != null) {
    var courseUI = window.open("", "_blank", "width=600, height=400");
    courseUI.document.write("<div id ='courseUI'>");

    courseUI.document.write("<p>" + "Course Name: " + evt_data.name + "</p>");
    courseUI.document.write("<p>" + "Course ID: " + evt_data.id + "</p>");

    for (let courseCoordinator of evt_data.courseCoordinators
      .courseCoordinator) {
      courseUI.document.write(
        "<p>" + "Course coordinator: " + courseCoordinator.name + "</p>"
      );
      courseUI.document.write(
        "<p>" +
          "More information: " +
          "<a href=" +
          courseCoordinator.url +
          ' target="_blank" rel="noopener noreferrer">Link</a></p>'
      );
    }

    if (evt_data.prerequisites.prerequisite[0].id) {
      courseUI.document.write(
        "<p>" +
          "Prerequisite : " +
          evt_data.prerequisites.prerequisite[0].id +
          "</p>"
      );
    } else {
      courseUI.document.write("<p>" + "Prerequisite : N/A </p>");
    }
    let courseList = "";
    for (let course of connectedCourses) {
      courseList += "<br>" + course.id + " " + course.name + " ";
    }

    courseUI.document.write(
      "<p>" +
        evt_data.name +
        " is a prerequisite to learn " +
        courseList +
        "</p>"
    );
    courseUI.document.write(
      "<p>" +
        "Course web page: " +
        "<a href=" +
        evt_data.url +
        ' target="_blank" rel="noopener noreferrer">Link</a></p>'
    );

    if (evt_data.notes.note) {
      courseUI.document.write("<p>" + "Note: " + evt_data.notes.note + "</p>");
    }

    if (evt_data.rules.rule) {
      courseUI.document.write("<p>" + "Rule: " + evt_data.rules.rule + "</p>");
    }

    courseUI.document.write("</div>");
  }
}
