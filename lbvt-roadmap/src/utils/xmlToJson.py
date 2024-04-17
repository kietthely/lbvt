import xmltodict
import json

def convert_xml_to_json(xml_file):
    with open(xml_file, 'r') as file:
        xml_content = file.read()
    data_dict = xmltodict.parse(xml_content)
    json_data = json.dumps(data_dict)
    return json_data

json_data = convert_xml_to_json(r'C:\Users\lythe\Downloads\my_projects\react-practice\lbvt\lbvt-roadmap\src\assets\lbvt.xml')

def write_json_to_file(json_data, file_path):
    with open(file_path, 'w') as file:
        file.write(json_data)

write_json_to_file(json_data, r'C:\Users\lythe\Downloads\my_projects\react-practice\lbvt\lbvt-roadmap\src\assets\lbvt.json')