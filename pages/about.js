import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout';

class About extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/matthewdodi');
    const data = await res.json();
    return { user: data };
  }

  render() {
    const { user } = this.props;
    return (
      <Layout title="About">
        <p>{user.bio}</p>
        <img src={user.avatar_url} alt="Matthew Dodi" />
      </Layout>
    );
  }
}

export default About;
