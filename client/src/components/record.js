import React, { Component } from 'react';
// import '../styles/formStyle.css';


class Record extends Component {

  handleChange = e => {
    const value = e.target.value;
    const fieldID = this.props.record.fieldID;
    this.props.updateRecord(fieldID, value);
  }

  render() {
    return (
      <div>
        {this.props.record.fieldName}:
        <input
          value={this.props.record.record_value}
          type="text"
          onChange={this.handleChange}
        />  
      </div>
    )
  }
}

export default Record;