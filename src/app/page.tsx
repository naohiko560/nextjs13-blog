import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import { client } from '../lib/client';

// SSG
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

const HomePage = (blog: any) => {
  return (
    <>
      {blog.map((blog: any) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PostPreview}
        </div>
      ))}
    </>
  );
};

export default HomePage;
