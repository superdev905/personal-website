import React, { Component } from 'react';

import Table from './Table';
import data from '../../data/stats';

class PersonalStats extends Component {

  constructor(props) {
    super(props);
    this.state = { data };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 100);
  }

  tick() {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1990-02-05T09:24:00');
    this.state.data.age.value = ((Date.now() - birthTime) / divisor).toFixed(9);
    this.setState({
      data: this.state.data,
    });
  }

  render() {
    return (
      <div>
        <h3>Some stats about me</h3>
        <Table
          data={Object.values(this.state.data)}
        />
      </div>
    );
  }
}

export default PersonalStats;
