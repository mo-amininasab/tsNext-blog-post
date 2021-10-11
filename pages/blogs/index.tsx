import fs from 'fs';
import path from 'path';

import { GetServerSideProps, NextPage } from 'next';
import Layout from '../../components/Layout';
import { POSTS_PER_PAGE } from '../../config';

interface Props {
  posts: string[]
}

const BlogPage: NextPage<Props> = ({posts}) => {
  return (
    <Layout title="Blogs">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="w-3/4 mr-10">
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div> */}

          {/* <Pagination currentPage={currentPage} numPages={numOfPages} /> */}
        </div>

        {/* <div className="w-1/4">
          <CategoryList categories={setOfCategories} />
        </div> */}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  let page = query.page;

  if (!page) {
    page = '1';
  }
  // Todo: Assumed page always is undefined or a number. need more guards.

  const files = fs.readdirSync(path.join('posts'));

  const numOfPages = Math.ceil(files.length / POSTS_PER_PAGE);

  const seed = (+page - 1) * POSTS_PER_PAGE;
  const postsInThisPage = files.slice(seed, seed + 3);

  console.log(files.slice());

  return {
    props: {
      posts: postsInThisPage,
    },
  };
};

export default BlogPage;
