import Link from 'next/link';

const About = () => (
  <div>
    <Link href="/">
      <a>Back to Home</a>
    </Link>
    <h1>About</h1>
    <p>A JavaScript programmer</p>
    <img src="/static/javascript-1.svg" height="200px" alt="" />
  </div>
);

export default About;
