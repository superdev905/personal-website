import React, { PropTypes } from 'react';

import Degree from './Education/Degree';

const getRows = (degrees) => degrees.map(degree => (
  <Degree
    data={degree}
    key={degree.school}
  />
));

const Education = (props) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {getRows(props.data)}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Education.defaultProps = {
  data: [],
};


export default Education;
