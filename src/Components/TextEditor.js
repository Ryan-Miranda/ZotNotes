import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // Text Editor

class TextEditor extends Component {
  render() {
    return (
      <ReactQuill
        ref={this.props.setRef}
        value={this.props.text}
        onChange={this.props.handleChange}
        theme="snow"
        style={{
          flex: 1,
          backgroundColor: "white",
          color: "black",
          height: "94%",
        }}
      />
    )
  }
}

export default TextEditor;
