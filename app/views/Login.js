import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Login = () => (
  <Main fullPage>
    <article className="post" id="login">
      <div>
        <h2><Link to="/login">Login</Link></h2>
        <p>
          You&apos;re about to learn a lot about me. Let me learn a little about you.
          I only ask for your email address and I promise not to spam you.
          You can login with your google account below.
        </p>
        <div className="login-container">
          <h3><a href="/login/google">LOGIN WITH GOOGLE</a></h3>
        </div>
      </div>
    </article>
  </Main>
);

export default Login;
