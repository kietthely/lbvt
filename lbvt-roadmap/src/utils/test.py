
import json

# Load file
with open(r'C:\Users\lythe\Downloads\my_projects\react-practice\lbvt\lbvt-roadmap\src\assets\lbvt.json', 'r') as file:
    data = json.load(file)

# Get the list of years
years = data['repository']['program']['courses']

# Iterate over the years
for year_num, year_key in enumerate(years.keys()):
    # Skip 'elective'
    if year_key == 'elective':
        continue

    year = years[year_key]

    # Iterate over the study periods in each year
    for sp_num, sp in enumerate(year.values()):
        # Iterate over the courses in each study period
        for course_num, course in enumerate(sp['course']):
            # Get the course coordinators
            course_coordinators = course['courseCoordinators']['courseCoordinator']

            # Attach each course coordinator to the building object
            for i, coordinator in enumerate(course_coordinators):
                print(coordinator)