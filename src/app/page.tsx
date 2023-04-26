import fs from 'fs'; //ファイルシステム
import Link from 'next/link';

const getPostMetadata = () => {
  const folder = 'posts/'; // 投稿ファイルが入っているフォルダを指定
  const files = fs.readdirSync(folder); // フォルダの中身を読み取る
  const markdownPosts = files.filter((file) => file.endsWith('.md')); // .md ファイルを選択
  const slugs = markdownPosts.map((file) => file.replace('.md', '')); // ファイル名から.mdだけ除いたものをslugに代入
  return slugs;
};

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div>
      <Link href={`/posts/${slug}`}>
      <h2>{slug}</h2>
      </Link>
    </div>
  ));

  return <div>{postPreviews}</div>;
};

export default HomePage;
