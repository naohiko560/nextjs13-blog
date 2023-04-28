import { PostMetadata } from './PostMetadata';
import Link from 'next/link';
import Image from 'next/image';

const postPreview = (props: PostMetadata) => {
  return (
    <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
      <Link href={`/posts/${props.slug}`}>
        <div className="hover:underline">
          <Image
            alt={props.title}
            src={`/images/${props.image}`}
            width={1200}
            height={700}
          />
          <h2 className="font-bold text-violet-600 mt-1">{props.title}</h2>
        </div>
      </Link>
      <p className="text-sm text-slate-400 mt-1">{props.date}</p>
      <p className="text-slate-700 mt-1">{props.description}</p>
    </div>
  );
};

export default postPreview;
