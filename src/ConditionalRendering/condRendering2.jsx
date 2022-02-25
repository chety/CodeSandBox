import React from "react";
import "./style.css";

const EditComponent = ({ handleEdit, buttonText }) => {
  return <button onClick={handleEdit}>{buttonText}</button>;
};

const SaveComponent = ({ inputText, handleChange, handleSave, buttonText }) => {
  return (
    <>
      <input type="text" id="name" value={inputText} onChange={handleChange} />

      <button onClick={handleSave}>{buttonText}</button>
    </>
  );
};

const If = props => {
  const condition = props.condition || false;
  const positive = props.then || null;
  const negative = props.else || null;
  return condition ? positive : negative;
};

export default class ConditionalRendering2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: null,
      showedText: null,
      isReadOnly: true
    };
  }

  onHandleChange = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  onHandleEdit = e => {
    this.setState({
      isReadOnly: false
    });
  };

  onHandleSave = () => {
    this.setState({
      showedText: this.state.inputText,
      inputText: null,
      isReadOnly: true
    });
  };

  render() {
    const { inputText, showedText, isReadOnly } = this.state;
    const editComponent = (
      <EditComponent handleEdit={this.onHandleEdit} buttonText="Edit" />
    );
    const saveComponent = (
      <SaveComponent
        inputText={inputText}
        handleChange={this.onHandleChange}
        handleSave={this.onHandleSave}
        buttonText="Save"
      />
    );
    return (
      <div className="bodyDiv">
        <label for="name" style={{ width: "100%" }}>
          Text: {showedText}
        </label>
        <If condition={isReadOnly} then={editComponent} else={saveComponent} />
        <br />
      </div>
    );
  }
}
