import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CategoryLabel from './CategoryLabel';

interface Props {
  post: {
    slug: string;
    frontMatter: {
      [key: string]: any;
    };
  };
}

const Post: React.FC<Props> = ({ post: { slug, frontMatter } }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md mt-6">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={frontMatter.cover_image}
          alt=""
          width={600}
          height={420}
          className="rounded-t-md cursor-pointer"
        />
      </Link>

      <div className="flex px-3 justify-between items-center">
        <span className="font-light text-gray-600 mb-2">
          {frontMatter.date}
        </span>
        <CategoryLabel category={frontMatter.category} />
      </div>

      <div className="px-3 pb-3">
        <Link href={`/blogs/${slug}`}>
          <a className="text-2xl text-gray-800 font-semibold hover:underline">
            {frontMatter.title}
          </a>
        </Link>

        <p className="mt-2 text-gray-600 overflow-ellipsis">
          {frontMatter.excerpt}
        </p>
      </div>

      <div className="flex pl-1 pr-3 pb-3 mt-1 justify-between items-center">
        <Link href={`/blogs/${slug}`}>
          <a className="text-gray-900 hover:text-blue-600 px-2 py-1">
            Read More
          </a>
        </Link>

        <div className="flex items-center space-x-4 justify-center">
          <span className="h-10 my-auto">
            <Image
              src={frontMatter.author_image}
              alt=""
              width={40}
              height={40}
              className="mx-4 object-cover rounded-full "
            />
          </span>
          <h3 className="text-gray-700 font-semibold">{frontMatter.author}</h3>
        </div>
      </div>
    </div>
  );
};

export default Post;
