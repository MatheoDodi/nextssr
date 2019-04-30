import Layout from '../components/Layout';
import Link from 'next/link';

export default () => (
  <Layout title="My Blog">
    <ul>
      <li>
        <Link href="/post?title=react">
          <a>React Post</a>
        </Link>
      </li>
    </ul>
  </Layout>
);
