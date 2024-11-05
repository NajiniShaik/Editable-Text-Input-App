import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {userInput: '', isSavedBtnClicked: false}

  onAddInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickSaveBtn = () => {
    this.setState(prevState => ({
      isSavedBtnClicked: !prevState.isSavedBtnClicked,
    }))
  }

  renderBtnValue = () => {
    const {isSavedBtnClicked} = this.state
    return isSavedBtnClicked ? 'Edit' : 'Save'
  }

  renderSavedElement = () => {
    const {userInput} = this.state
    return <p className="saved-input">{userInput}</p>
  }

  renderEditElement = () => {
    const {userInput} = this.state
    return (
      <input
        type="text"
        className="input-element"
        onChange={this.onAddInput}
        value={userInput}
      />
    )
  }

  render() {
    const {isSavedBtnClicked} = this.state
    return (
      <div className="bg-container">
        <div className="detailed-container">
          <h1 className="main-heading">Editable Text Input</h1>
          <div className="input-card">
            {isSavedBtnClicked
              ? this.renderSavedElement()
              : this.renderEditElement()}
            <button type="button" className="btn" onClick={this.onClickSaveBtn}>
              {this.renderBtnValue()}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
