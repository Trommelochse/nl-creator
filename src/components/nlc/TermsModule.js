import React, { Component } from 'react'
import IconTextField from '../common/IconTextField.js'

const SingleLineField = props => (
  <div>
    <IconTextField
      floatingLabelText="Terms sub-line (mark link with %%text%%)"
      icon="fa-info"
      fullWidth
      value={props.sublineText}
      onChange={props.onChangeText}
    />
    <IconTextField
      floatingLabelText="Link to T&Cs"
      fullWidth
      value={props.sublineLink}
      onChange={props.onChangeLink}
    />
  </div>
)

const BulletsField = props => (
  <div>
    <IconTextField
      floatingLabelText="Content"
      icon="fa-info"
      multiLine
      fullWidth
      rows={4}
      />
  </div>
)

export default class TermsModule extends Component {

  render() {
    return (
      <div>
        {
          this.props.termsType === 'single' ?
          <SingleLineField
            sublineText={this.props.sublineText}
            sublineLink={this.props.sublineLink}
            onChangeText={this.props.onChangeText}
            onChangeLink={this.props.onChangeLink}
            /> : null
        }
        {
          this.props.termsType === 'bullets' ?
          <BulletsField /> : null
        }
      </div>
    )
  }
}
