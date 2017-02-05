import React, { Component, PropTypes } from 'react';

class CategoryButton extends Component {

  handleClick() {
    this.props.handleClick(this.props.label);
  }

  render() {
    return (
      <button
        className={`skillbutton ${this.props.active[this.props.label] ? 'skillbutton-active' : ''}`}
        type="button"
        onClick={this.handleClick.bind(this)}
      >
        {this.props.label}
      </button>
    );
  }
}

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.object.isRequired,
};

export default CategoryButton;
