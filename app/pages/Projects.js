import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

// TODO: Put projects side by side (2x2) instead of (1x4)

const getRows = () => data.map(project => (
  <Cell
    data={project}
    key={project.title}
  />
  ));

const Projects = () => (
  <article className="post" id="projects">
    <Helmet title="Projects" />
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
