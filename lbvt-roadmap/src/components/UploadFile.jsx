import React from "react";

class UploadFile extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const file = this.fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);
    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Do something with the JSON data
        console.log(data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" ref={(input) => (this.fileInput = input)} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default UploadFile;
