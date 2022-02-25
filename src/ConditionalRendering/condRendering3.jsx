import React from "react";
import "./style.css";

const EditComponent = ({ handleEdit }) => {
  return <button onClick={handleEdit}>Edit</button>;
};

const SaveComponent = ({ inputText, handleChange, handleSave }) => {
  return (
    <>
      <input type="text" id="name" value={inputText} onChange={handleChange} />

      <button onClick={handleSave}>Save</button>
    </>
  );
};

//Higher Order Components(HOC) are special kind of functions that returns different components
//based on given criteria
const withEither = (conditionFunc, EitherComponent) => Component => props => {
  return conditionFunc(props) ? (
    <EitherComponent {...props} />
  ) : (
    <Component {...props} />
  );
};

const isReadOnlyMode = ({ isReadOnly }) => isReadOnly;

const withEditConditionalRendering = () =>
  withEither(isReadOnlyMode, EditComponent);
const SaveEditWithConditionalRendering = () =>
  withEditConditionalRendering(SaveComponent);

export default class ConditionalRendering3 extends React.Component {
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

    return (
      <div className="bodyDiv">
        <label>{showedText}</label>
        <SaveEditWithConditionalRendering
          isReadOnly={isReadOnly}
          inputText={inputText}
          handleChange={this.onHandleChange}
          handleSave={this.onHandleSave}
          handleEdit={this.onHandleEdit}
        />
      </div>
    );
  }
}
