import React, {Component} from 'react';

import Education from './Resume/Education';
import Jobs from './Resume/Jobs';
import Skills from './Resume/Skills';
import Courses from './Resume/Courses';

class Resume extends Component {
  render() {
    return (
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2><a href="#resume">Resume</a></h2>
          </div>
        </header>

        <Education/>
        <Jobs/>
        <Skills/>
        <Courses/>

        <article>
          <div className="references">
            <div className="title">
              <a href="#contact">
                <h3>References are available upon request</h3>
              </a>
            </div>
          </div>
        </article>


        <footer>
          <ul className="stats">
            <li><a href="#" className="icon fa-heart">0</a></li>
          </ul>
        </footer>

      </article>
    );
  }
}

export default Resume;
