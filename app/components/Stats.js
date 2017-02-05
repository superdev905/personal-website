import React, { Component } from 'react';
import { Link } from 'react-router';

import axios from 'axios';
import moment from 'moment';

import Table from './Stats/Table';
import data from './Stats/data/github';

class Stats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  componentDidMount() {
    const source = '/api/github';
    this.serverRequest = axios.get(source).then((result) => {
      const update = result.data;
      for (const field of data) {
        if (field.key) field.value = (field.key === 'pushed_at') ? moment(update[field.key]).format('MMMM DD, YYYY') : String(update[field.key]);
      }
      this.setState({
        data,
      });
    }).catch((error) => {
      console.error('Error', error);
    });
  }

  render() {
    return (
      <article className="post" id="stats">

        <header>
          <div className="title">
            <h2><Link to="/stats">Some stats about this site</Link></h2>
            <p>Click <a href="https://github.com/mldangelo/mldangelo/tree/master/scripts">here</a> to see how these are generated.</p>
          </div>
        </header>

        <Table
          data={data}
        />

      </article>
    );
  }
}

export default Stats;
