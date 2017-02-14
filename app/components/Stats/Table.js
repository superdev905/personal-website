import React, { Component, PropTypes } from 'react';

import TableRow from './TableRow';

class Table extends Component {

  getRows() {
    return this.props.data.map(pair => (
      <TableRow
        key={pair.label}
        label={pair.label}
        value={pair.value}
        link={pair.link}
      />
      ));
  }

  render() {
    return (
      <table>
        <tbody>
          {this.getRows()}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    link: PropTypes.string,
  })).isRequired,
};

export default Table;
