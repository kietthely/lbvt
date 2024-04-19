
import json

# Load file
# Put your json file path here
with open(r'C:\Users\lythe\Downloads\my_projects\react-practice\lbvt\lbvt-roadmap\src\assets\lbvt.json', 'r') as file:
    data = json.load(file)

# Get the list of years program (year 1, year 2, year 3)
years = data['repository']['program']['courses']

# Iterate over the years
for year_num, year_key in enumerate(years.keys()):
    # Skip 'elective'
    # Handle differently
    if year_key == 'elective':
        continue

    year = years[year_key]
    # print(year)
    # Iterate over the study periods in each year
    for sp_num, sp in year.items():
        
        
        # Iterate over the courses in each study period
        # for course_num, course in enumerate(sp['course']):
        #     # Get the course coordinators
        #     course_coordinators = course.get('courseCoordinators', {}).get('courseCoordinator', None)
        #     # print(sp_num)
        #     # Get the building object
        #     building_name = f"year{year_num}_sp{sp_num}_building_{course_num}"

        #     # Attach the course information to the building object
        #     course_id = course.get('id', 'N/A')
        #     course_name = course.get('name', 'N/A')
        #     course_url = course.get('url', 'N/A')
        #     notes = course.get('notes', {}).get('note', 'N/A')
        #     rules = course.get('rules', {}).get('rule', 'N/A')
        #     externally = course.get('offeredExternally', 'N/A')

              

        #     # Attach prerequisites to each object
        #     prerequisites = course['prerequisites']['prerequisite']
        #     for i, prerequisite in enumerate(prerequisites):
        #         prerequisite_id = prerequisite['id']
        #         print("Prerequisite " + str(i+1) + " id: " + str(prerequisite_id))

        #     # Attach each course coordinator to the building object
        #     for i, coordinator in enumerate(course_coordinators):
        #         course_coordinators_name = coordinator['name']
        #         course_coordinators_url = coordinator['url']
        #         print("Course Coordinator " + str(i+1) + " name: " + str(course_coordinators_name))
        #         print("Course Coordinator " + str(i+1) + " url: " + str(course_coordinators_url))

        #     print("id: " + str(course_id) + "\nname:" +str(course_name) + 
        #         "\nurl: " + str(course_url) + "\n"+ "\nnotes: " + str(notes) + "\n" + "\nrules: " + 
        #         str(rules) + "\n\n" + "offeredExternally: " + str(externally) + "\n\n")
# Handle 'elective'