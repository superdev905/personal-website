import React, { Component, PropTypes } from 'react';


// TODO To be provided by an API
const data = [
  {
    label: 'Stars this repository has on github',
    value: '0',
    link: 'https://github.com/mldangelo/mldangelo/stargazers',
  },{
    label: 'number of lines of code powering this website',
    value: '9762',
    link: 'https://github.com/mldangelo/mldangelo/graphs/contributors',
  },{
    label: 'number of forks',
    value: '3',
    link: 'https://github.com/mldangelo/mldangelo/network',
  },{
    label: 'number of spoons',
    value: '0',
  },{
    label: 'number of linter warnings',
    value: '2',
  },{
    label: 'languages used',
    value: '6',
  },{
    label: 'number of contributors',
    value: '1',
    link: 'https://github.com/mldangelo/mldangelo/graphs/contributors',
  },{
    label: 'github issues',
    value: '0',
  }
];


class TableRow extends Component {
  render(){
    return (
      <tr>
        <td>{this.props.label}</td>
        <td>{this.props.value}</td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};


const tableStyle = {
  width: '100%',
};

class Table extends Component {

  getRows() {
    return this.props.data.map((pair) => {
      return (
        <TableRow
          label={pair.label}
          value={pair.value} />
      );
    });
  }

  render() {
    return (
      <table style={tableStyle}>
        <tbody>
          {this.getRows()}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

class SiteStats extends Component {

  render() {
    return (
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2><a href="#stats">Some stats about this site</a></h2>
            <p>Click <a href="https://github.com/mldangelo/mldangelo/tree/master/scripts">here</a> to see how these are generated.</p>
          </div>
        </header>

        <Table
          data={data}
        />

        <footer>
          <ul className="stats">
            <li><a href="#" className="icon fa-heart">0</a></li>
          </ul>
        </footer>
      </article>
    );
  }
}

export default SiteStats;
