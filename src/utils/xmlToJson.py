import xmltodict
import json

def convert_xml_to_json(xml_file):
    # Read xml file
    with open(xml_file, 'r', encoding='utf-8') as file:
        xml_content = file.read()
    # Parse xml content
    # Some elements have only 1 child but they are supposed to be a list
    data_dict = xmltodict.parse(xml_content, force_list={'courseCoordinator','prerequisite', 'rule'})
    json_data = json.dumps(data_dict)
    return json_data
# Put your xml file path here
json_data = convert_xml_to_json(r'C:\Users\lythe\Downloads\my_projects\react-practice\lbvt\lbvt-roadmap\src\assets\iboe.xml')

def write_json_to_file(json_data, file_path):
    # Generate a json file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(json_data)
# Put your json file path here 
write_json_to_file(json_data, r'C:\Users\lythe\Downloads\my_projects\react-practice\lbvt\lbvt-roadmap\src\assets\iboe.json')