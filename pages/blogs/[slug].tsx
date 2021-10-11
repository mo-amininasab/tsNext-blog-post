import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/Layout';
import CategoryLabel from '../../components/CategoryLabel';

interface Props {
  frontMatter: {
    [key: string]: any;
};
  content: string;
}

const PostDetailPage: NextPage<Props> = ({frontMatter, content}) => {

  return (
<Layout title={frontMatter.title}>
      <Link href="/blog">Go Back</Link>
      <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-5xl mb-7">{frontMatter.title}</h1>
          <CategoryLabel category={frontMatter.category}/>
        </div>
        <img src={frontMatter.cover_image} alt="" className="w-full rounded" />

        <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
          <div className="flex items-center">
            <img
              src={frontMatter.author_image}
              alt=""
              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            />
            <h4>{frontMatter.author}</h4>
          </div>
          <div className="mr-4">{frontMatter.date}</div>
        </div>

        <div className="blog-text mt-2">
          {/* <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div> */}
        </div>
      </div>
    </Layout>  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const filenames = fs.readdirSync(path.join('posts'));
  const paths = filenames.map(filename => {
    const slug = filename.replace('.md', '');

    return {
      params: {slug: slug}
    }
  })
  
  return {
    paths: paths,
    fallback: false
  }
}


export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  // @ts-ignore
  const MDWithMeta = fs.readFileSync(path.join('posts', params.slug + '.md'), 'utf-8');
  const {data: frontMatter, content} = matter(MDWithMeta);


  return {
    props: {
      frontMatter,
      content
    }
  }
}

export default PostDetailPage
