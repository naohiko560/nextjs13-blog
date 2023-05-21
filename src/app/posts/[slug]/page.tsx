import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';
import Image from 'next/image';

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

// 存在しないURLの時、404ページを表示する
// export const dynamicParams = false;

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

// 投稿記事のメタデータ設定
export async function generateMetadata(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return {
    title: post.data.title,
    description: post.data.description,
  };
}

// 投稿記事の出力
const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div>
      <p className="text-center">{post.data.date}</p>
      <h1 className="text-2xl text-violet-600 font-bold text-center mt-3">
        {post.data.title}
      </h1>
      <Image
        alt={post.data.title}
        src={`/images/${post.data.image}`}
        width={1200}
        height={700}
        className="mt-3"
      />
      <div className="text-center mt-3">
        <a href="/" className="">
          {post.data.category}
        </a>
      </div>
      <article className="prose prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
