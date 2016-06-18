import React, { Component, PropTypes } from 'react';

class Contact extends Component {

  render() {
    return (
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2><a href="#contact">Contact</a></h2>
          </div>
        </header>
        <p>
          <ul className="icons">
            <li><a href="https://github.com/mldangelo" className="fa-github"><span className="label">Github</span> Github</a></li>
            <li><a href="https://facebook.com/d" className="fa-facebook"><span className="label">Facebook</span> Facebook</a></li>
            <li><a href="https://www.instagram.com/dangelosaurus/" className="fa-instagram"><span className="label">Instagram</span> Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/michaelldangelo" className="fa-linkedin"><span className="label">LinkedIn</span> LinkedIn</a></li>
            <li><a href="https://angel.co/michael-d-angelo" className="fa-angellist"><span className="label">Angel List</span> Angel List</a></li>
            <li><a href="https://twitter.com/dangelosaurus" className="fa-twitter"><span className="label">Twitter</span> Twitter</a></li>
            <li><a href="mailto:michael.l.dangelo@gmail.com" className="fa-envelope"><span className="label">Email</span> Email</a></li>
          </ul>
        </p>
      </article>
    );
  }
}

export default Contact;
