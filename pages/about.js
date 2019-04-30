import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from './_error';
import Layout from '../components/Layout';

class About extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/matthewdodi');
    const statusCode = res.status > 200;
    const data = await res.json();
    return { user: data, statusCode };
  }

  render() {
    const { user } = this.props;
    return (
      <>
        {this.props.statusCode ? (
          <Error />
        ) : (
          <>
            <p>{user.bio}</p>
            <img src={user.avatar_url} alt="Matthew Dodi" />
          </>
        )}
      </>
    );
  }
}

export default About;
