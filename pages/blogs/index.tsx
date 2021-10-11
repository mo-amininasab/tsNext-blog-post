import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { POSTS_PER_PAGE } from '../../config';

import { GetServerSideProps, NextPage } from 'next';
import Layout from '../../components/Layout';
import Post from '../../components/Post';

interface Props {
  posts: {
    slug: string;
    frontMatter: {
      [key: string]: any;
    };
  }[];
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <Layout title="Blogs">
      {/* <div className="flex justify-between flex-col md:flex-row"> */}
      <div className="">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>

        {/* <Pagination currentPage={currentPage} numPages={numOfPages} /> */}
      </div>

      {/* <div className="w-1/4">
          <CategoryList categories={setOfCategories} />
        </div> */}
      {/* </div> */}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let page = query.page;

  if (!page) {
    page = '1';
  }
  // Todo: Assumed page always is undefined or a number. need more guards.

  const files = fs.readdirSync(path.join('posts'));

  // const numOfPages = Math.ceil(files.length / POSTS_PER_PAGE);

  const seed = (+page - 1) * POSTS_PER_PAGE;
  const postsInThisPageFileNames = files.slice(seed, seed + POSTS_PER_PAGE);
  const postsInThisPage = postsInThisPageFileNames.map((filename) => {
    const slug = filename.replace('.md', '');

    const MDWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { content, data: frontMatter } = matter(MDWithMeta);

    return {
      slug,
      frontMatter,
      // content
    };
  });

  return {
    props: {
      posts: postsInThisPage,
    },
  };
};

export default BlogPage;
