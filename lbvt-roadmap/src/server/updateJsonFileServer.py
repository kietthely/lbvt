from flask import Flask, request
import xmltodict
import json

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    xml_content = file.read()
    data_dict = xmltodict.parse(xml_content, force_list={'courseCoordinator','prerequisite'})
    json_data = json.dumps(data_dict)

    # Save json_data to a file
    with open('../assets/lbvt.json', 'w') as json_file:
        json_file.write(json_data)

    return json_data

if __name__ == '__main__':
    app.run(debug=True)