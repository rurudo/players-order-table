import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TextField from 'material-ui/TextField';

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <TextField
        hintText=""
        floatingLabelText={this.props.placeholder}
        onKeyDown={e => { this.handleSubmit(e); }}
        value={this.state.text}
        onChange={e => { this.handleChange(e); }}
      />
    );
  }
}
