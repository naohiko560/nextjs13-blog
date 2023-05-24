import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import { client } from '../lib/client';

const HomePage = ({ blog }: any) => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((blog) => (
    <PostPreview key={blog.id} {...blog} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
};

export const generateStaticParams = async () => {
  const data = await client.get({
    endpoint: 'blog',
  });

  return {
    props: {
      blog: data,
    },
  };
};

export default HomePage;
