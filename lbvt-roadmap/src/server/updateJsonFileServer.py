from flask import Flask, request, jsonify
import xmltodict
import json

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    files = request.files.getlist('files')
    for file in files:
        if file.filename.endswith('.xml'):
            xml_content = file.read()
            data_dict = xmltodict.parse(xml_content, force_list={'courseCoordinator','prerequisite'})
            json_data = json.dumps(data_dict)
            with open('../assets/lbvt.json', 'w') as json_file:
                json_file.write(json_data)
        elif file.filename.endswith('.glb'):
            file.save('/models/lbvt.glb')
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)