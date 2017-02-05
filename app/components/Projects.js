import React from 'react';
import { Link } from 'react-router';

import Cell from './Projects/Cell';
import data from './Projects/data/projects';

// TODO: Put projects side by side (2x2) instead of (1x4)

const getRows = () => data.map(project => (
  <Cell
    data={project}
    key={project.title}
  />
  ));

const Projects = () => (
  <article className="post" id="projects">
    <header>
      <div className="title">
        <h2><Link to="/projects">Projects</Link></h2>
        <p>A selection of projects that I&apos;m not too ashamed of</p>
      </div>
    </header>
    {getRows()}
  </article>
);

export default Projects;
