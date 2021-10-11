import { NextPage } from 'next';
import Layout from '../components/Layout';

interface Props {}

const AboutPage: NextPage<Props> = () => {
  return (
    <Layout
      title="About DevSpace"
      description="This is built with Next.js and Markdown"
    >
      <h1 className="text-5xl border-b-4 pb-5 font-bold">About</h1>
      <div className="bg-white shadow-md rounded-lg p-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">DevSpace Blog</h3>
        <p className="mb-3">This is built with Next.js and Markdown.</p>
        <p>
          <span className="font-bold">Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
